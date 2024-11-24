<script setup>
import { filterProducts, showModalSendForm, selectProduct } from 'helpers/productsHelper.js';

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
            <q-card-section>
                <div class="my-card__content">
                    <span>{{ product.description }}</span>
                </div>
                <div class="my-card__footer q-mt-xl">
                    <q-chip>
                        <q-avatar
                            icon="currency_ruble"
                            color="green"
                            text-color="white"
                        />
                        <span>{{ product.price }}₽</span>
                    </q-chip>
                    <q-btn
                        push
                        color="primary"
                        label="Заказать"
                        @click="showModalSendForm = true, selectProduct = product"
                    />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    max-width: 250px;

    &__content {
        height: 100%;
        overflow: auto;
    }
    &__footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
