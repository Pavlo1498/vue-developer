import { ref, watchEffect } from 'vue';

export const filterProducts = ref(null);
export const productsArray = ref(null);
export const selectProduct = ref(null);
export const searchHeader = ref('');
export const searchPrice = ref('');

export const showModalCreateForm = ref(false);
export const showModalSendForm = ref(false);

watchEffect(() => {
    if (searchPrice.value !== '' || searchHeader.value !== '') {
        return filterProducts.value = productsArray.value.filter(item =>
            item.price >= searchPrice.value &&
            item.title.toLowerCase().includes(searchHeader.value)
        );
    }

    filterProducts.value = productsArray.value;
});
