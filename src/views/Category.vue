<template>
    <div>
        <div v-if="category">
            <p v-if="!loading">{{ category.title }}</p>
            <div v-else class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else>Категория не существует</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {

        props: ['slug'],

        data() {
            return {
                category: [],
                loading: true

            }
        },

        mounted() {
            this.get()
        },

        methods: {
            get() {
                axios.post('http://laravel-api/api/category', {category_slug: this.slug}).then((res) => {
                    this.category = res.data
                }).finally(() => {
                    this.loading = false;
                });
            }
        }

    }
</script>

