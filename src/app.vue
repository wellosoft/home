<template>
    <div>
        <my-head></my-head>
        <div class="hero">
            <my-contact></my-contact>
        </div>
        <my-repos></my-repos>
        <div class="hero demo" :style="{ 'background-image': url(cover) }">
            <span class="spoiler">
                <b>FUN FACT</b> Wello Soft is a one-man fictional company that pretended to exist because
                <i>it was cool</i>
            </span>
        </div>
    </div>
</template>

<script>
    import head from './head.vue'
    import contact from './contact.vue'
    import repos from './repos.vue'
    export default {
        components: {
            "my-head": head,
            "my-contact": contact,
            "my-repos": repos,
        },
        data: function () {
            return {
                cover: 'https://res.cloudinary.com/wellosoft/image/upload/v1516031835/home/wellosoft-bg.jpg',
                url: function (path) {
                    return 'url(' + path + ')'
                }
            }
        }
    }
</script>

<style lang='scss'>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    a {
        text-decoration: none;
        color: black;
        transition: color 0.2s ease-out;
    }

    a:hover {
        color: #07c;
        transition: color 0.2s ease-in;
    }

    h3, h4, h5, h6 {
        font-weight: normal;
    }

    li {
        list-style-type: none;
    }
</style>

<style scoped>
    .hero {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        padding: 10px;
        min-height: 450px;
    }

    .demo {
        padding-top: 9 / 16 * 100%;
    }

    div .spoiler {
        opacity: 0;
        transition: opacity 0.3s ease-out;
        color: rgba(white, 0.8);
        text-shadow: 1px 1px 5px black;
    }

    div:hover .spoiler {
        opacity: 1;
        transition: opacity 0.3s ease-in;
    }
</style>