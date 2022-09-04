<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>Projects</span>
      </div>
    </template>
    <el-tabs :tab-position="tabPosition" type="border-card">
      <el-tab-pane v-for="item in data" :label="item.name"><Project :data="item" /></el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import Project from "@/components/Project.vue";
import type {TProject} from "@/types/Project";
import type {Tag} from "@/types/Tag";

export default defineComponent({
  name: 'Projects',
  components: {
    Project
  },
  setup() {
    const data: Array<TProject> = [
      {
        name: 'Dissertation',
        link: 'https://github.com/peti123x/level-crossing-classifier',
        description: [
            'This is a Machine Learning / Data Science oriented project that I have undertaken in my final year of university as my undergraduate project.',
            'The idea was to gather data on local rail traffic by scraping data from the web, and use the collected data to forecast any delays and hence the traversability of rail crossings at a given time T.',
            'The above forecast was achieved by analysing the data and applying several clever data engineering methods to make it suitable for a computer to analyse.',
            'Overall, it has been a very successful project and the methods the paper discusses can enhance similar multivariate time series classification models too.',
            'If you\'re interested in reading the paper, you may download it from the repository.',
        ],
        tags: [
          {
            name: 'Python',
            status: 'danger',
          },
          {
            name: 'Web Scraping',
            status: 'info',
          },
          {
            name: 'Machine Learning',
            status: 'success',
          },
          {
            name: 'Data Science',
            status: 'danger',
          },
        ],
      },
      {
        name: 'This portfolio',
        link: 'https://github.com/peti123x/peti123x.github.io',
        description: [
            'I have created this portfolio for practising some technology.',
            'Please open the repository for more information!',
        ],
        tags: [
          {
            name: 'Vue',
            status: 'success',
          },
          {
            name: 'CI/CD',
            status: 'info',
          },
          {
            name: 'UI/UX',
            status: 'danger',
          },
          {
            name: 'TypeScript',
            status: '',
          },
        ],
      },
      {
        name: 'ANN and Random Forest',
        link: 'https://github.com/peti123x/ANN-and-Randomforest',
        description: [
            'This repository entails a Python implementation of an Artificial Neural Network and Random Forest for solving a university assignment.',
            'The code isn\'t great, just having some fun with some Machine Learning models!',
        ],
        tags: [
          {
            name: 'Python',
            status: 'danger',
          },
          {
            name: 'Machine Learning',
            status: 'success',
          },
          {
            name: 'Data Science',
            status: 'danger',
          },
        ],
      },
      {
        name: 'Regression and Clustering',
        link: 'https://github.com/peti123x/Regression-and-Clustering',
        description: [
            'This repository entails a Python implementation of Regression and Clustering for solving a university assignment.',
        ],
        tags: [
          {
            name: 'Python',
            status: 'danger',
          },
          {
            name: 'Machine Learning',
            status: 'success',
          },
          {
            name: 'Data Science',
            status: 'danger',
          },
        ],
      },
    ];

    let windowWidth = ref(window.innerWidth);
    const tabPosition = computed(() => {
      console.log(windowWidth.value);
      if (windowWidth.value <= 1024) {
        return 'top';
      }
      return 'left';
    });

    return {
      data,
      tabPosition,
    };
  }
});
</script>