import { setActivePinia, createPinia } from 'pinia';
import { basketStore } from '../stores/basketStore';

describe('Counter Store', () => {
    beforeEach(() => {
      // создаем новый экземпляр pinia и делаем его активным,
      // чтобы он автоматически подхватывается любым вызовом useStore()
      // без необходимости его передачи: `useStore(pinia)`
      setActivePinia(createPinia());
    });

    it('increments',() => {
        const btStore = basketStore();
        const product = {
        id: 1,
        name: 'Test Product'
    };
        btStore.pushProductBasket(product);
        expect(btStore.basketProduct).toHaveLength(1);
        expect(btStore.basketProduct[0]).toEqual({
            id: 1,
            name: 'Test Product',
            count: 1,
        });
    });

    it('должен добавлять пустой продукт с count = 1', () => {
        const btStore = basketStore();
        const product = {};

        btStore.pushProductBasket(product);

        expect(btStore.basketProduct).toHaveLength(1);
        expect(btStore.basketProduct[0]).toEqual({
            count: 1,
        });
    });
});
