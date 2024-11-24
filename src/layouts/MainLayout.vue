<script setup>
import { ref } from 'vue';

import HeaderCreateBtn from 'components/header/HeaderCreateBtn.vue';
import HeaderSearch from 'components/header/HeaderSearch.vue';
import DrawerSearch from 'components/drawer/DrawerSearch.vue';

const leftDrawerOpen = ref(true);
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
                <HeaderCreateBtn />
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            elevated
            side="left"
            class="bg-grey-10 q-pa-md"
        >
            <DrawerSearch />
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
