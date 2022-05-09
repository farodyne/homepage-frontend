<script>
    /**
     * Author: Federico Engler
     *
     * This component implements our simple album view.
     */
    import VLazyImage from 'v-lazy-image';
    import { BackendApi, settings } from '@/utils';

    export default {
        /**
         * Component creation trigger.
         */
        async created() {
            const { id } = this.$route.params;

            try {
                this.album = await new BackendApi(settings).getAlbum(id);
            } catch (error) {
                console.error(`Failed to get album "${id}" from server.`);
            }
        },

        /**
         * Reactive component properties.
         */
        data() {
            return {
                album: undefined
            };
        },

        components: {
            VLazyImage
        }
    };
</script>

<template>
    <div v-if="album" class="album-container">
        <div class="image" v-for="(slide, i) in album.images" :key="i">
            <v-lazy-image :src="slide.url" />
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .album-container {
        margin: @content-top-margin auto 0 auto;
        max-width: 1275px;

        .image {
            padding: 20px;
            height: auto;

            img {
                width: 100%;
                .box-shadow(0 0 2rem 0 @dark-shadow-color);
            }
        }
    }
</style>
