<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <h1>Peter Cseik</h1>
        <h2>Fullstack Software Engineer</h2>
      </div>
    </template>
    <img alt="Peter Cseik" class="logo" src="@/assets/me.jpg" width="155" height="155" />

    <div class="icons">
      <a target="_blank" href="https://www.linkedin.com/in/pcseik/">
        <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" />
      </a>
      <a target="_blank" href="https://github.com/peti123x">
        <font-awesome-icon class="github" :icon="['fab', 'github-square']" />
      </a>

    </div>

    <el-divider content-position="left">Skills</el-divider>
    <Skills />

    <el-divider content-position="left">Hobbies</el-divider>
    <Hobbies />

    <el-divider content-position="left">Languages</el-divider>
    <Languages />
  </el-card>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Skills from "@/components/Skills.vue";
import Hobbies from "@/components/Hobbies.vue";
import Languages from "@/components/Languages.vue";
export default defineComponent({
  name: 'Person',
  components: {Languages, Skills, Hobbies},
});
</script>
<style scoped>
.logo {
  display: block;
  margin: 0 auto !important;
  border-radius: 50%;
}
.box-card {
  height: 100%;
  text-align: center;
}
.icons {
  margin-top: 1rem;
}
.icons * {
  margin: 0 0.15rem;
}
.icons svg {
  font-size: 2rem;
}
.icons .linkedin:hover, .icons .linkedin:active {
  color: darkblue;
}
.icons .github:hover, .icons .github:active {
  color: purple;
}
h1 {
  font-weight: bold;
}
</style>