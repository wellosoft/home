<template>
    <div id='head'>
        <div class='logo' data-balloon=":P" data-balloon-pos="right">
            <img class="icon" :src='favicon' alt="Logo"  @click="mayhem()">
        </div>
        <div class='space'></div>
        <ul class='menu'>
            <li>
                <label data-balloon="Show my email" data-balloon-pos="down" @click='gotoEmail()' for='email'>📧 Contact</label>
            </li>
            <li>
                <label data-balloon="Show my story" data-balloon-pos="down" for='about'>👓 About</label>
            </li>
        </ul>
    </div>
</template>

<script>
    var may_hem = false;
    export default {
        data: function () {
            return {
                heads: [
                    'Home',
                    'Projects',
                    'Blog',
                    'About'
                ],
                favicon: require('url-loader!../img/favicon.ico'),
                gotoEmail: function () {
                    if (!document.getElementById('email').checked)
                        document.getElementById('email-window').scrollIntoView({
                            behavior: 'smooth'
                        });
                },
                mayhem: function () {
                    // ?
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    #head {
        box-shadow: 0 0 0px 0px rgba(#07c, 0);
        display: flex;
        margin: 0;
        padding: 2px 40px;
        transition: box-shadow 0.1s ease-in;
    }

    .icon {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        cursor: pointer;
    }

    #head>* {
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

    #head .menu>li {
        display: inline-block;
        padding: 0px 10px;
    }
</style>