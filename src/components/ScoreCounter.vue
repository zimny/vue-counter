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
    export default{
        data() {
            return {
                current: this.initialValue,
                initial: this.initialValue,
                format: this.initialFormat
            }
        },
        props: {
            initialFormat: Number,
            initialValue: Number,
            index: Number
        },
        computed: {
            dispValue: function () {
                return this.formatValue(this.current, this.format);
            }
        },
        created() {
            this.formatValue = function (current, format) {
                return (Array(Math.max(this.format - String(this.current).length + 1, 0)).join(0) + this.current);
            }
        },
        methods: {
            increment(e){
                e.preventDefault();
                if (this.current === (Math.pow(10, this.format)) - 1) {
                    this.current = 0;
                }
                else {
                    this.current++;
                }
            },
            decrement(e){
                e.preventDefault();
                if (this.current === 0) {
                    this.current = (Math.pow(10, this.format)) - 1;
                }
                else {
                    this.current--;
                }
            },
            get(e){
                e.preventDefault();
                alert(this.current);
            },
            set(e){
                e.preventDefault();
                this.current = this.initial;
            },
            reset(e){
                e.preventDefault();
                this.current = this.initial;
            }
        }
    }


</script>
