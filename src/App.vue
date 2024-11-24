<script setup>
import { onMounted } from 'vue';

import { getProducts } from 'api/getAxios.js';

onMounted(async () => {
    await getProducts();
});

</script>

<template>
    <router-view />
</template>

