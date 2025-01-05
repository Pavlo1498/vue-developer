import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

import { productsStore } from 'stores/productsStore.js';

export const searchHeader = ref('');
export const searchPrice = ref('');

export const showModalCreateForm = ref(false);
export const showModalSendForm = ref(false);

const { filterProducts, productsArray } = storeToRefs(productsStore());

watchEffect(() => {
    if (searchPrice.value !== '' || searchHeader.value !== '') {
        return filterProducts.value = productsArray.value.filter(item =>
            item.price >= searchPrice.value &&
            item.title.toLowerCase().includes(searchHeader.value)
        );
    }

    filterProducts.value = productsArray.value;
});
