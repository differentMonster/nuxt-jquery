<template>
    <div>
        <h3>
            <nuxt-link to="home">home</nuxt-link>
        </h3>
        <ImagesSlider></ImagesSlider>
    </div>
</template>

<script>
    import ImagesSlider from '@/components/ImagesSlider.vue'
    export default {
        component: {
            ImagesSlider
        }
    }
</script>

<style>
    h3 {
        text-align: center;
    }
</style>