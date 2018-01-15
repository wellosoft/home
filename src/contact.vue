<template>
    <div id='contact'>
        <div class="left">
            <img :src='profile' />
        </div>
        <div class="right">
            <ul class="links">
                <li v-for='l in links'>
                    <span class="icon" v-html='l.icon'></span>
                    <span><a :href='l.href'>{{ l.name }}</a></span>
                </li>
            </ul>
        </div>
    </div>
</template>

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
<style>
</style>