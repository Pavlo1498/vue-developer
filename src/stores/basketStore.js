import { defineStore } from 'pinia';
import { ref } from 'vue';

export const basketStore = defineStore('basketStore', () => {
    const basketProduct = ref([]);
    const sumBaskets = ref(0);

    const pushProductBasket = (product) => {
        product.count = 1;
        basketProduct.value.push(product);
    };

    const removeCount = (product) => {
        const findIdProduct = basketProduct.value.findIndex((i) => i.id === product.id);

        product.count -= 1;
        if (product.count == 0) basketProduct.value.splice(findIdProduct, 1);
    };

    const countSumBaskets = () => {
        sumBaskets.value = basketProduct.value.reduce((total, item) => {
            return total + (item.price * item.count);
           }, 0);
    };
    return {
        basketProduct,
        sumBaskets,

        pushProductBasket,
        countSumBaskets,
        removeCount
    };
});
