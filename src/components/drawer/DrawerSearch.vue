<script setup>
import { searchPrice } from 'helpers/productsHelper.js';

</script>

<template>
    <div class='drawer-search'>
        <q-input
            v-model="searchPrice"
            outlined
            label="Цена"
            color="grey-1"
            bg-color="grey-8"
        />
        <q-btn
            color="primary"
            label="Сбросить"
            @click="searchPrice = ''"
        />
    </div>
</template>

<style lang='scss' scoped>
.drawer-search {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
