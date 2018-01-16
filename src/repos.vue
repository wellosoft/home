<template>
    <div>
        <h2>Latest Repositories</h2>
        <span v-if='error'>{{ error }}. Something not works? 🤔</span>
        <ul id='repos'>
            <li v-for="r in repos">
                <a :href='r.url'>
                    <h3>{{ r.name }}  <pre :style="{ 'background-color': r.primaryLanguage.color }">{{ r.primaryLanguage.name }}</pre></h3>
                    <span>{{ r.description }}</span>

                </a>
            </li>
        </ul>
    </div>
</template>

<style lang='scss' scoped>
    div {
        text-align: center;
    }

    #repos {
        display: flex;
        flex-wrap: wrap;
    }

    #repos > li {
        flex-grow: 1;
        width: 400px;
        border: solid 2px #000;
        border-radius: 0px 5px 5px 5px;
        margin: 0px 5px;
        padding: 0px 8px;
        animation: border 0.2s ease-in;
    }

    #repos li:hover,
    #repos li:focus {
        border: solid 2px #07c;
        animation: border 0.2s ease-in;
    }

</style>

<script>
    var data = {
        repos: [],
        error: '',
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gh-latest-repos-ugtxvfawkj.now.sh", true);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                data.repos = JSON.parse(xhr.responseText);
                data.repos.reverse();
            } else {
                data.error = xhr.status + ": " + xhr.statusText;
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