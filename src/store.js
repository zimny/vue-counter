import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const validateValue =  (state, config)  => {
    const counter = state.counters.find(p => p.id === config.id)
    return config.initial <= (Math.pow(10, counter.format) - 1) && config.initial >= 0
}
/**
 * format: this.format,
 initial: this.initial,
 id: +new Date(),
 index: this.index++,
 current: this.initial
 * @type {Store}
 */

const store = new Vuex.Store({
    strict: true,
    state: {
        counters: []
    },
    getters: {
        allCounters: state => state.counters
    },
    actions: {
        add_counter (context, config) {
            context.commit('add_counter', config);
        },
        increment (context, id) {
            context.commit('increment', id)
        },
        decrement (context, id) {
            context.commit('decrement', id)
        },
        set (context, config) {
            if(validateValue(context.state, config)) {
                context.commit('set', config);
            }
        },
        reset (context, id) {
            context.commit('reset', id);
        }
    },
    mutations: {
        reset: (state, id) => {
            const counter = state.counters.find(p => p.id === id)
            counter.current = 0;
        },
        set: (state, config) => {
            const counter = state.counters.find(p => p.id === config.id)
            counter.current = config.initial;
        },
        add_counter: (state, config) => {
            state.counters.unshift(config)
        },
        increment: (state, id) => {
            const counter = state.counters.find(p => p.id === id)
            if (counter.current === (Math.pow(10, counter.format)) - 1) {
                counter.current = 0;
            }
            else {
                counter.current++;
            }
        },
        decrement: (state, id) => {
            const counter = state.counters.find(p => p.id === id)

            if (counter.current === 0) {
                counter.current = (Math.pow(10, counter.format)) - 1;
            }
            else {
                counter.current--;
            }
        }
    }
})

export default store