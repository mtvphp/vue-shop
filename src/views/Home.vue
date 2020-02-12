<template>
  <div>

    <!--categories-->
    <div>
      <h2>Category:</h2>

      <ul>

        <div v-if="!loading_categories">
          <li v-for="(category,index) in categories" :key="index">
            <router-link :to="{ name: 'category', params: { slug: category.slug }}">{{ category.title }}</router-link>
          </li>
        </div>

        <div v-else class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>

      </ul>

    </div>

    <!--products-->
    <div>
      <h2>Products:</h2>

      <ul>

        <div v-if="!loading_products">
          <li v-for="(product,index) in products" :key="index">
            <router-link :to="{ name: 'product', params: { slug: product.slug }}">{{ product.title }}</router-link>
          </li>
        </div>

        <div v-else class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>

      </ul>

    </div>


  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data() {
      return {
        categories: [],
        products: [],
        loading_categories: true,
        loading_products: true
      }
    },

    mounted() {
      axios.post('http://laravel-api/api/categories').then((res) => {
        this.categories = res.data
      }).finally(() => {
        this.loading_categories = false
      })

      axios.post('http://laravel-api/api/products').then((res) => {
        this.products = res.data
      }).finally(() => {
        this.loading_products = false
      })
    }

  }
</script>
