<!-- @format -->
<template>
  <main role="main">
    <section class="main">
      <h2>Task</h2>
      <p id="desc-home" aria-label="Deskripsi paragraf">
        Tambahkan Taskmu di sini
      </p>
      <section aria-labelledby="section-title">
        <form action="" @submit.prevent="addItem">
          <label for=""
            ><input type="text" v-model="dataItem" placeholder="Halo"
          /></label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section aria-labelledby="section-title">
        <ul>
          <li v-for="(item, index) in allData" :key="index">{{ item }}</li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dataItem: "",
      allData: ["Sayur"],
    };
  },
  methods: {
    addItem() {
      this.allData.push(this.dataItem);
      this.dataItem = "";
    },
  },
};
</script>

<style scoped>
.main {
  margin: 0 20rem;
  padding: 1rem;
}
</style>
