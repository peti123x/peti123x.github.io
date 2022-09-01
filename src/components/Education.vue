<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>Education</span>
      </div>
    </template>

    <el-timeline>
      <el-timeline-item v-for="item in data" :timestamp="item.start" placement="top">
        <el-card>
          <h3>{{item.name}} @ {{item.location}}</h3>
          <p v-for="line in item.description">{{ line }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>

  </el-card>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'Education',
  setup() {
    const data = [
      {
        name: 'BSc Mathematics and Computer Science (First Class Honours)',
        location: 'University of Lincoln',
        description: [
            'Passed with scoring above 70% in all my modules across the 3 years. Specialised in AI / Machine Learning modules.',
            'My dissertation was in the field of data science; studying rail traffic patterns and predictability.',
        ],
        start: '2017/09/01',
      },
      {
        name: 'A Level',
        location: '6th Form',
        description: [
            'Computer Science (A)',
            'Maths (B)',
            'Physics (C)',
        ],
        start: '2015/09/01',
      },
      {
        name: 'GCSE',
        location: 'School',
        description: [
            '11 GCSEs C and above',
        ],
        start: '2011/09/01',
      },
    ];

    return {
      data,
    };
  },
});
</script>