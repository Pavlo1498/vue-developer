import { LocalStorage } from 'quasar';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import Router from 'router/index.js';

import { showAuthModal } from 'helpers/authHelp.js';

export const authStore = defineStore('authStore', () => {
    const isAuth = ref(false);
    const login = ref('');

    const authLogin = ref({
        login: null,
        password: null
    });


    const onAuth = () => {
        LocalStorage.set('authorization', {
            isAuth: true,
            login: authLogin.value.login
        });
        isAuth.value = true;
        showAuthModal.value = false;

        login.value = authLogin.value.login;
        onReset();
        Router.push('create-product');
    };

    const onLogout = () => {
        LocalStorage.removeItem('authorization');
        isAuth.value = false;
        login.value = '';

        onReset();
    };

    const onReset = () => {
        authLogin.value.login = null;
        authLogin.value.password = null;

        showAuthModal.value = false;
    };

    const ifAuthenticated = (to, from, next) => {
        const value = LocalStorage.getItem('authorization');

        if (value?.isAuth) {
            isAuth.value = true;
            login.value = value.login;
            next();

            return;
        }

        isAuth.value = false;
        next();
    };

    return {
        authLogin,
        isAuth,
        login,

        ifAuthenticated,
        onLogout,
        onReset,
        onAuth
    };
});
