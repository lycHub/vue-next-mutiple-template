import {createApp} from "@vue/runtime-dom";

createApp({
  name: 'Home',
  setup() {
    return {
      title: 'Home working!'
    }
  }
}).mount('#home');
