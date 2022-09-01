<template>
    <div>
        <div class="container my-5">
            <h2 class="text-center mb-5 fw-bold">
                Announcement
            </h2>
            <BlogsCard :blogs="blogs" />
        </div>
    </div>
</template>
<script>
import BlogsCard from '@/components/blog/BlogsCard.vue';
export default {
    name : 'Blogs',
    data() {
        return {
             slides: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.'
                },
                {
                    title: 'Slide #3',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #4',
                    content: 'Slide 2 content.'
                },
                {
                    title: 'Slide #5',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #6',
                    content: 'Slide 2 content.'
                },
                {
                    title: 'Slide #7',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #8',
                    content: 'Slide 2 content.'
                },
                {
                    title: 'Slide #9',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #10',
                    content: 'Slide 2 content.'
                },
                {
                    title: 'Slide #11',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #12',
                    content: 'Slide 2 content.'
                },
            ],
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
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '4 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '5 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
                {
                    url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/05/00Lighthouse-Header-1536x1024.jpg',
                    type : 'Announcement',
                    title : '6 An Update on Verification and Copymint Prevention',
                    date : 'August 9, 2022',
                    text : 'As the NFT ecosystem evolves, OpenSea remains committed to improving trust and authenticity in the space. In May, we announced improvements to...'
                },
            ]
        }
    },
    components : { BlogsCard }
}
</script>