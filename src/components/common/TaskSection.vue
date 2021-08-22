<template>
  <div>
    <!-- fileter -->
    <el-row type="flex" justify="end">
      <el-select
        v-model="status"
        placeholder="請選擇"
        class="mb-3"
        @change="filterTasks"
        style="width: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-row>

    <!-- tasks table -->
    <el-table :data="tasks">
      <el-table-column label="任務">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.done" class="me-2"></el-checkbox>
          <span
            :class="[
              'ms-2',
              'task',
              { 'text-decoration-line-through': scope.row.done }
            ]"
            v-if="!scope.row.editable"
            @click="editTask(scope.$index, scope.row)"
            >{{ scope.row.value }}</span
          >

          <el-input
            v-else
            v-model="scope.row.value"
            @keyup.enter.native="editTask(scope.$index, scope.row)"
            placeholder="請輸入内容"
            style="width: 90%"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button
            icon="el-icon-delete"
            circle
            @click="deleteTask(scope.$index)"
          ></el-button>
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

<style scoped>
.task:hover {
  cursor: pointer;
}
</style>
