<template>
    <div>
        <UButton @click="signIn()" color="blue" variant="solid">ログイン</UButton>
    </div>
</template>
<script setup lang="ts">
import { useAuth } from '../composables/auth';

const signIn = async (): Promise<void> => {
    await useAuth().signIn();
    await navigateTo('/')
}
</script>