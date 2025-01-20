<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <q-btn
        round
        color="primary"
        icon="add"
        @click="router.push('create-product')"
    >
        <q-tooltip>
            Создать товар
        </q-tooltip>
    </q-btn>
</template>

<style lang='scss' scoped>

</style>
