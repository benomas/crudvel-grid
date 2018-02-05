import Vue from 'vue';
import VueVersion from '../src/CrudvelGrid.js'

Vue.config.productionTip = false;

describe('Crudvel grid', () => {
  it('grid for use with crudvel resources', () => {
    let Component = Vue.extend(CrudvelGrid);
    let vv = new Component();
    expect(vv.CrudvelGrid).toBe(Vue.CrudvelGrid);
  });

  it('grid for use with crudvel resources', () => {
    let Component = Vue.extend(CrudvelGrid);
    let vm = new Component().$mount();
    expect(vm.$el.textContent.replace(/(^\s+|\n+)/g, '')).toBe('You are using Vue ')
  });
});
