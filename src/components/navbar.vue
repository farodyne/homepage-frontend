<template>
    <nav>
        <div>home</div>
        <div>trips</div>
        <div>fantasy</div>
        <div>misc</div>
    </nav>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    nav {
        align-items: center;
        color: @navlink-color;
        display: flex;
        font-family: 'Oswald', sans-serif;
        font-size: @navlink-font-size;
        font-weight: 500;
        height: 5rem;
        justify-content: center;
        text-transform: uppercase;

        div {
            display: flex;
            padding: 0 2rem;
        }
    }
</style>
