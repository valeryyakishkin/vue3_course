import About from "@/pages/About";
import Main from "@/pages/Main";
import PostIdPage from "@/pages/PostIdPage";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import PostPageWithStore from "@/pages/PostPageWithStore";
import UserPage from "@/pages/UserPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
