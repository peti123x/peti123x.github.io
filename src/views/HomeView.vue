<template>
  <main>
    <el-tabs v-model="selectedTab" tab-position="top" class="tabbed-view" type="border-card" @tab-click="routeChange">
      <el-tab-pane label="Experience" name="experience"><Experience /></el-tab-pane>
      <el-tab-pane label="Education" name="education"><Education /></el-tab-pane>
      <el-tab-pane label="Projects" name="projects"><Projects /></el-tab-pane>
    </el-tabs>
  </main>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import type {TabsPaneContext} from "element-plus";
import { useRouter} from "vue-router";

export default defineComponent({
  name: 'Homeview',
  props: {
    tab: {
      type: String,
      default: '',
    },
  },
  components: {
    Projects,
    Education,
    Experience,
  },
  setup(props) {
    const selectedTab = ref<string | undefined>('experience');

    onMounted(() => {
      selectedTab.value = props.tab;
    })

    const router = useRouter();

    function routeChange(pane: TabsPaneContext) {
      router.push(pane.paneName as string);
    }

    return {
      routeChange,
      selectedTab,
    };
  },
});
</script>
<style scoped>
.tabbed-view {
  max-height: 100vh;
  min-height: 90vh;
  height: auto;
}

main {
  box-shadow: var(--el-box-shadow);
  height: 100%;
}
</style>
