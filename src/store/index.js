import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        value: "今日第一件任務",
        editable: false,
        done: false
      }
    ],
    status: "all"
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    getDoneTasks(state) {
      return state.tasks.filter(task => task.done);
    },
    getPendingTasks(state) {
      return state.tasks.filter(task => !task.done);
    }
  }
});
