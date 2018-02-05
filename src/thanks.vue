<template>
    <div>
        <label for="thanks"></label>
        <input type="checkbox" id="thanks" name="thanks">
        <div class="hero" id="thanks-panel">
            <div class="pad">
                <span id="patreon" v-html='patreon'></span>
                <h2>A thank you page
                    <i>is in progress</i>
                </h2>
                <p>I have a plan for pushing my open source initiative. I just have to wait for the right time.</p>
                <a href="https://twitter.com/intent/tweet?screen_name=willnode&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @willnode</a>
            </div>
        </div>
    </div>
</template>

<style>
    #patreon svg {
        height: 26px;
        width: 26px;
        vertical-align: text-bottom;
        fill: white;
    }
</style>

<style scoped>
    label {
        background-color: #FA4B32;
        cursor: pointer;
        height: 20px;
        width: 100%;
        display: block;
    }

    #thanks-panel {
        background-color: #FA4B32;
        overflow: hidden;
        text-align: center;
        max-height: 0px;
        transition: max-height 0.3s ease-in;
        color: white;
    }

    .pad {
        padding: 20px;
    }

    #thanks:checked+#thanks-panel {
        max-height: 400px;
        transition: max-height 0.3s ease-out;
    }
</style>

<script>
    export default {
        mounted: () => {
            var my_awesome_script = document.createElement('script');
            my_awesome_script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
            document.head.appendChild(my_awesome_script);
        }, data: function () {
            return {
                patreon: require('../img/patreon.svg'),
            }
        }
    }
</script>