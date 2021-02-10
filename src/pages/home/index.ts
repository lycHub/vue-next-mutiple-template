import {createApp} from "vue";

createApp({
  name: 'Home',
  setup() {
    return {
      title: 'Home working server!'
    }
  }
}).mount('#home');
