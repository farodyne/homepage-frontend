<script>
    /**
     * Author: Federico Engler
     *
     * This component is used to render an album thumbnail.
     */
    import { BackendApi, settings } from '@/utils';

    export default {
        /**
         * The parameters for this component are:
         * @param {Object} album - An album object.
         */
        props: {
            album: {
                type: Object,
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
        }
    };
</script>

<template>
    <div class="album-thumbnail">
        <router-link :to="{ path: `/album/${album.id}` }">
            <div class="image">
                <img :src="album.url" />
                <div class="caption">
                    {{ album.caption }}
                </div>
            </div>
        </router-link>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .album-thumbnail {
        margin: 2rem;

        .image {
            text-align: center;

            img {
                border: 1px solid @thumbnail-border-color;
                .box-shadow(0px 0px 25px 0px #111);
            }

            .caption {
                color: @caption-color;
                font-family: @main-font;
                font-size: 1.4rem;
                margin-top: 3px;
            }
        }

        a {
            text-decoration: none;
        }
    }
</style>
