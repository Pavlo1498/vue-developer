<script setup>
import { showModalSendForm, showModalCreateForm } from 'helpers/productsHelper';

import CreateProductForm from 'components/forms/CreateProductForm.vue';
import SendProductForm from 'components/forms/SendProductForm.vue';
import ProductsLists from 'components/ProductsLists.vue';

</script>

<template>
    <CreateProductForm v-if="showModalCreateForm"/>
    <SendProductForm v-if="showModalSendForm"/>
    <q-page>
        <ProductsLists />
    </q-page>
</template>

<style lang='scss' scoped></style>
