import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from "../components/HomeScreen.vue";
import FileUploadScreen from "../components/FileUploadScreen.vue";
import LoginScreen from "../components/LoginScreen.vue";
import { checkIfTokenIsExpired } from '@/utils/jwtUtil';
const routes = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen
  },
  {
    path: "/file-upload",
    name: "FileUploadScreen",
    component: FileUploadScreen
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to,from,next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  if(token != null){
    if(checkIfTokenIsExpired(token)){
      localStorage.clear();
    }
  }
  if(authRequired && !token){
    next("/login");
  }else{
    next();
  }
});

export default router
