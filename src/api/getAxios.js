import { api } from 'boot/axios';

import { productsArray, filterProducts } from 'helpers/productsHelper.js';

export const getProducts = async () => {
    try {
        const resp = await api({
            methods: 'GET',
            // url: 'https://api.escuelajs.co/api/v1/products'
            url: 'https://fakestoreapi.com/products'
        });

        filterProducts.value = resp.data;
        productsArray.value = resp.data;
    } catch (error) {}
};

