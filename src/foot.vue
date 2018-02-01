<template>
    <div>
        <div class="content">
            <q>
                <span data-balloon="code" data-balloon-pos="up">👨‍💻</span> into the world of
                <span data-balloon="cookies" data-balloon-pos="up">🍪</span> and
                <span data-balloon="rainbows" data-balloon-pos="up">🌈</span>
            </q>
            <h3>
                <span data-balloon="FYI this © only means for fancy stuff. Nothing important whatsover :p" data-balloon-pos="up">Wello Soft © 2015-2018</span>
                <a data-balloon="go up" data-balloon-pos="up" @click='goTop()'>⬆⬆</a>
            </h3>
        </div>
        <div class="rainbow"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            goTop: () => {
                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        text-align: center;
        padding: 50px 2px;
        background-color: #eee;
    }

    .rainbow {
        height: 15px;
        background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red);
        transition: height 0.3s ease-out;
    }

    .rainbow:hover, .rainbow:active {
        height: 100vh;
        transition: height 1s ease-in;
    }
</style>