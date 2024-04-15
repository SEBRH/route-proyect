import {createRouter,createWebHistory} from "vue-router";
import peru from "../paises/peru.vue";
import brazil from "../paises/youre-going-to-brazil.vue";
import home from "../paises/home.vue";
import bolivia from "../paises/bolivia.vue";
import destino from "../paises/destino.vue";

const routes = createRouter({history: createWebHistory(),routes:[
        {path: "/home", component: home},
        {path: "/perusalen", component: peru},
        {path: "/hell", component: brazil},
        {path: "/bolivia", component: bolivia},
        {path: "/destino/:id", component: destino}
    ]
});
export default routes;