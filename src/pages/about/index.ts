import {createApp} from "@vue/runtime-dom";

createApp({
  name: 'About',
  setup() {
    return {
      title: 'About working!'
    }
  }
}).mount('#about');
