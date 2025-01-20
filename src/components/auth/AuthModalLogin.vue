<script setup>
import { storeToRefs } from 'pinia';

import { showAuthModal } from 'helpers/authHelp.js';
import { authStore } from 'stores/authStore.js';

const { authLogin } = storeToRefs(authStore());
const { onAuth, onReset } = authStore();
</script>

<template>
    <q-dialog v-model="showAuthModal" backdrop-filter="blur(4px) saturate(150%)">
        <q-card style="width: 350px">
            <q-card-section class="row items-center q-pb-none text-h6">
                Вход
            </q-card-section>
            <div class="q-pa-md" style="max-width: 400px">
                <q-form
                    class="q-gutter-md"
                    @submit="onAuth"
                    @reset="onReset"
                >
                    <q-input
                        v-model="authLogin.login"
                        filled
                        label="Логин"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Введите логин']"
                    />

                    <q-input
                        v-model="authLogin.password"
                        filled
                        type="password"
                        label="Пароль"
                        lazy-rules
                        :rules="[
                            val => val !== null && val !== '' || 'Введите пароль'
                        ]"
                    />

                    <div class="flex justify-end" style="width: 100%">
                        <q-btn
                            label="Вход"
                            type="submit"
                            color="primary"
                        />
                        <q-btn
                            label="Отмена"
                            type="reset"
                            color="primary"
                            flat
                            class="q-ml-sm"
                        />
                    </div>

                </q-form>
            </div>
        </q-card>
    </q-dialog>
</template>

<style lang='scss' scoped>

</style>
