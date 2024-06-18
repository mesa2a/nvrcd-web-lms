<template>
    <div>
        <UButton @click="signOut()" color="blue" variant="solid">ログアウト</UButton>
    </div>
</template>
<script setup lang="ts">
import { useAuth } from "../composables/auth";

const signOut = async (): Promise<void> => {
    await useAuth().signOut();
    await navigateTo('/')
}

</script>