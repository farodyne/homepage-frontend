<script>
    /**
     * Author: Federico Engler
     *
     * This component implements the functionality to fetch and display the thumbnails
     * for the latest and newest albums on the server.
     */
    import { BackendApi, settings } from '@/utils';
    import { fdAlbumThumbnail } from '@/components';

    export default {
        /**
         * Component creation trigger.
         */
        async created() {
            try {
                this.news = await new BackendApi(settings).getNews();
            } catch (error) {
                console.error(`Failed to get album news from the server.`);
            }
        },

        /**
         * Reactive component properties.
         */
        data() {
            return {
                news: undefined
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
    <div class="news">
        <h1>Latest albums</h1>
        <div class="thumbnails">
            <div class="thumbnail-container" v-for="album in news" :key="album.id">
                <fd-album-thumbnail :album="album" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .news {
        margin: 0 auto;
        max-width: 800px;
        text-align: center;

        h1 {
            color: @news-color;
            font-family: @logo-font;
            font-size: 4rem;
            font-weight: 100;
            margin: 3rem 0 1rem 0;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            .thumbnail-container {
                margin: 0 1rem 2rem 1rem;
            }
        }
    }
</style>
