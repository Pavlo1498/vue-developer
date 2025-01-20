<script setup>
import { storeToRefs } from 'pinia';

import { authStore } from 'stores/authStore.js';

import HeaderCreateBtn from 'components/header/HeaderCreateBtn.vue';
import HeaderSearch from 'components/header/HeaderSearch.vue';
import HeaderBasket from 'components/header/HeaderBasket.vue';
import BreadCrumbs from 'components/BreadCrumbs.vue';
import HeaderLogin from 'components/header/HeaderLogin.vue';

const { isAuth } = storeToRefs(authStore());

</script>

<template>
    <q-layout
        view="hHh LpR fFf"
        :style="{
            'background': '#121212'
        }"
    >
        <q-header
            elevated
            class="bg-grey-9"
        >
            <q-toolbar>
                <HeaderSearch />
                <HeaderCreateBtn v-if="isAuth"/>
                <HeaderBasket />
                <HeaderLogin />
            </q-toolbar>
        </q-header>
        <q-page-container>
            <BreadCrumbs />
            <router-view />
        </q-page-container>
    </q-layout>
</template>
