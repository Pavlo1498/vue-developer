<script setup>
import { showModalCreateForm } from 'helpers/productsHelper';

</script>

<template>
    <q-btn
        round
        color="primary"
        icon="add"
        @click="showModalCreateForm = true"
    >
        <q-tooltip>
            Создать товар
        </q-tooltip>
    </q-btn>
</template>

<style lang='scss' scoped>

</style>
