<script setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

 import { basketStore } from 'stores/basketStore.js';

 const { basketProduct, sumBaskets } = storeToRefs(basketStore());
</script>

<template>
    <div class='baskets-me'>
        <q-card
            class="baskets-me__card bg-grey-5 q-pa-md"
            flat
            bordered
        >
            <q-btn
                color="green"
                label="Перейти к оформлению"
                class="q-mb-md"
            />
            <hr/>
            <h5 class="q-mb-md">Ваша корзина</h5>
            <div class="flex justify-between">
                <span>Товаров: {{ basketProduct.length }}</span>
                <span class="baskets-me__sum">{{ sumBaskets }} ₽</span>
            </div>
            <q-btn
                color="red"
                label="Очистить корзину"
                class="q-mb-md"
                @click="basketProduct = []"
            />
        </q-card>
    </div>
</template>

<style lang='scss' scoped>
.baskets-me {
    &__card {
        display: flex;
        flex-direction: column;
    }

    &__sum {
        font-weight: 500;
        color: green;
        font-size: 18px;
    }
}
</style>
