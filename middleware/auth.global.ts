import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "nuxt/app";
import { NavigationGuard } from "vue-router";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth();
  const router = useRouter();

  return new Promise<NavigationGuard>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ユーザーがログインしている場合
        if (to.path === "/") {
          // トップページにアクセスしようとした場合は、記事一覧ページにリダイレクト
          return resolve(() => {
            router.replace("/lessons/");
          });
        }
      } else {
        // ユーザーがログインしていない場合
        if (to.path !== "/" && to.path !== "/login") {
          // トップページとログインページ以外にアクセスしようとした場合は、トップページにリダイレクト
          return resolve(() => {
            router.replace("/");
          });
        }
      }

      // 上記以外の場合は、そのまま次のミドルウェアやページに進む
      return resolve();
    });
  });
});