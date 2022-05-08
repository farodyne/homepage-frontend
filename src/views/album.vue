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
         * Computed properties.
         */
        computed: {
            ratio() {
                console.log('AAAAAAAAAAAAAAA', this.album?.height / this.album?.width);
                return this.album?.height / this.album?.width;
            },

            maxWidth() {
                return `max-width: ${this.album?.width}px;`;
            }
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
            :slide-ratio="ratio"
            class="slides"
            :style="maxWidth"
            @ready="handleSliderEVent"
            @slide="handleSliderEVent"
        >
            <vueper-slide v-for="(slide, i) in album.images" :key="i" :image="slide.url" class="slide" />
        </vueper-slides>

        <div class="image-caption">
            <span>{{ album.images[index].caption }}</span>
        </div>
    </div>
</template>

<style lang="less">
    @import '../styles/common.less';

    .slider-container {
        height: auto;
        margin: calc(@content-top-margin + 1rem) 5px 0 5px;

        .slides {
            margin: 0 auto;
            background-color: transparent;

            // .box-shadow(0 0 2rem 0 @dark-shadow-color);

            @media @mobile-tight {
                max-width: 98%;
            }

            .slide {
                background-color: transparent;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
        }

        .image-caption {
            color: @caption-color;
            font-family: @caption-font;
            font-size: @caption-font-size;
            margin-top: 6px;
            text-align: center;
        }
    }

    .fd-image-caption {
        color: @caption-color;
        font-family: 'Oswald', sans-serif;
        margin-top: 12px;
        transition: all 3s ease-in-out;
    }

    .vueperslides__parallax-wrapper {
        background: @body-background;

        &:before,
        &:after {
            box-shadow: none !important;
        }
    }

    .vueperslides__arrow {
        color: @slider-arrow-color;
    }

    .vueperslides__bullet .default {
        width: 7px;
        height: 7px;
    }
</style>
