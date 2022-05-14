<script>
    /**
     * Author: Federico Engler
     *
     * The top level component for the Farodyne webpage.
     */
    import { fdNavbar } from '@/components';

    export default {
        /**
         * Used sub-components in our template.
         */
        components: {
            fdNavbar
        }
    };
</script>

<template>
    <div>
        <fd-navbar />
        <router-view :key="this.$route.path" />
    </div>
</template>

<style lang="less">
    @import './styles/common.less';
</style>
