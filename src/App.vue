<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Person from "@/components/Person.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px" id="header">
        <Person />

      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

.common-layout {
  height: 100%;
}

</style>
