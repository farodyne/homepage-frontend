<script>
    import { fdFrontpageCarousel } from '@/components';

    export default {
        components: {
            fdFrontpageCarousel
        }
    };
</script>

<template>
    <div>
        <div class="logo">Federico Engler</div>
        <fd-frontpage-carousel />
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    .logo {
        color: @logo-color;
        font-family: @logo-font;
        font-size: 5rem;
        margin-top: @content-top-margin;
        text-align: center;

        @media @mobile-tight {
            font-size: 4rem;
            margin-top: @content-mobile-top-margin;
        }
    }
</style>
