<template>
    <div id="app">
        <h1>Welcome to Score Counter Manager</h1>
        <app-scoreui></app-scoreui>
    </div>
</template>

<script>
    import ScoreUi from './components/ScoreUi.vue'

    export default {
        name: 'app',
        data () {
            return {}
        },
        components: {
            'app-scoreui': ScoreUi
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
