<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { basketStore } from 'stores/basketStore.js';

const { basketProduct } = storeToRefs(basketStore());

const router = useRouter();

</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn
            dense
            color="purple"
            round
            icon="shopping_basket"
            class="q-ml-md"
            @click="router.push('/baskets')"
        >
            <q-badge color="green" floating>{{ basketProduct.length }}</q-badge>
        </q-btn>
    </div>

</template>

<style lang='scss' scoped>

</style>
