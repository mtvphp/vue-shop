<template>
    <div>
        <div v-if="product">
            <p v-if="!loading">{{ product.title }}</p>
            <p v-if="!loading">{{ product.description }}</p>
            <div v-else class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else>Товар не существует</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {

        props: ['slug'],

        data() {
            return {
                product: [],
                loading: true

            }
        },

        mounted() {
            this.get()
        },

        methods: {
            get() {
                axios.post('http://laravel-api/api/product', {product_slug: this.slug}).then((res) => {
                    this.product = res.data
                }).finally(() => {
                    this.loading = false;
                });
            }
        }

    }
</script>

