<template>
    <div class="hero">
        <input type="checkbox" id="about">
        <div id="about-window">
            <pre>{{ dino }}</pre>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
               dino: require('raw-loader!../img/dino.txt')
            }
        }
    }
</script>

<style lang="scss" scoped>
    #about {
        display: none;
    }

    #about-window {
        height: 0px;
        background-color: #ddd;
        transition: height 0.4s ease-in;
        overflow: hidden;
        padding: 0px 20px;
    }

    #about:checked+#about-window {
        height: 400px;
        transition: height 0.4s ease-out;
    }
</style>