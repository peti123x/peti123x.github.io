import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

import './assets/main.css'

library.add(
    faLinkedin,
    faGithubSquare,
    faArrowUpRightFromSquare,
);

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
