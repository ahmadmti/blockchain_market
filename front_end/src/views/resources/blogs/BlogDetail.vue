<template>
    <div class="section-bg-color py-5 ">
        <div class="container border bg-white rounded">
            <div class="row ">
                <h1 class="fw-bold pt-5 w-75 mx-auto d-block">
                    {{ $route.params.title.replaceAll("-"," ") }}
                </h1>
                <div class="w-75 mx-auto d-block">
                    <span class="mx-2">
                        August 9, 2022
                    </span>
                    <span class="text-muted mx-2">
                        By Anne Fauvre-Willis
                    </span>
                    <span class="mx-2">
                        <button class="btn btn-primary bg-transparent text-primary border-0">
                            Announcement
                        </button>
                    </span>
                </div>
                <div class="w-75 mx-auto d-block">
                    <div class="card">
                        <img src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg" class="img-fluid">
                    </div>
                    <div class="card-body lh-lg py-5" v-html="description"></div> 
                    <hr />
                    <div class="card border-0">
                        <figure>
                            <img class="rounded-circle img-fluid" src="https://secure.gravatar.com/avatar/496594bff5119285ffe5172018394d24?s=96&d=mm&r=g" alt="">
                        </figure>
                        <h4 class="text-muted pb-3">
                            Anne Fauvre-Willis
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <h1 class="text-center fw-bold"> Other Similer Post</h1>
                <BlogsCard :blogs="blogs" />
            </div>
        </div>
    </div>
</template>
<script>
import BlogsCard from '@/components/blog/BlogsCard.vue';

export default {
    name : 'BlogDetail',
    data() {
        return {
            description : `As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to our verification/badging process and an automated system to help identify, remove,
            and prevent instances of copymints (copies of authentic NFT content) being visible on OpenSea. Our work here is just starting, and we're pleased to share some exciting progress based on the last few months of learnings.
            First, on account verification and collection badging: since launching our new system in May, we've reviewed and responded to 90% of verification applications in one day and 99% of applications in seven days.
            By adding more badged collections, this means that we have a larger arsenal of authentic content from
            which to detect copymints.Starting next week, we're expanding account verification and collection badging even further: any account with more than 75 ETH
            of collection volume (down from 100 ETH in May) will be invited to apply for verification. We hope to continue to drop this threshold over time, until any
            authentic creator's account can be verified. Learn more about verification eligibility here.`,
            blogs : [
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '1 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '2 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '3 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
            ]

        }
    },
    components : { BlogsCard }
}
</script>