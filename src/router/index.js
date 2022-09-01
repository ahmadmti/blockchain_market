import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('../components/Navigation.vue'),
        children: [
            {
                path: '/',
                name: 'home',                                           // home or first page is show there
                component: HomeView
            },
            {
                path: '/nft-list',
                name: 'nft-list',                                       // get the list of all NFT
                component: () => import('../views/nft/NFTList.vue')
            },
            {
                path: '/nft/create',
                name: 'nft-create',                                       // NFT Create
                component: () => import('../views/nft/NFTCreate.vue')
            },
            {
                path: '/chain/eth-id/id',                               // get the detail of NFT
                name: 'nft-detail',
                component: () => import('../views/nft/NFTDetail.vue')
            },
            {
                path: '/category/:category',                               // get all collection of specfic type of specfic 
                name: 'collection',
                component: () => import('../views/collection/CollectionLists.vue')
            },
            {
                path: '/collection/:title',                               // get all collection of specfic type of specfic 
                name: 'collection-detail',
                component: () => import('../views/collection/CollectionDetail.vue')
            },
            {
                path: '/ranking',                               // Get All Ranking NFT in tabuler Form
                name: 'ranking',
                component: () => import('../views/stat/Ranking.vue')
            },
            {
                path: '/activity',                               // Get All Activity
                name: 'activity',
                component: () => import('../views/stat/Activity.vue')
            },
            {
                path: '/partners',                               // Resources link Partners Tab
                name: 'patners',
                component: () => import('../views/resources/partners/Partners.vue')
            },
            {
                path: '/tax',                               // Resources link Tax Tab
                name: 'tax',
                component: () => import('../views/resources/tax/Tax.vue')
            },
            // {
            //     path: '/blogs',                               // Resources link Partners Tab
            //     name: 'blogs',
            //     component: () => import('../views/resources/blogs/Blogs.vue')
            // },
            // {
            //     path: '/blog/:title',                               // Resources link Partners Tab
            //     name: 'blogs-detail',
            //     component: () => import('../views/resources/blogs/BlogDetail.vue')
            // },
            {
                path: '/news-latter',                               // Resources link Partners Tab
                name: 'news-latter',
                component: () => import('../views/resources/news-latter/NewsLatter.vue')
            },
            {
                path: '/login',                               // Login
                name: 'login',
                component: () => import('../views/user/Login.vue')
            },
            {
                path: '/user/account',                               // After Login Shows Multiple Type of list of NFT Tabs
                name: 'user-account',
                component: () => import('../views/user/UserNFTTabs.vue')
            },
            {
                path: '/user/collection',                               // After Login Shows Multiple Type of list of NFT Tabs
                name: 'user-collection',
                component: () => import('../views/user/UserCollectionList.vue')
            },
            {
                path: '/create/collection',                               // Create Collection only for Logged user
                name: 'create-collection',
                component: () => import('../views/collection/CreateCollection.vue')
            },
        
        ],
  
    },
    {
        path: '/blog',
        name: 'blog-menu',
        component: () => import('../components/BlogNavigation.vue'),
        children: [
            {
                path: 'list',                               // Resources link Partners Tab
                name: 'blogs',
                component: () => import('../views/resources/blogs/Blogs.vue')
            },
            {
                path: 'guide',                               // Resources link Partners Tab
                name: 'guide',
                component: () => import('../views/resources/blogs/BlogGuide.vue')
            },
            {
                path: 'guest-post',                               // Resources link Partners Tab
                name: 'guest-post',
                component: () => import('../views/resources/blogs/BlogGuestPost.vue')
            },
            {
                path: 'spotlight',                               // Resources link Partners Tab
                name: 'spotlight',
                component: () => import('../views/resources/blogs/SpotLight.vue')
            },
            {
                path: 'safety',                               // Resources link Partners Tab
                name: 'spot-light',
                component: () => import('../views/resources/blogs/Safety&Security.vue')
            },
            {
                path: 'announcements',                               // Resources link Partners Tab
                name: 'announcements',
                component: () => import('../views/resources/blogs/Announcements.vue')
            },
            {
                path: 'detail/:title',                               // Resources link Partners Tab
                name: 'blogs-detail',
                component: () => import('../views/resources/blogs/BlogDetail.vue')
            },
        ],


    }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
