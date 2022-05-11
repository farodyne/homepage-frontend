<script>
    /**
     * Author: Federico Engler
     *
     * This component is used to render an album thumbnail.
     */
    export default {
        /**
         * The parameters for this component are:
         * @param {Object} album - An album thumbnail object.
         */
        props: {
            album: {
                type: Object,
                required: true
            }
        }
    };
</script>

<template>
    <div>
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

    .image {
        text-align: center;

        img {
            border: 1px solid @thumbnail-border-color;
            border-radius: 10px;
            transition-duration: 0.8s;
            .box-shadow(0 0 3rem 0 #000);

            &:hover {
                border: 1px solid @navlink-hover-color;
                .box-shadow(0 0 30px 0px @navlink-hover-color);
            }

            @media @mobile-tight {
                width: 90%;
            }
        }

        .caption {
            color: @caption-color;
            font-family: @main-font;
            font-size: @caption-font-size;
            margin-top: 3px;
            text-shadow: 1px 1px @dark-shadow-color;
        }
    }

    a {
        text-decoration: none;
        transition-duration: 0.5s;

        &:hover {
            color: @navlink-hover-color;
            .blurry-text-shadow(@navlink-color);
        }
    }
</style>
