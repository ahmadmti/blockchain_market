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
                name: 'home',                                           // First Page Like Home Page 
                component: HomeView
            },
            {
                path: '/nft-list',
                name: 'nft-list',                                       // Show the List Of NFT
                component: () => import('../views/nft/NFTList.vue')
            },
            {
                path: '/nft/create',
                name: 'nft-create',                                     // NFT Create Page
                component: () => import('../views/nft/NFTCreate.vue')
            },
            {
                path: '/chain/eth-id/id',
                name: 'nft-detail',                                     // NFT Detail
                component: () => import('../views/nft/NFTDetail.vue')
            },
            {
                path: '/category/:category',
                name: 'collection',                                     // Get Specfic Collection Type
                component: () => import('../views/collection/CollectionLists.vue')
            },
            {
                path: '/collection/:title', 
                name: 'collection-detail',                              // Get The Detail Of Specfic Collection Type
                component: () => import('../views/collection/CollectionDetail.vue')
            },
            {
                path: '/create/collection', 
                name: 'collection-create',                              // Create Collection Form
                component: () => import('../views/collection/CreateCollection.vue')
            },
            {
                path: '/ranking',  
                name: 'ranking',                                        // Ranking Page Navbar
                component: () => import('../views/stat/Ranking.vue')
            },
            {
                path: '/activity',
                name: 'activity',                                       // Activity Page Navbar
                component: () => import('../views/stat/Activity.vue')
            },
            {
                path: '/partners',
                name: 'patners',                                        // Partner Page Navbar
                component: () => import('../views/resources/partners/Partners.vue')
            },
            {
                path: '/tax',                            
                name: 'tax',                                            // Tax Page Navbar
                component: () => import('../views/resources/tax/Tax.vue')
            },
            {
                path: '/news-latter', 
                name: 'news-latter',                                    // NewsLatter Navbar
                component: () => import('../views/resources/news-latter/NewsLatter.vue')
            },
            {
                path: '/login',
                name: 'login',                                          // Login Page
                component: () => import('../views/user/Login.vue')
            },
            {
                path: '/user/account',  
                name: 'user-account',                                   // User Account Show Multiple Type Of Tabs
                component: () => import('../views/user/UserNFTTabs.vue')
            },
            {
                path: '/user/collection',                               // User Created Collection
                name: 'user-collection',
                component: () => import('../views/user/UserCollectionList.vue')
            },
            {
                path: '/help', 
                name: 'help',                                           // Help Page Navbar
                component: () => import('../views/resources/help/HelpView.vue')
            },
            {
                path: '/help/:title',     
                name: 'help-faq',                                       // Get Specfic Type Of Help Type
                component: () => import('../views/resources/help/HelpFAQ.vue')
            },
            {
                path: '/article/:title', 
                name: 'help-article',                                   // Get Detail Of Specfic Article Under Help
                component: () => import('../views/resources/help/Article.vue')
            },
            {
                path: '/setting', 
                name: 'setting',                                        // Setting Module Edit Profile, Notification, Account
                component: () => import('../views/settings/SettingView.vue')
            },
        ],
    },
    {
        path: '/blog',
        name: 'blog-menu',
        component: () => import('../components/BlogNavigation.vue'),    // Blog Navigation
        children: [
            {
                path: 'list', 
                name: 'blogs',                                          // Blog List
                component: () => import('../views/resources/blogs/Blogs.vue')
            },
            {
                path: ':guide',                                          
                name: 'guide',                                          // Get 5 Types of Blog Enlist in Blog Navbar
                component: () => import('../views/resources/blogs/BlogGuide.vue')
            },
            {
                path: 'detail/:title', 
                name: 'blogs-detail',                                   // Blog Detail Page
                component: () => import('../views/resources/blogs/BlogDetail.vue')
            },
        ],
    },
    {
        path: '/admin',
        name: 'admin-nav',
        component: () => import('../components/admin/setting/AdminNavigation.vue'),
        children: [
            {
    
                path: '', 
                name: '',                                     
                component: () => import('../components/admin/auth/AdminLogin.vue')
            },
            {
                path: 'blogs',
                name: 'admin/blogs',                                         
                component: () => import('../components/admin/blog/AdminBlogs.vue')
            },
            {
                path: 'blog/create',
                name: 'blog/create',                                         
                component: () => import('../components/admin/blog/Create.vue')
            },
            {
                path: 'faqs',
                name: 'admin/faqs',                                         
                component: () => import('../components/admin/faqs/AdminFaqs.vue')
            },
            {
                path: 'faq/create',
                name: 'faqs/create',                                         
                component: () => import('../components/admin/faqs/Create.vue')
            },
            {
                path: 'categories',
                name: 'category',                                         
                component: () => import('../components/admin/category/CategoryList.vue')
            },
            {
                path: 'category/create',
                name: 'category/create',                                         
                component: () => import('../components/admin/category/CategoryCreate.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                component: () => import('../components/admin/auth/AdminLogin.vue')
            },
        ],
    },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
