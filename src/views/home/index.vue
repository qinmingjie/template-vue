<template>
  <div class="home">
    <h2>Hello Vue</h2>
    <el-button>button</el-button>
    <el-icon><i-ep-top-right></i-ep-top-right></el-icon>
    <el-button @click="success">success</el-button>
  </div>
</template>
<script>
export default {
  name: "HomeIndex",
  methods: {
    success() {
      this.$message.success("success");
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
