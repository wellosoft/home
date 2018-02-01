<template>
    <div>
        <div class="hero demo" id='graphics' :style="{ 'background-image': url(images[idx].image) }">
            <span class="dummygap nav rows">
                <a data-balloon="previous" data-balloon-pos="up" @click='setg(idx, -1)'>◀</a>
                <span class="dummygap"></span>
                <a data-balloon="next" data-balloon-pos="up" @click='setg(idx, 1)'>▶</a>
            </span>
            <div class="btm rows">
                <div class="left">
                    <a :href='images[idx].url' target="_blank" rel="noopener"><h2>{{ images[idx].title }} ↗</h2></a>
                    <span>{{ images[idx].desc }}</span>
                </div>
                <a data-balloon="I do Unity stuff few years now so check my Connect profile!" data-balloon-pos="left" href='https://connect.unity.com/u/5850d37f0909150027e23f02' target="_blank" rel="noopener">
                    <span class="right mdunity" v-html='mdunity'>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .mdunity svg {
        width: 160px;
        vertical-align: text-bottom;
        fill: white;
    }
</style>

<style lang="scss" scoped>
    #graphics.blink {
        filter: brightness(0);
    }

    #graphics {
        filter: brightness(1);
        transition: filter 0.9s;
    }


    .demo a,
    .demo {
        color: white;
        text-shadow: 0px 0px 8px black;
    }

    .demo {
        background-color: #222;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        padding: 25px 25px;
        min-height: 450px;
        display: flex;
        flex-direction: column;
    }

    .dummygap {
        display: flex;
        flex-grow: 1;
    }

    .btm {
        display: flex;
    }

    .rows {
        flex-direction: row;
    }

    .left {
        flex-grow: 1;
        text-shadow: 0px 0px 10px black;
    }

    .nav {
        align-items: center;
        font-size: 30px;
    }
</style>


<script>
    export default {
        data: function () {

            var data = {
                mdunity: require('../img/madewithunity.svg'),
                images: [{
                    image: "https://res.cloudinary.com/wellosoft/image/upload/v1516086014/home/interactive-tothehighestplace.jpg",
                    title: "To the Highest Place",
                    desc: "Rule #1 is Move Higher",
                    url: "https://willnode.itch.io/tthp"
                }, {
                    image: "https://res.cloudinary.com/wellosoft/image/upload/v1516085765/home/library-simpleproceduralskybox.jpg",
                    title: "Simple Procedural Skybox",
                    desc: "Procedural Skybox with features",
                    url: 'http://u3d.as/fCV'
                }, {
                    image: "https://res.cloudinary.com/wellosoft/image/upload/v1516085765/home/library-texdraw.jpg",
                    title: "TEXDraw",
                    desc: "Expressing math syntax made easy",
                    url: 'http://u3d.as/mFe'
                }, {
                    image: "https://res.cloudinary.com/wellosoft/image/upload/v1516170774/home/Med_2.png",
                    title: "Engine4",
                    desc: "Turn the game to one dimension higher",
                    url: "http://u3d.as/fdm"
                }],
                idx: 0,
                setg: function (idx, delta) {
                    const length = 4;

                    var g = document.getElementById('graphics');
                    g.style.filter = 'brightness(0)';

                    idx += delta;
                    if (idx >= length)
                        idx = 0;
                    else if (idx < 0)
                        idx = length - 1;

                    setTimeout(() => {g.style.filter = ''; data.idx = idx}, 500);
                },
                url: function (path) {
                    return 'url(' + path + ')'
                }
            }
            return data;
        }
    }
</script>