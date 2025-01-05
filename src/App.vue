<script setup>
import { onMounted } from 'vue';

import { productsStore } from 'stores/productsStore.js';

const { getProducts } = productsStore();

onMounted(async () => {
    await getProducts();
});

</script>

<template>
    <router-view />
</template>

