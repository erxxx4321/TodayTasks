<template>
  <el-row type="flex" justify="center" class="mb-4" :gutter="20">
    <el-col :span="15">
      <el-input
        placeholder="請輸入内容"
        v-model="input"
        @keyup.enter.native="addTask"
        clearable
      >
      </el-input>
    </el-col>
    <el-button @click="addTask">新增</el-button>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tasks: this.$store.state.tasks
    };
  },
  methods: {
    addTask() {
      console.log("add");
      const newTask = {
        value: this.input,
        editable: false,
        done: false
      };
      this.tasks.push(newTask);
      console.log(this.tasks);
    }
  }
};
</script>

<style lang="scss" scoped></style>
