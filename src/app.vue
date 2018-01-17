<template>
    <div>
        <my-head></my-head>
        <my-about></my-about>
        <my-contact></my-contact>
        <my-email></my-email>
        <my-brand></my-brand>
        <my-repos></my-repos>
        <my-graphics></my-graphics>
        <my-foot></my-foot>
    </div>
</template>

<script>
    import head from './head.vue'
    import email from './email.vue'
    import contact from './contact.vue'
    import repos from './repos.vue'
    import brand from './brand.vue'
    import graphics from './graphics.vue'
    import foot from './foot.vue'
    import about from './about.vue'
    export default {
        components: {
            "my-head": head,
            "my-email": email,
            "my-contact": contact,
            "my-repos": repos,
            "my-brand": brand,
            "my-graphics": graphics,
            "my-foot": foot,
            "my-about": about,
        }
    }

    // favicon
    var docHead = document.getElementsByTagName('head')[0];
    var newLink = document.createElement('link');
    newLink.rel = 'shortcut icon';
    newLink.type = 'image/x-icon';
    newLink.href = require('url-loader!../img/favicon.ico');
    docHead.appendChild(newLink);

</script>

<style lang='scss'>

    @import '../node_modules/balloon-css/balloon.min.css';

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    a {
        text-decoration: none;
        color: black;
        transition: color 0.2s ease-out;
    }

    a:hover {
        color: #07c;
        transition: color 0.2s ease-in;
    }

    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
        margin: 10px 0px;
    }

    li {
        list-style-type: none;
    }

    label {
        cursor: pointer;
    }
</style>

<style scoped>
</style>