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
         * Used sub-components.
         */
        components: {
            fdAlbumThumbnail
        }
    };
</script>

<template>
    <div class="section">
        <div class="thumbnail-container" v-for="album in section.albums" :key="album.id">
            <fd-album-thumbnail :album="album" />
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: calc(@content-top-margin + 1rem) auto 0 auto;
        max-width: @desktop-width;

        .thumbnail-container {
            margin: 2rem;
        }
    }
</style>
