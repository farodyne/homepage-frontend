<template>
    <nav>
        <router-link to="home">home</router-link>
        <router-link to="trips">trips</router-link>
        <router-link to="fantasy">fantasy</router-link>
        <router-link to="misc">misc</router-link>
    </nav>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    nav {
        align-items: center;
        display: flex;
        font-size: @navlink-font-size;
        font-weight: 500;
        height: 6rem;
        justify-content: center;
        text-transform: uppercase;

        a {
            color: @navlink-color;
            display: flex;
            font-family: @main-font;
            padding: 0 3rem;
            text-decoration: none;

            &:hover {
                color: @navlink-hover-color;
                .blurry-text-shadow(@navlink-color);
                transition-duration: 0.4s;
            }

            &:active {
                color: @navlink-active-color;
            }
        }

        .router-link-active {
            color: @navlink-active-color;
            .blurry-text-shadow(@navlink-color);
        }
    }
</style>
