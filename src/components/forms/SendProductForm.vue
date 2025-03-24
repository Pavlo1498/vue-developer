<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import { showModalSendForm, selectProduct } from 'helpers/productsHelper';
import { postProductSend } from 'src/api/postAxios';
import { sendObject } from 'helpers/sendProductHelper';

const { errors, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    address: yup.string().min(6).required()
  })
});

const [email] = defineField('email');
const [address] = defineField('address');

const sendProduct = async () => {
    sendObject.value.product = selectProduct.value;
    sendObject.value.address = address.value;
    sendObject.value.email = email.value;

    await postProductSend(sendObject.value);
};
</script>

<template>
    <q-dialog
        v-model="showModalSendForm"
        persistent
        :backdrop-filter="'blur(4px)'"
    >
        <q-card
            style="width: 450px"
            class="bg-grey-4"
        >
            <q-card-section>
                <div class="text-h6">Оформление заказа</div>
            </q-card-section>

            <q-card-section class="q-pt-none q-gutter-sm">
                <q-input
                    v-model="selectProduct.title"
                    filled
                    label="Название товара"
                    disable
                    color="grey-1"
                    bg-color="grey-5"
                />
                <q-input
                    v-model="selectProduct.price"
                    filled
                    disable
                    label="Цена товара"
                    color="grey-1"
                    bg-color="grey-5"
                />
                <q-input
                    v-model="sendObject.fio"
                    filled
                    label="ФИО"
                    color="grey-1"
                    bg-color="grey-5"
                />
                <q-input
                    v-model="email"
                    filled
                    label="email"
                    color="grey-1"
                    bg-color="grey-5"
                    type="email"
                />
                <span
                    v-if="errors?.email"
                    class="text-red"
                >
                    {{ errors.email }}
                </span>
                <q-input
                    v-model="address"
                    filled
                    label="Адрес доставки"
                    color="grey-1"
                    bg-color="grey-5"
                />
                <span
                    v-if="errors?.address"
                    class="text-red"
                >
                    {{ errors.address }}
                </span>
                <q-checkbox
                    v-model="sendObject.confirm"
                    label="Согласие с правилами обработки заказа"
                />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn
                    v-close-popup
                    flat
                    label="Отмена"
                    @click="showModalSendForm = false"
                />
                <q-btn
                    v-close-popup
                    flat
                    :disable="Object.keys(errors).length !== 0"
                    label="Заказать"
                    @click="sendProduct"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
