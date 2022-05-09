<script>
    import { fdFrontpageCarousel, fdNews } from '@/components';

    export default {
        components: {
            fdFrontpageCarousel,
            fdNews
        }
    };
</script>

<template>
    <div>
        <h1>Federico Engler</h1>
        <fd-frontpage-carousel />
        <fd-news />
    </div>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';
</style>
