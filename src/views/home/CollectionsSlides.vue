<template>
    <div class="container">          
        <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :arrows="false"
        autoplay="true"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="slide_detail in slide_details" :key="slide_detail" :image="slide_detail.url" :title="slide_detail.collection_title" />
            
        </vueper-slides>
    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name : 'CollectionSlides',
    data() {
        return {
            slide_details : [
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Glass By Edge'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'We Living illusion'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Bong Bears'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'ETH Villags'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Chubbicorn'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Glass By Edge'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'EbbleJunsis'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Iseka Meta'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'MV3 Universe'
                },
                {
                    url : 'https://i.seadn.io/gcs/files/b601e67a88521ea998596db4837c0d80.jpg?auto=format&dpr=1&h=600',
                    icon: 'https://openseauserdata.com/files/cc04f4680a46418b3ca5b10df2e46ec5.gif',
                    collection_title : 'Tamayo Bella Chao'
                },
            ]
        }
    },
    components: { VueperSlides, VueperSlide },
}
</script>
<style>
    .vueperslide__title {
        margin-top : 60% !important ;
        margin-left: 50% !important;
        background: white ;
        color: black;
        font-weight: bold;
        text-decoration: none ;
        padding: 10px;
        border-radius: 5px; 
    }

    .vueperslide--visible {
        text-decoration: none ;
    }
</style>