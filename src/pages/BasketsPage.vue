<script setup>
import { storeToRefs } from 'pinia';

import { basketStore } from 'stores/basketStore.js';
import { sizeName } from 'helpers/index';

import InputCount from 'components/input/inputCount.vue';

const { basketProduct } = storeToRefs(basketStore());
const { removeCount } = (basketStore());

</script>

<template>
    <div class='basket-page'>
        <div class='basket-page__wrapper'>
            <q-card
                v-for="product in basketProduct"
                :key="product.id"
                class="bg-grey-5"
                flat
                bordered
            >
                <div class="basket-page__card q-pa-md">
                    <img
                        width="200px"
                        src="https://cdn.quasar.dev/img/mountains.jpg"
                    />
                    <div>
                        <span>{{ product.title }}</span>
                        <span>{{ sizeName(product.description, 180) }}</span>
                    </div>
                    <q-card-actions vertical class="justify-around q-px-md">
                        <InputCount
                            v-model="product.count"
                            @add="product.count += 1"
                            @remove="removeCount(product)"
                        />
                    </q-card-actions>
                </div>
            </q-card>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.basket-page {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    &__wrapper {
        display: flex;
        max-width: 1024px;
        flex-direction: column;
        gap: 16px;
    }

    &__card {
        display: flex;
        align-items: center;
        gap: 16px;

        img {
            border-radius: 8px;
        }
    }
}
.my-card {
    width: 550px;
}
</style>
