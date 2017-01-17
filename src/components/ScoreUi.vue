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
                :initialFormat="item.format"
                :initialValue="item.initial" :index="item.index" :key="item.id">
        </score-counter>
    </div>
</template>
<style>
</style>
<script>
    import ScoreCounter from '../components/ScoreCounter.vue'

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function isValidForm(format, initial) {
        return isNumeric(format) && format <= 4
    }

    export default{
        data() {
            return {
                items: [/*{format:1, initial:1}, {format:4, initial:0}, {format:3, initial:100}*/],
                initial: '',
                format: '',
                index: 1
            }
        },
        components: {
            'score-counter': ScoreCounter
        },
        methods: {
            createNewCounter(e){
                e.preventDefault();
                if (isValidForm(this.format, this.initial)) {
                    this.items.unshift({
                        format: this.format,
                        initial: this.initial,
                        id: +new Date(),
                        index: this.index++
                    });
                }
                else {
                    alert("input data not correct, format must be integer between 1 and 4, initial value must not be higher then 10pow(format)");
                }
            }
        }
    }
</script>
