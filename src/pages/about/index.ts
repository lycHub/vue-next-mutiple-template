import {createApp} from "vue";

createApp({
  name: 'About',
  setup() {
    return {
      title: 'About working!'
    }
  }
}).mount('#about');
