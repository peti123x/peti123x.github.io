<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {BContainer, BCol, BCard} from "bootstrap-vue-3";
</script>

<template>
    <b-container class="d-flex main-container">
      <b-col>
        <b-card
          title="Peter Cseik"
          class="text-center"
        >
          <img alt="Peter Cseik" class="logo" src="@/assets/me.jpg" width="125" height="125" />
          Hi. I am a Software Engineer.

          <div class="d-flex">

          </div>

        </b-card>
      </b-col>
      <b-col>
        <RouterView />
      </b-col>
    </b-container>
</template>

<style scoped>
.bi {
  cursor: pointer;
  height: 2rem;
}
.bi.bi-github:hover {
  background-color: var(--bs-purple);
}
.bi.bi-linkedin:hover {
  background-color: var(--bs-blue);
}
.main-container {
  gap: 1rem;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto !important;
  border-radius: 50%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
