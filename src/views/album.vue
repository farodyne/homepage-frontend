<script>
    /**
     * Author: Federico Engler
     *
     * This component implements the view used to present an individual album. The
     * album ID is provided as a path parameter and used to fetch the album details
     * from the backend service.
     */
    import VLazyImage from 'v-lazy-image';
    import { BackendApi, settings } from '@/utils';

    export default {
        /**
         * Component creation hook.
         */
        async created() {
            const { id } = this.$route.params;

            try {
                this.album = await new BackendApi().getAlbum(id);
            } catch (error) {
                console.error(`Failed to get album "${id}" from server.`);
            }
        },

        /**
         * Reactive component properties.
         */
        data() {
            return {
                album: undefined,
                settings
            };
        },

        /**
         * Computed properties.
         */
        computed: {
            maxWidth() {
                return `max-width: ${this.album?.width}px;`;
            }
        },

        /**
         * Our used sub-components.
         */
        components: {
            VLazyImage
        }
    };
</script>

<template>
    <div v-if="album" class="album-container" :style="maxWidth">
        <h1>{{ album.caption }}</h1>

        <!-- Render the album videos. -->
        <div class="video" v-for="(video, i) in album.videos" :key="i">
            <img :src="`${settings.contentBase}/backdrops/video.png`" />
            <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        </div>

        <!-- Render the album images. -->
        <div class="image" v-for="(image, i) in album.images" :key="i" oncontextmenu="return false;">
            <v-lazy-image :src="image.url" />
            <div class="caption">{{ image.caption }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .album-container {
        margin: 1rem auto 0 auto;
        max-width: 1275px;

        .video,
        .image {
            height: auto;
            padding: 2rem 2rem 3rem 2rem;

            img {
                width: 100%;
                .box-shadow(0 0 2.4rem 0 @dark-shadow-color);
            }

            @media @mobile-tight {
                padding: 2rem 1rem 2rem 1rem;
            }
        }

        .video {
            position: relative;

            iframe {
                position: absolute;
                left: 2rem;
                height: calc(100% - 5rem);
                top: 2rem;
                width: calc(100% - 4rem);
                z-index: 10;

                @media @mobile-tight {
                    height: calc(100% - 4rem);
                    left: 1rem;
                    top: 2rem;
                    width: calc(100% - 2rem);
                }
            }
        }

        .caption {
            color: @caption-color;
            font-family: @caption-font;
            font-size: 1.6rem;
            padding-top: 2px;
            text-align: center;

            @media @mobile-tight {
                font-size: 1.4rem;
                padding-top: 1px;
            }
        }
    }
</style>
