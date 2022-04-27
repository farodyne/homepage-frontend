<script>
    import { fdNavbar } from '@/components';

    export default {
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
