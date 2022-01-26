/* **select2 js */
/* **dependency: home - image slider */
let pluginSelect2;

/* **owl-carousel js */
/* **dependency: home - image slider */
let pluginOwlCarousel;

/* **light-gallery js */
/* **dependency: home - image slider */
let pluginLightGallery;

/* **jquery-ui js */
/* **dependency: home - image slider */
let pluginJqueryUI;

/* **wedding-house + supro main js */
/* **dependency: home - image slider */
let pluginWeddingHouse;



if (process.browser) {
    pluginSelect2 = require('@/static/select2/dist/js/select2.full.min.js')
    pluginOwlCarousel = require('@/static/owl-carousel/js/owl.carousel.js')
    pluginLightGallery = require('@/static/lightGallery-master/dist/js/lightgallery-all.min.js')
    pluginJqueryUI = require('@/static/jquery/jquery-ui/jquery-ui.min.js')
    pluginWeddingHouse = require('@/static/wedding-house/js/main.js')
}

export default {
    mounted() {
        console.log(pluginSelect2);
    },
}