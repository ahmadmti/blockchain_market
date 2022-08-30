<template>
    <div>
        <a class="btn btn-primary bg-transparent border-0 text-dark fw-bold mb-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i class="fa fa-square" aria-hidden="true"></i> Properties </a>
        <div class="collapse" id="collapseExample">
            <span v-for="property in properties" :key="property">
                <a :href="property.link" class="btn btn-outline-primary m-2">  {{ property.title }} <br /> {{ property.name }} <br />  {{ property.attribute }}  </a>
            </span>
        </div>
    </div>
</template>
<script>
// https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c2
// 48420045cb7b5e/25115308198896370059632493152416960079027767801373359585864712476311802609665

export default {
    name : 'NFTProperties',
    data() {
        return {
            properties : [
                {
                    link : 'www.google.com',
                    title : 'Ape Background',
                    name : 'White Gray',
                    attribute : 'New Trait',
                },
                {
                    link : 'www.google.com',
                    title : 'Ape Background',
                    name : 'Sleeves',
                    attribute : 'Bored',
                },
                {
                    link : 'www.google.com',
                    title : 'Ape Background',
                    name : 'Name',
                    attribute : 'attribute',
                },
            ]
        }
    },

}
</script>