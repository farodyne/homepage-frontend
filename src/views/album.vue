<script>
    /**
     * Author: Federico Engler
     *
     * This component implements the functionality for displaying the list of thumbnails
     * for the albums in a particular section of albums.
     */
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css';
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
                album: undefined,
                index: 0
            };
        },

        /**
         * Component methods.
         */
        methods: {
            handleSliderEVent(event) {
                this.index = event?.currentSlide?.index || 0;
            }
        },

        components: { VueperSlides, VueperSlide }
    };
</script>

<template>
    <div v-if="album" class="slider-container">
        <vueper-slides
            :slide-ratio="850 / 1275"
            class="fd-slides"
            @ready="handleSliderEVent"
            @slide="handleSliderEVent"
        >
            <vueper-slide v-for="(slide, i) in album.images" :key="i" :image="slide.url" />
        </vueper-slides>

        <!--
        <fd-image-captions v-model="album.images" />
        <div class="fd-image-caption">
            <span>
                {{ album.images[index].caption }}
            </span>
        </div>
        -->
    </div>
</template>

<style lang="less">
    @import '../styles/common.less';

    .slider-container {
        height: auto;
        margin-top: calc(@content-top-margin + 2rem);
    }

    .fd-slides {
        border: 1px solid @slider-border-color;
        margin: 0 auto;
        max-width: 1275px;
        // width: 1275px;

        .box-shadow(0px 0px 25px 0px #111);

        @media @mobile-tight {
            max-width: 98%;
        }
    }

    .fd-image-caption {
        color: @caption-color;
        font-family: 'Oswald', sans-serif;
        margin-top: 12px;
        transition: all 3s ease-in-out;
    }

    .vueperslides__arrow {
        color: @slider-arrow-color;
    }

    .vueperslides__bullet .default {
        width: 7px;
        height: 7px;
    }
</style>
