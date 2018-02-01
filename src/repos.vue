<template>
    <div>
        <a href='https://github.com/willnode' target="_blank" rel="noopener">
            <h2 data-balloon="see all my repositories on GitHub!" data-balloon-pos="down">Latest Repositories ↗</h2>
        </a>
        <span v-if='error'>{{ error }}</span>
        <ul id='repos'>
            <li v-for="r in repos">
                <a :href='r.url'>
                    <span class="repo">
                        <span class="name">{{ r.name }}</span>
                        <span class="lang" :style="{ 'background-color': r.primaryLanguage.color, 'color': getForeground(r.primaryLanguage.color) }">{{ r.primaryLanguage.name }}</span>
                    </span><br>
                    <span class="desc">{{ r.description }}</span>
                    <div v-if="r.stargazers">⭐ {{ r.stargazers }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang='scss' scoped>
    .repo {
        font-size: 20px;
    }

    div {
        text-align: center;
    }

    #repos {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
    }

    li {
        flex-grow: 1;
        width: 30%;
        min-width: 200px;
        border: solid 2px rgba(#07c, 0);
        border-radius: 0px 10px;
        margin: 0px 5px;
        padding: 10px;
        animation: border 0.2s ease-in;
    }

    li:hover,
    li:focus {
        border: solid 2px #07c;
        animation: border 0.2s ease-in;
    }

    .lang {
        padding: 3px;
        border-radius: 4px;
        display: inline-block;
        font-size: 11px;
        margin-left: 8px;
    }

    .name {
        border-bottom: solid 1px #07c;
    }

    .desc {
        display: inline-block;
        margin: 15px 0px;
        font-size: 14px;
    }
</style>

<script>
    var data = {
        repos: [],
        error: 'Be patient. Our 🐒 still scraping the web for you...',
        getForeground: function (bgColor) {

            // https://stackoverflow.com/a/41491220/3908409
            var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
            var r = parseInt(color.substring(0, 2), 16); // hexToR
            var g = parseInt(color.substring(2, 4), 16); // hexToG
            var b = parseInt(color.substring(4, 6), 16); // hexToB
            return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
                '#000' : '#fff';

        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gh-latest-repos-mhqyelmowl.now.sh", true);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                data.repos = JSON.parse(xhr.responseText);
                data.repos.reverse();
                data.error = data.repos.length === 0 ? 'Whoops. Nothing here. But we still ❤ U' : '';
            } else {
                data.error = xhr.status + ": Sorry our monkeys have failed load your request 🤔";
            }
        }
    }
    xhr.send();

    export default {
        data: function () {
            return data;
        }
    }
</script>