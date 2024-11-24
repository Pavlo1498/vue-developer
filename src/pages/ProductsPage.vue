<script setup>
import { onMounted } from 'vue';

import { getProducts } from 'api/getAxios.js';

onMounted(async () => {
    await getProducts();
});

</script>

<template>
    <div class=''>
        products
    </div>
</template>

<style lang='scss' scoped></style>
