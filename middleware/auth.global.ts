import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "nuxt/app";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth();
  const router = useRouter();

  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // ユーザーがログインしている場合
        if (to.path === "/") {
          // トップページにアクセスしようとした場合は、記事一覧ページにリダイレクト
          await router.replace("/lessons/");
          return resolve();
        }
      } else {
        // ユーザーがログインしていない場合
        if (to.path !== "/") {
          // トップページとログインページ以外にアクセスしようとした場合は、トップページにリダイレクト
          await router.replace("/");
          return resolve();
        }
      }

      // 上記以外の場合は、そのまま次のミドルウェアやページに進む
      return resolve();
    });
  });
});