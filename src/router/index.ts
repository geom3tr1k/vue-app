import { createRouter, createWebHistory } from 'vue-router'
import TaskAcces from '../views/TaskAccessViews.vue'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.min.js'
import Edit from '../views/TaskEditViews.vue'
import Login from '../views/LoginViews.vue'
import Reg from '../views/RegistrView.vue'
import Upload  from "../views/TaskUploadView.vue";
import NotFoundView from "../views/NotFoundViev.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskAcces,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload,
    },
    { path: "/:catchAll(.*)", 
      name: "NotFound", 
      component: NotFoundView,
    }
  ],
})
router.beforeEach(async (to, from) => {
	const isAuthenticated = !!localStorage.getItem("auth");

	if (!isAuthenticated && to.name !== "login" && to.name !== "reg") {
		return { name: "login" };
  }
    else if(isAuthenticated && (to.name == "login" || to.name == "reg")) {
    return ("/")
  }
  
});


      export default router
