import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUser } from "../composables/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth();

  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ユーザーがログインしている場合
        if (to.path === "/") {
          // トップページにアクセスしようとした場合は、記事一覧ページにリダイレクト
          return resolve(navigateTo("/lessons/"));
        }
      } else {
        // ユーザーがログインしていない場合
        if (to.path !== "/" && to.path !== "/login") {
          // トップページとログインページ以外にアクセスしようとした場合は、ログインページにリダイレクト
          return resolve(navigateTo("/"));
        }
      }
      
      // 上記以外の場合は、そのまま次のミドルウェアやページに進む
      return resolve();
    });
  });
});