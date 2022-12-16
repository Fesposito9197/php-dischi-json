const { createApp } = Vue;

createApp({
  data() {
    return {
      Music: [],
    };
  },
  created() {
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.Music = res.data;
    });
  },
}).mount("#app");
