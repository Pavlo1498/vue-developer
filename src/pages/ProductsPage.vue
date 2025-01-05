<script setup>
import { ref } from 'vue';

import { showModalSendForm, showModalCreateForm } from 'helpers/productsHelper';

import CreateProductForm from 'components/forms/CreateProductForm.vue';
// import SendProductForm from 'components/forms/SendProductForm.vue';
import ProductsLists from 'components/ProductsLists.vue';
import DrawerSearch from 'components/drawer/DrawerSearch.vue';

const leftDrawerOpen = ref(true);

</script>

<template>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        elevated
        width="280"
        side="left"
        class="bg-grey-10 q-pa-md"
    >
        <DrawerSearch />
    </q-drawer>

    <CreateProductForm v-if="showModalCreateForm"/>
    <!-- <SendProductForm v-if="showModalSendForm"/> -->
    <q-page>
        <ProductsLists />
    </q-page>
</template>

<style lang='scss' scoped></style>
