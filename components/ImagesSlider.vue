<template>
    <div id="homepage-default">
        <div class="ps-home-banner">
            <ul class="ps-section__nav">
                <li class="active"><a href="#"><small>Next SS Preview</small><span>Woman Shoes</span></a></li>
                <li><a href="#"><small>Pink</small><span>Sneaker</span></a></li>
                <li><a href="#"><small>Winter</small><span>Collection</span></a></li>
            </ul>
            <div class="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed="15000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                <div class="ps-banner--3 bg--top-right" :style="{ background: `url(${slider_1})` }">
                    <div class="ps-banner__social">
                        <ul class="ps-list--social" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="ps-banner__content">
                        <p data-animation-in="fadeInLeft" data-animation-out="animate-out fadeOutRight">Next SS Preview</p>
                        <h3 data-animation-in="fadeInLeft" data-animation-out="animate-out fadeOutRight">Woman <br /> Shoes</h3><a class="ps-link--under" href="#" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">Discover more</a>
                    </div>
                </div>
                <div class="ps-banner--3 bg--top-left right" :style="{ background: `url(${slider_2})` }">
                    <div class="ps-banner__social">
                        <ul class="ps-list--social">
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="ps-banner__content">
                        <p data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Trendy Pink</p>
                        <h3 data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Sneakers</h3><a class="ps-link--under" href="#" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">Discover more</a>
                    </div>
                </div>
                <div class="ps-banner--3 bg--cover white" :style="{ background: `url(${slider_3})` }">
                    <div class="ps-banner__social">
                        <ul class="ps-list--social">
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="ps-banner__content">
                        <h3 data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Winter <br /> Collection
                        </h3><a class="ps-link--under" href="#" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">Discover more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import image_1 from '@/assets/img/bg/home-default/getty1.jpg'
    import image_2 from '@/assets/img/bg/home-default/getty2.jpg'
    import image_3 from '@/assets/img/bg/home-default/getty3.jpg'

    export default {
        data() {
            return {
                landingPoster_1: [],
                landingPoster_2: [],
                landingPoster_3: [],
                slider_1: image_1,
                slider_2: image_2,
                slider_3: image_3,
            }
        },
        async fetch() {
            // const getLandingPage = await this.$axios.get('http://localhost:3080/wp-json/wp/v2/media?id=28').then((response) => {
            //     this.landingPoster_1 = response.data[8].source_url
            //     this.landingPoster_2 = response.data[7].source_url
            //     this.landingPoster_3 = response.data[6].source_url
            //     console.log(response.data)
            //     console.log('Responese landing poster : get successful')
            // }).catch((error) => {
            //     console.log('Responese landing poster : get failure')
            // })
            // return {
            //     getLandingPage
            // }
        },
        methods: {
            getLandingPageWonder() {
                console.log("wonder")
            }
        },
        mounted() {
            this.getLandingPageWonder()
        }
    }
</script>

<style>
    .fade-enter-active {
        transition: opacity 3s ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }
</style>