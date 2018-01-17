<template>
    <div class="hero demo" :style="{ 'background-image': url(cover) }">
        <span class="spoiler">
            <b>FUN FACT</b> Wello Soft is a one-man fictional company that pretended to exist because
            <i>it was really cool</i> 😎
            <br>
            <b>FUN FACT AGAIN</b> So many cool stuff still hiding! Go find out while you're here! 🔥
        </span>
        <div id='pad'>
            <span>
                <a :href='expertise' target="_blank"><span>See stacks of my artful works 🎨</span></a>
            </span>
            <span>
                <a :href='blog' target="_blank"><span>See rolls of my feedy blogs ✍</span></a>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #pad {
        display: flex;
        height: calc(100% - 150px);
    }

    #pad span {
        display: flex;
        flex-grow: 1;
    }

    #pad a {
        margin: auto;
        background-color: rgba(#07c, 0);
        border: solid 2px #07c;
        border-radius: 5px;
        padding: 10px;
        color: white;
    }

    #pad a:hover {
        background-color: #07c;
        transition: background-color 0.3s ease-in;
    }

    .hero {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        padding: 10px;
        min-height: 450px;
    }

    .demo {
        height: 500px;
    }

    .spoiler {
        display: inline-block;
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s ease-out;
        color: transparent;
        text-shadow: 1px 1px 5px #111;
    }

    /* don't use > and see the bug? */

    .spoiler:hover {
        opacity: 1;
        transition: opacity 0.3s ease-in;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                cover: 'https://res.cloudinary.com/wellosoft/image/upload/v1516031835/home/wellosoft-bg.jpg',
                blog: 'https://blog.wellosoft.net',
                expertise: 'https://wellosoft.net/expertise',
                url: function (path) {
                    return 'url(' + path + ')'
                }
            }
        }
    }
</script>