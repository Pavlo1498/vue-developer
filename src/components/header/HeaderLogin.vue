<script setup>
import { storeToRefs } from 'pinia';

import { showAuthModal } from 'helpers/authHelp.js';
import { authStore } from 'stores/authStore.js';

const { isAuth, login } = storeToRefs(authStore());
const { onLogout } = authStore();

</script>

<template>
    <div class="flex items-center q-pa-md q-gutter-sm">
        <span>{{ login }}</span>
        <q-btn
            v-if="!isAuth"
            round
            icon="person"
            class="q-ml-md"
            @click="showAuthModal = true"
        >
        </q-btn>
        <q-btn
            v-else
            round
            icon="login"
            class="q-ml-md"
            @click="onLogout"
        >
        </q-btn>
    </div>

</template>

<style lang='scss' scoped>

</style>
