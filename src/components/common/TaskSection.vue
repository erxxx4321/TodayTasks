<template>
  <div>
    <!-- fileter -->
    <el-select
      v-model="status"
      placeholder="請選擇"
      class="mb-3"
      @change="filterTasks"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- tasks table -->
    <el-table :data="tasks">
      <el-table-column label="任務">
        <template slot-scope="scope">
          <span
            :class="[
              'ms-2',
              { 'text-decoration-line-through': scope.row.done }
            ]"
            v-if="!scope.row.editable"
            >{{ scope.row.value }}</span
          >
          <el-input
            v-else
            v-model="scope.row.value"
            @keyup.enter.native="editTask(scope.$index, scope.row)"
            placeholder="请输入内容"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="finishTask(scope.$index, scope.row)"
            >完成</el-button
          >
          <el-button size="mini" @click="editTask(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="deleteTask(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // filter
      options: [
        {
          value: "all",
          label: "所有"
        },
        {
          value: "done",
          label: "已完成"
        },
        {
          value: "pending",
          label: "待完成"
        }
      ],
      status: this.$store.state.status,
      // tasks table
      tasks: this.$store.state.tasks
    };
  },
  methods: {
    filterTasks() {
      // console.log(this.status);
      switch (this.status) {
        case "all":
          this.tasks = this.$store.getters.getAllTasks;
          break;
        case "done":
          this.tasks = this.$store.getters.getDoneTasks;
          break;
        case "pending":
          this.tasks = this.$store.getters.getPendingTasks;
      }
    },
    finishTask(index, row) {
      row.done = !row.done;
      // console.log(index, row);
    },
    editTask(index, row) {
      row.editable = !row.editable;
      // console.log(index, row);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      // console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
