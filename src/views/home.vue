<script>
    /**
     * Author: Federico Engler
     *
     * The component that renders the "Home" view in the Farodyne webpage. The
     * view contains a wide-angle picture blending carousel that hopefully triggers
     * the curiosity of the visitor, as well as a small component that lists the
     * latest albums added to the database.
     */
    import { fdFrontpageCarousel, fdNews } from '@/components';

    export default {
        /**
         * Used sub-components.
         */
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
