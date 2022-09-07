<template>
    <div>
        <div class="container">
            <h1 class="py-3">
                My Collections
            </h1>
            <p class="text-secondary">
                Create, curate, and manage collections of unique NFTs to share and sell.
            </p>
            <p>
                <button class="btn btn-primary mx-2" @click="changeRoute('/create/collection')">
                    Create Collection 
                </button>
                <button class="btn btn-secondary">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
            </p>

            <CollectionGridList :collections="collections" />
        </div>
    </div>
</template>
<script>
import CollectionGridList from '@/components/collection/CollectionGridList.vue';
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'UserCollectionList',
    data() {
        return {
            collections : [
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/0QufOBoZe7lmjMzMZyFQbf81-IHDlzzI5KRR6lOzg1vAiodPW8wI3GUCIvaevZrTiMnRWyGaFzK2az4pp98I33m7XBfCcFS7tNDaxQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/3Jgi4pgH2HvLwvCdOcAti9OsdNSF9oNTLcUuH0VftJO2QTZYC-lK1VTvXfzuoPCzLxt6g0rUpaV65EOuFfyz2Gso0jZRq6XUr7VcuA=s168',
                    title : 'collect',
                    type : false // check varify or not 
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/eStsV4pkaYTEQ-bAj72Fd1uk8Qmgor9DTCEPL_NVOsCKfhGeMhtNrLDylh2UEqetgrOaElChVVkrlwMzPM21YwNgh0qgLXK05t-rVQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/pPBK-0eIDUE-SulwRmXO_bNZroKi-W3JDQvGLcLT4pV2Y1W3cc991jeqAhMwcTn-jvYpqPdPruWR4lO30Q3u23ZkjQsvwgT579qajUA=s168',
                    title : 'collect',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/06d02f1cc2c094c560fc08f559b5d337.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/40c9c96028894bd95ba5385aa3561c21.png',
                    title : 'collect',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/f7b1d13f8b441a335351d8bfa167aec1.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/8e9de4b842a48389265a3a3923416ee4.png',
                    title : 'collect',
                    type : false
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/PvNYA-gFaGimyeSppnGbFRZsItaSKy3ngi2gfQIrpdo19W3Vb0jGC9H6wCMJawOcpTym9fyyQ00-o87KU_SWNNPeOFAjujvWKBZRSfU=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/UdWcZMYItLakIAufZ7pB_tmRBYnR0HczztfQNL2fzR-nA3vHR6vWjPIo0RsFLAl-O3eS-vCbD-L4dIv7wn57nkCt30Zi9IZkRED81w=s168',
                    title : 'collect',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/0QufOBoZe7lmjMzMZyFQbf81-IHDlzzI5KRR6lOzg1vAiodPW8wI3GUCIvaevZrTiMnRWyGaFzK2az4pp98I33m7XBfCcFS7tNDaxQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/3Jgi4pgH2HvLwvCdOcAti9OsdNSF9oNTLcUuH0VftJO2QTZYC-lK1VTvXfzuoPCzLxt6g0rUpaV65EOuFfyz2Gso0jZRq6XUr7VcuA=s168',
                    title : 'collect',
                    type : false // check varify or not 
                },
                {
                    link : 'www.google.com',
                    url : 'https://lh3.googleusercontent.com/eStsV4pkaYTEQ-bAj72Fd1uk8Qmgor9DTCEPL_NVOsCKfhGeMhtNrLDylh2UEqetgrOaElChVVkrlwMzPM21YwNgh0qgLXK05t-rVQ=h600',
                    profile_icon : 'https://lh3.googleusercontent.com/pPBK-0eIDUE-SulwRmXO_bNZroKi-W3JDQvGLcLT4pV2Y1W3cc991jeqAhMwcTn-jvYpqPdPruWR4lO30Q3u23ZkjQsvwgT579qajUA=s168',
                    title : 'collect',
                    type : true
                },
                {
                    link : 'www.google.com',
                    url : 'https://i.seadn.io/gcs/files/06d02f1cc2c094c560fc08f559b5d337.png?auto=format&dpr=1&h=300',
                    profile_icon : 'https://openseauserdata.com/files/40c9c96028894bd95ba5385aa3561c21.png',
                    title : 'collect',
                    type : true
                },
            ]
        }
    },
    components : { CollectionGridList },
    mixins : [ RouteMixin ]
}
</script>