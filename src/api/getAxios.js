import { api } from 'boot/axios';

export const getProducts = async () => {
    debugger;
    try {
        const resp = api({
            methods: 'GET',
            url: 'https://fakestoreapi.com/products'
        });

        productsArray.value = resp.data;
    } catch (error) {}
};
