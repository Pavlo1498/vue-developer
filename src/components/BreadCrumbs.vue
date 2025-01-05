<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <div class=''>
        <q-breadcrumbs
            class="text-grey"
            active-color="purple"
        >
            <template v-slot:separator>
                <q-icon
                    size="1.2em"
                    name="arrow_forward"
                    color="purple"
                />
            </template>
            <q-breadcrumbs-el
                icon="home"
                to="/"
                label="Товары"
            />
            <q-breadcrumbs-el
                v-if="route.name === 'baskets'"
                label="Корзина"
                icon="shopping_basket"
            />
        </q-breadcrumbs>

    </div>
</template>

<style lang='scss' scoped>

</style>
