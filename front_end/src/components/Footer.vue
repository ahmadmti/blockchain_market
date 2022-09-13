<template>
    <div class="dark-blue">
        <div class="container">
            <div class="row pt-3">

                <div class="col-md-6">
                    <h2 class="text-white">
                        Stay in the loop
                    </h2>
                    <p  class="text-white">
                        Join our mailing list to stay in the loop with our newest 
                        feature releases, NFT drops, and tips and tricks for navigating OpenSea.
                    </p>
                    <form>
                        <div class="mb-3">
                            <input type="email" placeholder="your email address" class="form-control w-75 d-inline-block" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <button type="button" class="btn btn-primary py-2 px-4 m-1">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <h2 class="text-white ps-3">
                        Join the community
                    </h2>
                    <div>
                        <a href="#" @click="changeRoute(social_link.link)" class="btn btn-primary jade-blue fs-2 m-2" v-for="social_link in social_links" :key="social_link">
                            <i :class="social_link.icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <hr class="text-white">

                <div class="col-md-4">
                    <img src="https://opensea.io/static/images/logos/opensea.svg" width="40" height="40" alt="logo">
                    <h2 class="text-white">
                        OpenSea
                    </h2>
                    <p class="text-white">
                        {{ description }}
                    </p>
                </div>
                <div class="col-md-2">
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> Marketplace </b> 
                        </li>
                        <li class="list-group-item bg-transparent border-0" v-for="curreny in currenies" :key="curreny">
                            <router-link :to="curreny.link" class="text-decoration-none text-white">
                                {{ curreny.title  }}
                            </router-link>
                        </li>
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> Admin </b> 
                        </li>
                        <li class="list-group-item bg-transparent border-0">
                            <router-link to="/admin" class="text-decoration-none text-white">
                                Login
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> My Account </b> 
                        </li>
                        <li class="list-group-item bg-transparent border-0" v-for="account in my_accounts" :key="account">
                            <router-link :to="account.link" class="text-decoration-none text-white">
                                {{ account.title  }}
                            </router-link>
                        </li>
                    </ul> <br />
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> Stat </b> 
                        </li>
                        <li class="list-group-item bg-transparent border-0" v-for="stat in statics" :key="stat">
                            <router-link :to="stat.link" class="text-decoration-none text-white">
                                {{ stat.title  }}
                            </router-link>
                        </li>
                    </ul>

                </div>
                <div class="col-md-2">
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> Reources </b> 
                        </li>
                         <li class="list-group-item bg-transparent border-0" v-for="resource in resources" :key="resource">
                            <router-link :to="resource.link" class="text-decoration-none text-white">
                                {{ resource.title  }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul class="list-group">
                        <li class="list-group-item bg-transparent border-0">
                            <b class="text-white"> Company </b> 
                        </li>
                        <li class="list-group-item bg-transparent border-0" v-for="company in companies" :key="company">
                            <router-link :to="company.link" class="text-decoration-none text-white">
                                {{ company.title  }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="text-white" />
            <div class="pb-3">
                <span class="text-start text-white"> <!-- Copy right section  -->
                    © 2018 - 2022 Ozone Networks, Inc
                </span>
                <span class="text-end text-white"> <!-- Copy right section  -->
                    Privacy Policy Terms of Service
                </span>
            </div>

        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin' ;
export default {
    name : 'Footer',
    data() {
        return {
            description : `The world first and largest digital marketplace for crypto collectibles and
                        non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.`,
            social_links : [
                {
                    link : '/www.google.com',
                    icon : 'fa fa-twitter'
                },
                {
                    link : '/www.google.com',
                    icon : 'fa fa-instagram'
                },
                {
                    link : '/www.google.com',
                    icon : 'fa fa-reddit-alien'
                },
                {
                    link : '/www.google.com',
                    icon : 'fa fa-youtube'
                },
                {
                    link : '/www.google.com',
                    icon : 'fa fa-envelope'
                },
            ],
            currenies: [
                {
                    title: "All NFTs",
                    link: "/nft-list",
                    icon: "fa fa-paint-brush"
                },
                {
                    title: "Solana NFT",
                    link: "/category/solana",
                    icon: "fa fa-pinterest-square"
                },
                {
                    title: "Art ",
                    link: "/category/art",
                    icon: "fa fa-paint-brush"
                },
                {
                    title: "Collectible",
                    link: "/category/collectible",
                    icon: "fa fa-pinterest-square"
                },
                {
                    title: "Domain",
                    link: "/category/domain",
                    icon: "fa fa-paint-brush"
                }
            ],
            my_accounts : [
                {
                    link : '/setting',
                    title : 'Profile'
                },
                {
                    link : '/user/account',
                    title : 'Favorite'
                },
                {
                    link : '/user/collection',
                    title : 'My Collections'
                },
                {
                    link : '/setting',
                    title : 'Setting'
                },
            ],
            statics : [
                {
                    link : '/ranking',
                    title : 'Ranking'
                },
                {
                    link : '/activity',
                    title : 'Activity'
                },
            ],
            resources : [
                {
                    link : '/help',
                    title : 'Help Center'
                },
                {
                    link : '/partners',
                    title : 'Partner'
                },
                {
                    link : '/',
                    title : 'GAS-Fee Marketplace'
                },
                {
                    link : '/tax',
                    title : 'Tax'
                },
                {
                    link : '/blog/list',
                    title : 'Blogs'
                },
            ],
            companies : [
                {
                    link : '/google.com',
                    title : 'About'
                },
                    {
                    link : '/google.com',
                    title : 'Career'
                },
                    {
                    link : '/google.com',
                    title : 'Venture'
                },
                    {
                    link : '/google.com',
                    title : 'Grants'
                },
            ]
        }
    },
    mixins : [ RouteMixin]
}
</script>