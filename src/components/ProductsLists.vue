<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { productsStore } from 'stores/productsStore.js';
import { basketStore } from 'stores/basketStore.js';
import { sizeName } from 'helpers/index';

import InputCount from 'components/input/InputCount.vue';

const { filterProducts } = storeToRefs(productsStore());
const { basketProduct } = storeToRefs(basketStore());

const { pushProductBasket, removeCount } = (basketStore());

const checkProductInBasket = computed(() => (product) => basketProduct.value.find(item => item.id === product.id));
</script>

<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card
            v-for="product in filterProducts"
            :key="product.id"
            class="my-card"
        >
            <q-img :src="product.image">
                <div class="absolute-bottom text-subtitle2 text-center">
                    {{ product.title }}
                </div>
            </q-img>
            <q-card-section class="my-card__section">
                <div class="my-card__content">
                    <span>{{ sizeName(product.description, 320) }}</span>
                </div>
                <div class="my-card__footer">
                    <q-chip>
                        <q-avatar
                            icon="currency_ruble"
                            color="green"
                            text-color="white"
                        />
                        <span>{{ product.price }}₽</span>
                    </q-chip>
                    <q-btn
                        v-if="!checkProductInBasket(product)"
                        push
                        color="primary"
                        label="В корзину"
                        @click="pushProductBasket(product)"
                    />
                    <InputCount
                        v-else
                        v-model="product.count"
                        @add="product.count += 1"
                        @remove="removeCount(product)"
                    />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;

    &__section {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    &__footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }
}
</style>
