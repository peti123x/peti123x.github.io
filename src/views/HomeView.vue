<template>
  <main>
    <el-tabs tab-position="top" class="tabbed-view">
      <el-tab-pane label="Experience"><Experience /></el-tab-pane>
      <el-tab-pane label="Education"><Education /></el-tab-pane>
    </el-tabs>

  </main>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
export default defineComponent({
  name: 'Homeview',
  components: {
    Education,
    Experience,
  },
  setup() {

  },
});
</script>
<style scoped>
.tabbed-view {
  max-height: 100vh;
  min-height: 90vh;
  height: auto;
}
</style>
