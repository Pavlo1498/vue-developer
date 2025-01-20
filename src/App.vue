<script setup>
import { onMounted } from 'vue';

import AuthModalLogin from 'components/auth/AuthModalLogin.vue';
import { productsStore } from 'stores/productsStore.js';
import { showAuthModal } from 'helpers/authHelp.js';

const { getProducts } = productsStore();

onMounted(async () => {
    await getProducts();
});

</script>

<template>
    <AuthModalLogin v-if="showAuthModal"/>
    <router-view />
</template>

