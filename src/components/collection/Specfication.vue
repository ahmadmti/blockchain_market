<template>
       <div class="ps-5 row w-75">
            <a v-for="nft_title in nft_titles" :key="nft_title" :href="nft_title.url" class="col-md-2 text-decoration-none">
                <b class="fs-3 text-dark">
                    {{ nft_title.amount }}
                </b>
                <p class="fs-5 text-muted">
                    {{ nft_title.title }}
                </p>
            </a>
        </div>
</template>
<script>
export default {
    name : 'Specfication',
    props : {
        nft_titles : Array
    }
}
</script>