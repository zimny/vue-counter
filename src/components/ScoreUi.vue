<template>
    <div>
        <p>add new counter</p>
        <form>
            <label>format: <input type="text" v-model.number="format"/></label>
            <label>initial value: <input type="text" v-model.number="initial"/></label>
            <input type="submit" @click="createNewCounter">
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <score-counter
                v-for="item in items"
                :initialFormat="item.format" :index="item.index" :key="item.id" :id="item.id" :current="item.current">
        </score-counter>
    </div>
</template>
<style>
</style>
<script>
    import ScoreCounter from '../components/ScoreCounter.vue'
    import store from '../store'
    import {mapGetters, mapActions} from 'vuex'

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function isValidForm(format) {
        return isNumeric(format) && format <= 4
    }

    export default{
        data() {
            return {
                initial: '',
                format: '',
                index: 1
            }
        },
        computed: mapGetters({
            items: 'allCounters'
        }),
        components: {
            'score-counter': ScoreCounter
        },
        methods: {
            createNewCounter(e){
                e.preventDefault();
                if (isValidForm(this.format)) {
                    store.dispatch('add_counter', {
                        format: this.format,
                        initial: this.initial,
                        id: +new Date(),
                        index: this.index++,
                        current: this.initial
                    })
                }
                else {
                    alert("input data not correct, format must be integer between 1 and 4, initial value must not be higher then 10pow(format)");
                }
            }
        }
    }
</script>
