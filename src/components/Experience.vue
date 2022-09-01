<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>Experience</span>
      </div>
    </template>
    <div class="note">Please read below to read more about my previous experience and my responsibilities!</div>

    <div class="collapse">
      <el-collapse v-model="actives">
        <el-collapse-item v-for="item in data" :name="item.name">
          <template #title>
            <span>{{ `${item.title} @ ${item.name}` }}</span>
          </template>
          <div v-for="line in item.description">{{ line }}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'Experience',
  setup() {
    const data = [
      {
        name: 'Expansive Solutions - 01/2022 -> Now',
        title: 'Software Engineer',
        description: [
            'In addition to carrying out my daily duties of generic development, I am actively involved in SCRUM ceremonies such as sprint planning and backlog grooming.',
            'Involved in making long lasting decisions concerning the architecture and implementation of not only the existing product(s), but also new ones.',
        ],
      },
      {
        name: 'Blue Light Card - 02/2021 -> 01/2022',
        title: 'Software Engineer',
        description: [
            'As a developer at BLC I have developed many features and finalised a range of larger projects. I began, and lead my team on, the migration of our system to AWS microservices; I have also been responsible for successfully implementing unit tests and ultimately covering 80%+ of the codebase whilst also teaching the rest of the team about their importance and writing effective code.',
            'I have also been responsible for leading the implementation of e2e Nightwatch tests and working towards a 100% coverage to replace manual regression tests – in addition to carrying out daily developer duties such as (writing and) managing Jira tickets & documentation, doing code reviews and giving a hand to other team members when needed.',
        ],

      },
      {
        name: 'ampSuite - 06/2020 -> 02/2021',
        title: 'PHP Developer',
        description: [
            'As a developer at ampSuite I have developed numerous features which enhance the usability, technical integrity and longevity of the platform. These include API integrations (YouTube, Spotify, iTunes, Beatport, TransferWise), server management enhancements (dynamic allocation of client systems across 20+ depending on traffic and space usage) and unit tests.',
            'In addition, I interacted with a large client pool & suppliers of ampSuite day to day, and monitor numerous data ingestion scripts amongst other processes.',
        ],
      },
    ];
    const actives = data.map((item) => item.name);

    return {
      data,
      actives,
    };
  },
});
</script>
<style scoped>
.note {
  margin-bottom: 1.5rem;
}
span {
  font-weight: bold;
}
</style>