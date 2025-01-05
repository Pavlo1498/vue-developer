import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { ref } from 'vue';

import { api } from 'boot/axios';

export const productsStore = defineStore('productsStore', () => {
    const filterProducts = ref(null);
    const productsArray = ref(null);
    const selectProduct = ref(null);

    const getProducts = async () => {
        try {
            const resp = await api({
                methods: 'GET',
                url: 'https://api.escuelajs.co/api/v1/products'
                // url: 'https://fakestoreapi.com/products'
            });

            filterProducts.value = resp.data;
            productsArray.value = resp.data;
        } catch (error) {}
    };

    const postProductSend = async (payload) => {
        try {
            await api.post('https://httpbin.org/post', {
                ...payload
            });

            Notify.create({
                icon: 'check',
                message: 'Заказ сформирован',
                progress: true,
                color: 'green',
                textColor: 'white',
                classes: 'glossy',
                position: 'top-right'
              });
        } catch (error) {}
    };

    const postProductCreate = async (payload) => {
        try {
            await api.post('https://fakestoreapi.com/products', {
                ...payload
            });

            Notify.create({
                icon: 'check',
                message: 'Продукт добавлен',
                progress: true,
                color: 'green',
                textColor: 'white',
                classes: 'glossy',
                position: 'top-right'
              });
        } catch (error) {}
    };

    return {
        filterProducts,
        productsArray,
        selectProduct,

        postProductCreate,
        postProductSend,
        getProducts
    };
});
