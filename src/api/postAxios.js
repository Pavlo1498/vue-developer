import { api } from 'boot/axios';
import { Notify } from 'quasar';

export const postProductSend = async (payload) => {
    try {
        await api.post('https://httpbin.org/post', {
            ...payload
        });

        Notify.create({
            icon: 'check',
            message: 'Заказ сформирован',
            progress: true,
            color: 'green',
            textColor: 'white',
            classes: 'glossy',
            position: 'top-right'
          });
    } catch (error) {}
};

export const postProductCreate = async (payload) => {
    try {
        await api.post('https://fakestoreapi.com/products', {
            ...payload
        });

        Notify.create({
            icon: 'check',
            message: 'Продукт добавлен',
            progress: true,
            color: 'green',
            textColor: 'white',
            classes: 'glossy',
            position: 'top-right'
          });
    } catch (error) {}
};
