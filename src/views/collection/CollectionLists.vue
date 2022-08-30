<template>
    <div>
        <div class="container img-fluid section-img">
            <div class="row">
                <img src="https://lh3.googleusercontent.com/kVVevhk9BBE5BSuIoQfkH5_5FVsPTJCR34wpVBf1ACURh9dfNaybChPgiicte10yb6SYVp5iMQNXaQrOnHXmRiiOtVxUzYJR3M1I=s2500" alt="">
            </div>
        </div>
        <div class="container">
            <h1 class="py-3 text-capitalize">
                {{  $route.params.category.replace(/-/g, " ")  }}
            </h1>
            <p class="me-5" v-html="description"></p>
            <h4 class="fw-bold"> Trending Collections </h4>
            <div class="row">
                <CollectionGridList />
            </div>
        </div>
    </div>
</template>
<script>
import CollectionGridList from '@/components/collection/CollectionGridList.vue';
export default {
    name : 'CollectionList',
    data() {
        return {
            description : `Whether it's <b> redeemable </b> rewards or membership NFTs, a rising number of creators and developers are leveraging blockchain-backed tokens to build and support their communities. Buy and sell scarce digital goods from the likes of POAP, Urbit ID, and Polyient Games.`
        }
    },
    components : {CollectionGridList}
}
</script>
<style scoped>
    .section-img {
        max-width: 100%;
    }
</style>