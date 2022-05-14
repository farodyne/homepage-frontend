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
    <div class="thumbnail-container">
        <router-link :to="`/${album.type}/${album.id}`">
            <div>
                <img :src="album.url" />
            </div>
            <div class="caption">
                {{ album.caption }}
            </div>
        </router-link>
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .thumbnail-container {
        background-color: @thumbnail-background-color;
        border: 1px solid @thumbnail-border-color;
        border-radius: 10px;
        overflow: hidden;
        transition-duration: 0.3s;

        .box-shadow(0 0 2rem 0 @dark-shadow-color);

        .caption {
            color: @thumbnail-color;
            font-family: @thumbnail-font;
            font-size: 1.2rem;
            padding: 3px 0 4px 0;
            text-align: center;
        }

        a {
            text-decoration: none;
        }

        img {
            transition-duration: 0.25s;

            &:hover {
                transform: scale(1.05);
            }
        }

        &:hover {
            .box-shadow(0 0 3rem 0 @navlink-hover-color);
        }
    }
</style>
