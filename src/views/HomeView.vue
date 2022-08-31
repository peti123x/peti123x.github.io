<template>
  <main>
    <div>
      <h2>Experience</h2>
        <b-card v-for="item in data" :title="item.name">
          {{ item.description }}
        </b-card>
    </div>

  </main>
</template>
<script lang="ts">
import {BCard} from "bootstrap-vue-3";
import {defineComponent} from "vue";
export default defineComponent({
  name: 'Homeview',
  components: {
    BCard,
  },
  setup() {
    const data = [
      {
        name: 'Expansive Solutions - 01/2022 -> Now',
        title: 'Software Engineer',
        description: 'Love this!',
      },
      {
        name: 'Blue Light Card - 02/2021 -> 01/2022',
        title: 'Software Engineer',
        description: 'This was another job!',
      },
      {
        name: 'ampSuite - 06/2020 -> 02/2021',
        title: 'PHP Developer',
        description: 'This was my first job!',
      },
    ];

    return {
      data
    };
  },
});
</script>
<style scoped>
fieldset {
  margin-top: 1rem;
}
</style>
