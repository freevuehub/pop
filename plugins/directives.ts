import Vue from 'vue';

Vue.directive('resize', {
  inserted: (el, binding) => window.onresize = event => binding.value(event.target)
});