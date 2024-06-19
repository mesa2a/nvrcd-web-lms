<template>
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nuxt-link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">タイトル</span>
    </nuxt-link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">{{ displayName }}</a>
    </nav>
    <div class="" v-if="!isLogin">
      <SignInButton />
    </div>
    <div class="" v-if="isLogin">
      <SignOutButton />
    </div>
  </div>
</template>

<script setup>
import { useUser } from "../composables/user";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const isLogin = ref(false);
const displayName = ref('');

const { user } = useUser();

onAuthStateChanged(auth, (firebaseUser) => {
  isLogin.value = firebaseUser ? true : false;

  if (firebaseUser) {
    displayName.value = firebaseUser.displayName || '';
  } else {
    displayName.value = '';
  }
});
</script>