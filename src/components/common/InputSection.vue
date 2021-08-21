<template>
  <el-row type="flex" justify="space-between" class="mb-4">
    <el-col :span="20">
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
      const newTask = {
        value: this.input,
        editable: false,
        done: false
      };
      this.tasks.push(newTask);
    }
  }
};
</script>

<style lang="scss" scoped></style>
