<template>
    <div id='head'>
        <div class='logo'>Wello Soft</div>
        <div class='space'></div>
        <ul class='menu'>
            <li v-for='h in heads'> {{ h }} </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                heads: [
                    'Home',
                    'Projects',
                    'Blog',
                    'About'
                ]
            }
        }
    }
</script>

<style lang='scss'>
    #head {
        box-shadow: 0 0 0px 0px rgba(#07c, 0);
        display: flex;
        margin: 0;
        padding: 2px 40px;
        transition: box-shadow 0.1s ease-in;
    }

    #head > *{
        margin: 0;
        padding: 1em 0px;
    }

    #head:focus,
    #head:hover {
        box-shadow: 0 0 5px 0px rgba(#07c, 50);
        transition: box-shadow 0.2s ease-out;
    }

    #head .space {
        flex-grow: 1;
    }

    #head .menu {}

    #head .menu>li {
        display: inline-block;
        padding: 0px 10px;
    }
</style>