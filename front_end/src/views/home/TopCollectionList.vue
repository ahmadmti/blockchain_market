<template>
    <div class="container">
        <div class="row">

            <div class="col-md-4">
                <div class="row border-bottom nft-list-items rounded p-2" v-for="(collection, key, index) in colllections" :key="index">
                    <router-link :to="'/collection/'+collection.title" class="text-decoration-none text-muted">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col-md-1">
                                <a class="btn btn-primary position-relative  border-pill mt-2 border-0 section-bg-color">
                                    <img :src="collection.url" height="50" width="50" class="rounded-circle" />
                                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-8">
                                <p class="text-dark fw-bold"> {{ collection.title }} </p>
                                <p class="text-muted"> Floor Price </p>
                            </div>
                            <div class="col-md-3">
                                <div>
                                    <p class="text-success fw-bold"> {{ collection.percent }} </p>
                                    <p class="text-muted fw-bold"> {{ collection.price }} Eth </p>
                                    
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row border-bottom nft-list-items rounded p-2" v-for="(collection, key, index) in colllections" :key="index">
                    <router-link :to="'/collection/'+collection.title" class="text-decoration-none text-muted">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col-md-1">
                                <a class="btn btn-primary position-relative  border-pill mt-2 border-0 section-bg-color">
                                    <img :src="collection.url" height="50" width="50" class="rounded-circle" />
                                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-8">
                                <p class="text-dark fw-bold"> {{ collection.title }} </p>
                                <p class="text-muted"> Floor Price </p>
                            </div>
                            <div class="col-md-3">
                                <div>
                                    <p class="text-success fw-bold"> {{ collection.percent }} </p>
                                    <p class="text-muted fw-bold"> {{ collection.price }} Eth </p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row border-bottom nft-list-items rounded p-2" v-for="(collection, key, index) in colllections" :key="index">
                    <router-link :to="'/collection/'+collection.title" class="text-decoration-none text-muted">
                        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div class="col-md-1">
                                <a class="btn btn-primary position-relative  border-pill mt-2 border-0 section-bg-color">
                                    <img :src="collection.url" height="50" width="50" class="rounded-circle" />
                                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-8">
                                <p class="text-dark fw-bold"> {{ collection.title }} </p>
                                <p class="text-muted"> Floor Price </p>
                            </div>
                            <div class="col-md-3">
                                <div>
                                    <p class="text-success fw-bold"> {{ collection.percent }} </p>
                                    <p class="text-muted fw-bold"> {{ collection.price }} Eth </p>
                                    
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>

export default {
    name : 'TopCollectionList',
    data() {
        return {
            colllections : [
                {
                    title : 'Pudgy Penguins',
                    url : 'https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s168',
                    floor_price : '3.95',
                    percent : '14.07%',
                    price : '773.5'
                },
                                {
                    title : 'Isekai Meta',
                    url : 'https://openseauserdata.com/files/5b2189963c2cec9bb3949f2cc98fb8b9.jpg',
                    floor_price : '5.95',
                    percent : '10.07%',
                    price : '703.5'
                },
                                {
                    title : 'Bored Ape Yacht Club',
                    url : 'https://lh3.googleusercontent.com/5-KeOMqOlfC7D6etYVEcrEiPcRy_QB-KPS3uOeGu7hMsPorzvPNtJOVrQRb1rxjHFcFsyXEQmTdj7bvqlbAQD5foHQxbTEgb5GPaMLg=s2500',
                    floor_price : '1.95',
                    percent : '11.07%',
                    price : '673.5'
                },
                                {
                    title : 'ABC(abrac)',
                    url : 'https://lh3.googleusercontent.com/vb20I7MpI0O6-b8mexl3HtLB3RnDZYfppi_0ZSRblnLekBYXGcMQtVc6pMAyUcyiANiYFYx0__gYcL8EpZ-6qjRR3fbNWKnbs4RSoA=s168',
                    floor_price : '0.95',
                    percent : '20.07%',
                    price : '700.5'
                },
                                {
                    title : 'Mutant Ape Yacht Club',
                    url : 'https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s168',
                    floor_price : '2.95',
                    percent : '7.07%',
                    price : '903.5'
                },        
            ]        
        }
    }
}
</script>
<style scoped>
    
    .nft-list-items:hover
    {
        -webkit-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.75);
        box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.75);   
    }

    .nft-start-80 {
        top : 80% !important ;
        left: 80% !important ;
    }

</style>