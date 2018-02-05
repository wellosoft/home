<template>
    <div class="hero">
        <input type="checkbox" id="about">
        <div id="about-window">
            <div class="box">
                <h2>About Me. Explained in Timeline.</h2>
                <div class="year" v-for='t in timeline'>
                    <h3>{{ t.time }}</h3>
                    <span v-html='tidy(t.wth)'></span>
                </div>
                <label for='about' @click='goTop()'>✖</label>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    label {
        padding: 5px 0px;
        color: black;
        transition: color 0.3s ease-in;
    }

    label:hover {
        color: #07c;
        transition: color 0.3s ease-in;
    }

    #about-window {
        display: flex;
        max-height: 0px;
        background-color: #eee;
        transition: max-height 0.4s ease-in 0.4s;
        overflow: hidden;
    }

    #about:checked+#about-window {
        max-height: 2000px;
        transition: max-height 0.4s ease-out;
    }

    .box {
        padding: 20px 20px;
        max-width: 700px;
        margin: auto;

    }

    h3, h2, label, span {
        text-align: center;
        display: block;
        margin: auto;
    }

    h3 {
        font-weight: bold;
        margin: 15px 0px;
    }

    h2 {
        padding: 20px 0px;
    }

    h3::after, h3::before {
        content: '';
        border-top: 1px solid #ccc;
        vertical-align: bottom;
        display: inline-block;
        width: 40%;
        margin-right: 1%;
        margin-left: 1%;
        height: 0.5em;
    }

    span {
        line-height: 2.4em;
    }

    .year {
        padding: 10px;
        border: solid 2px rgba(#07c, 0);
    }

    .year:hover {
        border: solid 2px rgba(#07c, 1);
    }

    button:hover {
        background-color: #59f;
        border-color: #07c;
    }

    button:active {
        background-color: #fff;
        border-color: #07c;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                timeline: [
                    {
                        time: "Today",
                        wth: "⚡ I began to learn the modern Javascript before my free time due in 6 months ⌛."
                    }, {
                        time: 2017,
                        wth: "🦑 Signed up to GitHub. I move all hobby projects online before gone in the dust 💨. Also teaching my self how to do OSS.<br>Also graduated from school but I skip college for next year 🏫"
                    }, {
                        time: 2016,
                        wth: "🚀 TEXDraw (my highest rated asset) is launched. Work on it for almost a year ⌚. Also learning to make website (with free Wordpress)."
                    }, {
                        time: 2015,
                        wth: "✍ I wrote my first game 🚀. Also the first time I sell small assets, hence my first dollar 💲"
                    }, {
                        time: 2014,
                        wth: "🎧 I began to learn Game Programming with Unity 3D. This also means I also doing a lot graphics in Blender. Also C#-all-the-things was become my standard moto 💪"
                    }, {
                        time: 2013,
                        wth: "🌐 Internet is common at this stage. I grid my self VS2012 and .NET. Also was became a game maniac 🎮"
                    }, {
                        time: 2011,
                        wth: "ActiveX; VB6; Office 2007 macros. That's how I write my first code 👨‍💻."
                    }
                ],
                tidy: (x) => x.replace(/\. /g, '.<br>'),
                goTop: () => {
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                }
            }
        },
        mounted: () => {
            if (window.location.hash === '#about') {
                document.getElementById('about').checked = true;
            }
        }
    }
</script>