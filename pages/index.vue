<template>
    <div>
        <button class="printMe">click me</button>
        <button type="button" class="btn">Basic</button>
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-link">Link</button>
        <h2>wonder</h2>
        <ul class="ps-section__nav">
            <li class="active"><a href="#"><small>Next SS Preview</small><span>All About Wedding</span></a></li>
            <li><a href="#"><small>Pink</small><span>Sneaker</span></a></li>
            <li><a href="#"><small>Winter</small><span>Collection</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            testJquery() {
                $("h2").addClass("tasty-class")
            }
        },
        mounted() {
            this.testJquery()
        }
    }
</script>