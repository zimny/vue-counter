<template>
    <div>
        <div>
            counter {{index}}
            <h1>Score:<span class="counter">{{dispValue}}</span></h1>
            <form>
                <button class="up" @click="increment">Up</button>
                <button class="down" @click="decrement">Down</button>
                <button class="get" @click="get">Get</button>
                <input class="current" type="number" v-model="initial">
                <button class="set" @click="set">Set</button>
                <button class="reset" @click="reset">Reset</button>
            </form>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import store from '../store'

    export default {
        data() {
            return {
                format: this.initialFormat,
                initial: this.initial
            }
        },
        props: {
            initialFormat: Number,
            index: Number,
            current: Number,
            id: Number
        },
        computed: {
            dispValue: function () {
                return this.formatValue(this.current, this.format);
            }
        },
        created() {
            this.formatValue = function (current, format) {
                return (new Array(Math.max(format - String(current).length + 1, 0)).join(0) + current);
            }
        },
        methods: {
            increment(e){
                e.preventDefault();
                store.dispatch('increment', this.id)
            },
            decrement(e){
                e.preventDefault();
                store.dispatch('decrement', this.id)
            },
            get(e){
                e.preventDefault();
                alert(this.current);
            },
            set(e){
                e.preventDefault();
                store.dispatch('set', {id: this.id, initial: this.initial})
            },
            reset(e){
                e.preventDefault();
                this.$store.commit('reset', this.id);
            }
        }
    }


</script>
