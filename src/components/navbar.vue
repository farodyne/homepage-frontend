<template>
    <nav>
        <router-link to="/home">home</router-link>
        <router-link to="/trips">trips</router-link>
        <router-link to="/fantasy">fantasy</router-link>
        <router-link to="/misc">misc</router-link>
    </nav>
</template>

<style lang="less" scoped>
    @import '../styles/common.less';

    nav {
        align-items: center;
        display: flex;
        font-size: 2.4rem;
        font-weight: 500;
        height: 6rem;
        justify-content: center;
        position: fixed;
        text-transform: uppercase;
        top: 0;
        width: 100%;
        z-index: 100;

        @media @mobile-tight {
            font-size: 2rem;
            height: 5rem;
        }

        a {
            color: @navlink-color;
            display: flex;
            font-family: @main-font;
            padding: 0 2.4rem;
            text-decoration: none;
            transition-duration: 0.4s;

            &:hover {
                color: @navlink-hover-color;
                .blurry-text-shadow(@navlink-color);
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
