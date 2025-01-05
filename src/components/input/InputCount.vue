<script setup>
const modelCount = defineModel();
const emit = defineEmits(['add', 'remove']);
</script>

<template>
    <div class='input-count'>
        <q-btn
            color="primary"
            icon="remove"
            size="6px"
            @click="emit('remove')"
        />
        <q-input
            v-model.number="modelCount"
            type="number"
            class="input-count__input"
            dense
            filled
        />
        <q-btn
            color="primary"
            icon="add"
            size="6px"
            @click="emit('add')"
        />
    </div>
</template>

<style lang='scss' scoped>
.input-count {
    display: flex;
    gap: 8px;

    &__input {
        width: 70px;
    }
}
</style>
