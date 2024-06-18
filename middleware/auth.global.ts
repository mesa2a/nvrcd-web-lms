import type { RouteLocationNormalized } from "vue-router";
import { useUser } from "~/composables/user";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const publicRoutes = ["/", "/about", "/contact"]; // 公開ページのパスを指定

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const { setUser } = useUser();
    const auth = getAuth();

    // ユーザーのログイン状態が確定するまで待機
    await new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            unsubscribe();
            resolve(firebaseUser);
        });
    });

    const firebaseUser = auth.currentUser;

    if (firebaseUser) {
        setUser(firebaseUser);

        // 公開ページにアクセスしようとした場合は /lessons/ にリダイレクト
        if (publicRoutes.includes(to.path)) {
            // return await navigateTo("/lessons/");
        }
    } else {
        // 非公開ページにアクセスしようとした場合はトップページにリダイレクト
        if (!publicRoutes.includes(to.path)) {
            return await navigateTo("/");
        }
    }
});