<template>
    <div>
        <my-head></my-head>
        <div class="hero">
            <my-contact></my-contact>
        </div>
        <div class="hero" :style="{ 'background-image': url(cover) }">
        </div>
    </div>
</template>

<script>
    import head from './head.vue'
    import contact from './contact.vue'
    export default {
        components: {
            "my-head": head,
            "my-contact": contact,
        },
        data: function() {
            return {
                cover: 'https://res.cloudinary.com/wellosoft/image/upload/v1516031835/home/wellosoft-bg.jpg',
                url: function(path) {
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

    .hero {
        background-size: cover;
        background-repeat: no-repeat;
        padding: 10px;
        min-height: 200px;
    }
</style>