<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>Projects</span>
      </div>
    </template>
    <el-empty description="Coming soon" />
  </el-card>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Projects',
});
</script>