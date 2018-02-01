<template>
    <div class="hero">
        <input type="checkbox" id="email">
        <div id="email-window" v-once>
            <span data-balloon="Both email delivers to the same human and priority" data-balloon-pos="right" class="icon" v-html='icon'>
            </span>
            <span>
                <b>Support: </b>
                <a data-balloon="Use this to seek technical help with my NOT-IN-GITHUB projects" data-balloon-pos="down" title="" :href="'mailto:' + decode(support)">{{ decode(support) }}</a>
            </span>
            <span>
                <b>General: </b>
                <a data-balloon="Use this for general use (e.g. events or promotion)" data-balloon-pos="down" :href="'mailto:' + decode(personal)">{{ decode(personal) }}</a>
            </span>
            <label data-balloon="Close it" data-balloon-pos="down" @click='goTop()' for="email">OK</label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #email {
        display: none;
    }

    #email-window {
        display: flex;
        flex-wrap: wrap;
        height: 0px;
        background-color: darken(#07c, 30);
        transition: height 0.4s ease-in;
        overflow: hidden;
        color: white;
    }

    #email:checked+#email-window {
        height: 120px;
        transition: height 0.4s ease-out;
    }

    .icon {
        display: inline-block;
    }

    span,
    label {
        margin: auto;
    }

    label {
        padding: 0px 20px;
    }

    a {
        color: gray;
    }

    a:hover {
        color: white;
    }

    a:focus,
    a:active {
        color: #07c;
    }
</style>


<style lang="scss">
    #email-window svg {
        width: 100%;
        max-width: 70px;
        padding-right: 5px;
        vertical-align: text-bottom;
        fill: white;
    }

    #email-window svg:hover,
    #email-window svg:focus {
        fill: #07c;
        transition: fill 0.2s ease-out;
    }
</style>
<script>
    export default {
        data: function () {
            return {
                personal: 'd2lsbG5vZGVAd2VsbG9zb2Z0Lm5ldA==',
                support: 'c3VwcG9ydEB3ZWxsb3NvZnQubmV0',
                decode: (e) => window.atob(e),
                icon: require('../img/gmail.svg'),
                goTop: () => {
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                }
            }
        }
    }
</script>