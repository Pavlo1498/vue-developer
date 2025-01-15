<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { basketStore } from 'stores/basketStore.js';
import { sizeName } from 'helpers/index';

import InputCount from 'components/input/InputCount.vue';
import BasketsMe from 'components/baskets/BasketsMe.vue';

const { basketProduct } = storeToRefs(basketStore());
const { removeCount, countSumBaskets } = (basketStore());

onMounted(() => {
    countSumBaskets();
});
</script>

<template>
    <div class='basket-page'>
        <div class='basket-page__wrapper'>
            <q-card
                v-for="product in basketProduct"
                :key="product.id"
                class="bg-grey-5 q-pa-md"
                flat
                bordered
            >
                <div class="basket-page__card">
                    <div class="flex items-center q-gutter-md">
                        <img
                            width="200px"
                            src="https://cdn.quasar.dev/img/mountains.jpg"
                        />
                        <div>
                            <span>{{ product.title }}</span>
                            <span>{{ sizeName(product.description, 180) }}</span>
                        </div>
                    </div>
                    <div class="flex items-center q-gutter-md">
                        <q-card-actions vertical class="justify-around q-px-md">
                            <InputCount
                                v-model="product.count"
                                @add="product.count += 1, countSumBaskets()"
                                @remove="removeCount(product), countSumBaskets()"
                            />
                        </q-card-actions>
                        <q-chip>
                            <q-avatar
                                icon="currency_ruble"
                                color="green"
                                text-color="white"
                            />
                            <span>{{ product.price }} ₽</span>
                        </q-chip>
                    </div>
                </div>
                <div class="basket-page__sum">
                    <span>товаров на сумму:</span>
                    <span>{{ product.price * product.count }} ₽</span>
                </div>
            </q-card>
        </div>
        <BasketsMe v-if="basketProduct.length > 0"/>
    </div>
</template>

<style lang='scss' scoped>
.basket-page {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    align-items: flex-start;

    &__wrapper {
        display: flex;
        max-width: 1024px;
        flex-direction: column;
        gap: 16px;
    }

    &__card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        img {
            border-radius: 8px;
        }
    }

    &__sum {
        display: flex;
        justify-content: end;
        gap: 8px;

        span:last-child {
            font-weight: 500;
            color: green;
        }
    }
}
.my-card {
    width: 550px;
}
</style>
