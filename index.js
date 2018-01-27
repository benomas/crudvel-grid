export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log('Mounted!');
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}