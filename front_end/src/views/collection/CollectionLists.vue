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
                <CollectionGridList :collections="collections" />
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
            description : `Whether it's <b> redeemable </b> rewards or membership NFTs, a rising number of creators and developers are leveraging blockchain-backed tokens to build and support their communities. Buy and sell scarce digital goods from the likes of POAP, Urbit ID, and Polyient Games.`,
            collections : [
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/0QufOBoZe7lmjMzMZyFQbf81-IHDlzzI5KRR6lOzg1vAiodPW8wI3GUCIvaevZrTiMnRWyGaFzK2az4pp98I33m7XBfCcFS7tNDaxQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/3Jgi4pgH2HvLwvCdOcAti9OsdNSF9oNTLcUuH0VftJO2QTZYC-lK1VTvXfzuoPCzLxt6g0rUpaV65EOuFfyz2Gso0jZRq6XUr7VcuA=s168',
                    title : 'collect-1',
                    type : false // check varify or not 
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/eStsV4pkaYTEQ-bAj72Fd1uk8Qmgor9DTCEPL_NVOsCKfhGeMhtNrLDylh2UEqetgrOaElChVVkrlwMzPM21YwNgh0qgLXK05t-rVQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/pPBK-0eIDUE-SulwRmXO_bNZroKi-W3JDQvGLcLT4pV2Y1W3cc991jeqAhMwcTn-jvYpqPdPruWR4lO30Q3u23ZkjQsvwgT579qajUA=s168',
                    title : 'collect-2',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/06d02f1cc2c094c560fc08f559b5d337.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/40c9c96028894bd95ba5385aa3561c21.png',
                    title : 'collect-3',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/f7b1d13f8b441a335351d8bfa167aec1.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/8e9de4b842a48389265a3a3923416ee4.png',
                    title : 'collect-4',
                    type : false
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/PvNYA-gFaGimyeSppnGbFRZsItaSKy3ngi2gfQIrpdo19W3Vb0jGC9H6wCMJawOcpTym9fyyQ00-o87KU_SWNNPeOFAjujvWKBZRSfU=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/UdWcZMYItLakIAufZ7pB_tmRBYnR0HczztfQNL2fzR-nA3vHR6vWjPIo0RsFLAl-O3eS-vCbD-L4dIv7wn57nkCt30Zi9IZkRED81w=s168',
                    title : 'collect-5',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/0QufOBoZe7lmjMzMZyFQbf81-IHDlzzI5KRR6lOzg1vAiodPW8wI3GUCIvaevZrTiMnRWyGaFzK2az4pp98I33m7XBfCcFS7tNDaxQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/3Jgi4pgH2HvLwvCdOcAti9OsdNSF9oNTLcUuH0VftJO2QTZYC-lK1VTvXfzuoPCzLxt6g0rUpaV65EOuFfyz2Gso0jZRq6XUr7VcuA=s168',
                    title : 'collect-6',
                    type : false // check varify or not 
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/eStsV4pkaYTEQ-bAj72Fd1uk8Qmgor9DTCEPL_NVOsCKfhGeMhtNrLDylh2UEqetgrOaElChVVkrlwMzPM21YwNgh0qgLXK05t-rVQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/pPBK-0eIDUE-SulwRmXO_bNZroKi-W3JDQvGLcLT4pV2Y1W3cc991jeqAhMwcTn-jvYpqPdPruWR4lO30Q3u23ZkjQsvwgT579qajUA=s168',
                    title : 'collect-7',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/06d02f1cc2c094c560fc08f559b5d337.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/40c9c96028894bd95ba5385aa3561c21.png',
                    title : 'collect-8',
                    type : true
                },
            ]
        }
    },
    components : { CollectionGridList }
}
</script>
<style scoped>
    .section-img {
        max-width: 100%;
    }
</style>