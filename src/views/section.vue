<script>
    /**
     * Author: Federico Engler
     *
     * This component implements the functionality for displaying the list of thumbnails
     * for the albums in a particular section of albums.
     */
    import { BackendApi, settings } from '@/utils';
    import { fdAlbumThumbnail } from '@/components';

    export default {
        /**
         * The parameters for this component are:
         * @param {string} type - The type of section we wish to fetch.
         */
        props: {
            type: {
                type: String,
                required: true
            }
        },

        /**
         * Component creation hook.
         */
        async created() {
            try {
                this.section = await new BackendApi(settings).getSection(this.type);
            } catch (error) {
                console.error(`Failed to get section "${this.type}" from server.`);
            }
        },

        /**
         * Reactive component properties.
         */
        data() {
            return {
                section: {}
            };
        },

        /**
         * Computed properties.
         */
        computed: {
            backdropUrl() {
                return `${settings.contentBase}/backdrops/${this.type}.jpg`;
            }
        },

        /**
         * Used sub-components.
         */
        components: {
            fdAlbumThumbnail
        }
    };
</script>

<template>
    <div>
        <!-- Render the section backdrop. -->
        <div class="backdrop">
            <img :src="backdropUrl" />
            <div class="gradient"></div>
        </div>

        <!-- Render the section thumbnails. -->
        <div class="section">
            <div class="thumbnail-container" v-for="album in section.albums" :key="album.id">
                <fd-album-thumbnail :album="album" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .backdrop {
        opacity: 0.35;
        position: fixed;
        width: 100%;
        z-index: -1;
        top: 6rem;

        @media @mobile {
            top: 5rem;
        }

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), @body-background-color);
            position: absolute;
            height: 50%;
            bottom: 0;
            width: 100%;
        }

        img {
            filter: grayscale(0.35);
            width: 100%;
        }
    }

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: calc(@content-top-margin + 1rem) auto 0 auto;
        max-width: @desktop-width;

        .thumbnail-container {
            display: flex;
            margin: 1rem;

            @media @mobile {
                margin: 1rem;
            }
        }
    }
</style>
