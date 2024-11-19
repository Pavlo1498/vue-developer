import axios from 'axios';

import { ref } from 'vue';

export const arrayProducts = ref(null)
export const stateLoad = ref(false);

export const loadProduct = async () => {
    try {
        stateLoad.value = true;

        const resp = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
        })

        arrayProducts.value = resp.data;
        setTimeout(() => {
            stateLoad.value = false;
        }, 1500);
    } catch (error) {
        console.log(error);
        stateLoad.value = false;
    }
}