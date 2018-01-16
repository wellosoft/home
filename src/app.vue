<template>
    <div>
        <my-head></my-head>
        <my-contact></my-contact>
        <my-brand></my-brand>
        <my-repos></my-repos>
        <my-graphics></my-graphics>
        <my-foot></my-foot>
    </div>
</template>

<script>
    import head from './head.vue'
    import contact from './contact.vue'
    import repos from './repos.vue'
    import brand from './brand.vue'
    import graphics from './graphics.vue'
    import foot from './foot.vue'
    export default {
        components: {
            "my-head": head,
            "my-contact": contact,
            "my-repos": repos,
            "my-brand": brand,
            "my-graphics": graphics,
            "my-foot": foot,
        }
    }
</script>

<style lang='scss'>
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
        margin: 10px;
    }

    li {
        list-style-type: none;
    }
</style>

<style scoped>
</style>