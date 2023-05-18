const app = Vue.createApp({
  methods: {
    closeAnnouncement() {
      const announcement = document.getElementById("app");
      announcement.style.display = "none";
    }
  }
});

app.mount('#app');
