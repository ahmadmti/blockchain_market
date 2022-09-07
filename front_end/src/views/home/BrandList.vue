<template>
    <div class="row">
        <div class="col-md-2" v-for="brand_list in brand_lists" :key="brand_list">
            <img :src="brand_list.url" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name : 'BrandList',
    data() {
        return {
            brand_lists : [
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                },
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                },
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                },
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                },
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                },
                {
                    link : 'https://a16z.com/',
                    url : 'http://logosvg.com/wp-content/uploads/Grammarly_logo.svg'
                }
            ]
        }
    },
}
</script>