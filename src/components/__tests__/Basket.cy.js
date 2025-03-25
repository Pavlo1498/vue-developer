import { setActivePinia, createPinia } from 'pinia';
// import { basketStore } from '../stores/basketStore';

import ProductsLists from 'components/ProductsLists.vue';

describe('Counter Store', () => {
    beforeEach(() => {
      // создаем новый экземпляр pinia и делаем его активным,
      // чтобы он автоматически подхватывается любым вызовом useStore()
      // без необходимости его передачи: `useStore(pinia)`
      setActivePinia(createPinia());
    });

    it('selects a date by date string', () => {
        cy.mount(ProductsLists);

        cy.dataCy('push-product').click();
      });
});
