<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Person from "@/components/Person.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="320px" id="header">
        <Person />

      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
#header {
  box-shadow: var(--el-box-shadow);
}
.common-layout {
  height: 100%;
}
.el-main {
  height: 100%;
  padding: 0 1.5rem !important;
}

</style>
