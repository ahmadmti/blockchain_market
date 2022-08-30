<template>
    <div class="row my-3 ">
        <div class="col-md-4" v-for="item in collections" :key="item">
            <a href="#" @click="changeRoute('/collection/'+item.title)" >
                <figure class="position-relative">
                    <img :src="item.url" class="card-img-top rounded" alt="" />
                    <div class="bg-light w-50 rounded m-2 p-2 position-absolute bottom-0  start-25 profile-icon">
                        <img :src="item.profile_icon" alt="" class="rounded" width="50" height="50" />

                        <span class="text-end float-end rounded p-1 mt-3 text-blue jade-blue text-white" :class="item.type ? 'jade-blue' : 'bg-danger' "> {{ item.title }} </span>
                    </div>
                </figure>
            </a>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'CollectionGridList',
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
    mixins : [ RouteMixin ]
}
</script>
<style scoped>
    .profile-icon {
        bottom: -25% !important;
    }
</style>