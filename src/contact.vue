<template>
    <div class="hero" id='contact'>
        <img class="profile" :src='profile' alt="Profile Picture on GitHub" />
        <h2>Wildan Mubarok</h2>
        <h3>Programmer that builds dream
            <span data-balloon="and fun!" data-balloon-pos="right">🌈</span>
        </h3>
        <ul class="links">
            <li v-for='l in links'>
                <a :href='l.href' target='_blank' rel='noopener'>
                    <span class="icon" v-html='l.icon'></span>
                    <span> {{ l.name }} </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .links svg {
        height: 26px;
        width: 26px;
        vertical-align: text-bottom;
        fill: black;
    }

    .links li:hover svg,
    .links li:focus svg {
        fill: #07c;
        transition: fill 0.2s ease-out;
    }
</style>

<style lang="scss" scoped>
    #contact {
        margin-top: 30px;
        text-align: center;
    }

    .profile {
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .links {
        display: inline-block;
        font-size: 20px;
    }

    .links li {
        border: solid 2px;
        border-color: transparent;
        border-radius: 0px 5px 5px 5px;
        white-space: nowrap;
        overflow-wrap: normal;
        display: inline-flex;
        margin: 0px 5px;
        padding: 0px 8px;
        animation: border-color 0.2s ease-in;
    }

    .links li:hover,
    .links li:focus {
        border-color: #07c;
        animation: border-color 0.2s ease-in;
    }

    .links span {
        margin: 10px 5px;
        display: inline-block;
    }
</style>


<script>
    export default {
        data: function () {
            return {
                links: [
                    {
                        name: 'GitHub',
                        href: 'https://github.com/willnode',
                        icon: require('../img/github.svg')
                    }, {
                        name: 'Twitter',
                        href: 'https://twitter.com/willnode',
                        icon: require('../img/twitter.svg')
                    }, {
                        name: 'Codepen',
                        href: 'https://codepen.io/willnode',
                        icon: require('../img/codepen.svg')
                    }, {
                        name: 'Artstation',
                        href: 'https://artstation.com/willnode',
                        icon: require('../img/artstation.svg')
                    }
                ],
                profile: 'https://avatars1.githubusercontent.com/u/20214420',
                url: function (path) {
                    return 'url(' + path + ')'
                }
            }
        }
    }
</script>