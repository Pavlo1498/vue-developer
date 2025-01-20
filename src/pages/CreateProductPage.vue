<script setup>
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

import { productsStore } from 'stores/productsStore.js';

const { filterProducts } = storeToRefs(productsStore());
const { postProductCreate } = productsStore();

const $q = useQuasar();

const myForm  = ref(null);

const createProduct = ref({
    description: '',
    category: '',
    title: '',
    price: '',
    image: ''
});

const sendCreateProduct = () => {
    myForm.value.validate().then(async success => {
        if (success) {
            await postProductCreate(createProduct.value);
            filterProducts.value.push(createProduct.value);
        }
        else {
            return $q.notify({
                color: 'negative',
                message: 'Заполните обязательные поля'
            });
      }
    });
};
</script>

<template>
    <q-card
        style="width: 450px"
        class="bg-grey-4"
    >
        <q-card-section>
            <div class="text-h6">Создание товара</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-sm">
            <q-form ref="myForm">
                <q-input
                    v-model="createProduct.title"
                    filled
                    label="Название товара"
                    color="grey-1"
                    bg-color="grey-5"
                    :rules="[val => !!val || 'Обязательное поле']"
                />
                <q-input
                    v-model="createProduct.price"
                    filled
                    label="Цена товара"
                    color="grey-1"
                    type="number"
                    bg-color="grey-5"
                    :rules="[val => !!val || 'Обязательное поле']"
                />
                <q-input
                    v-model="createProduct.description"
                    filled
                    label="Описание товара"
                    color="grey-1"
                    bg-color="grey-5"
                    :rules="[val => !!val || 'Обязательное поле']"
                />
                <q-input
                    v-model="createProduct.image"
                    filled
                    label="Картинка товара"
                    color="grey-1"
                    bg-color="grey-5"
                    :rules="[val => !!val || 'Обязательное поле']"
                />
                <q-input
                    v-model="createProduct.category"
                    filled
                    label="Категория товара"
                    color="grey-1"
                    bg-color="grey-5"
                    :rules="[val => !!val || 'Обязательное поле']"
                />
            </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn
                flat
                label="Создать"
                @click="sendCreateProduct"
            />
        </q-card-actions>
    </q-card>
</template>

<style lang='scss' scoped>

</style>
