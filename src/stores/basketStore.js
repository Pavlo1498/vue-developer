import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { ref } from 'vue';

import { api } from 'boot/axios';

export const basketStore = defineStore('basketStore', () => {
    const basketProduct = ref([]);

    const pushProductBasket = (product) => {
        product.count = 1;
        basketProduct.value.push(product);
    };

    const removeCount = (product) => {
        const findIdProduct = basketProduct.value.findIndex((i) => i.id === product.id);

        product.count -= 1;
        if (product.count == 0) basketProduct.value.splice(findIdProduct, 1);
    };
    return {
        basketProduct,

        pushProductBasket,
        removeCount
    };
});
