<script setup>
import { searchHeader } from 'helpers/productsHelper.js';
</script>

<template>
    <q-space/>
    <q-input
        v-model="searchHeader"
        class="GPL__toolbar-input"
        dense
        standout="bg-primary"
        placeholder="Поиск товара"
        style="width: 600px;"
        color="grey-1"
        bg-color="grey-8"
    >
        <template v-slot:prepend>
            <q-icon
                v-if="searchHeader === ''"
                name="search"
            />
            <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="searchHeader = ''"
            />
        </template>
    </q-input>
    <q-space/>
</template>

<style lang='scss' scoped>

</style>
