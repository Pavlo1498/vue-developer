<script setup>
defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>
 
<template>
<div class='card'>
    <div class="card__head">
        <span>{{ item.title }}</span>
    </div>
    <div class="card__content">
        <img :src="item.image" />
        <div class="card__desc">
            <span class="text-hint">{{ item.description }}</span>
        </div>
        <div class="chips">
            <span>
                {{ item.category }}
            </span>
        </div>
        <div>
            <span>{{ item.rating.rate }}</span>
            <span>({{ item.rating.count }})</span>
        </div>
    </div>
    <div class="card__action">
        <span>{{ item.price }}&#x20bd</span>
        <button>Выбрать</button>
    </div>
</div>
</template>
 
<style lang='scss' scoped>
 .card {
    width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: #101828;
    padding: 16px;
    text-align: left;
    gap: 8px;

    &__desc {
        overflow: auto;
        height: 120px;
    }
    &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        img {
            width: 250px;
            height: 250px;
            border-radius: 16px;
        }
    }

    &__action {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
 }
</style>
 