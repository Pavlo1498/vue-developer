<script setup>
import { onMounted } from 'vue';

import { loadProduct, stateLoad, arrayProducts } from '@helpers/productsHelp.js'

import ProductCard from '@components/ProductCard.vue'
import Loading from '@widgets/Loading.vue'

onMounted(async () => {
    await loadProduct();
});
</script>
 
<template>
<div class='products-card'>
    <Loading v-if="stateLoad"/>
    <template v-else>
        <ProductCard
        v-for="(product, index) in arrayProducts"
        :item="product"
        :key="index"
    />
    </template>
</div>
</template>
 
<style lang='scss' scoped>
 .products-card {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
 }
</style>
 