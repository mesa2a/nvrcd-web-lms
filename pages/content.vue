<template>
    <div>
        <h1>content page</h1>
        <p>uid :{{ user?.uid }}</p>
        <p>email : {{ user?.email }}</p>
        <p>displayName : {{ user?.displayName }}</p>
        <button @click="signOut">signOut</button>
        <button @click="SetUsers(user?.displayName)">Post</button>
    </div>
</template>
<script setup lang="ts">
import { useFirestore } from "~/composables/useFirestore";
import { useAuth } from "../composables/auth";
import { useUser } from "../composables/user";
const{ SetUsers } = useFirestore();

const { user } = useUser();

const signOut = async (): Promise<void> => {
    await useAuth().signOut();
    await navigateTo('/signIn')
}

</script>