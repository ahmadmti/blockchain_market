<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
        <img
            src="https://opensea.io/static/images/logos/opensea.svg"
            width="40"
            height="40"
            alt="logo"
          />
          <b>OpenSea</b></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <form action class="w-100 serach-form">
            <div class="input-group">
              <span class="input-group-append">
                <button
                  class="search-btn btn btn-outline-secondary light-gray-color bg-white rounded-start rounded-0 ms-n5 border-end-0"
                  type="button"
                >
                  <i class="fa fa-search"></i>
                </button>
              </span>
              <input
                class="form-control border"
                type="text"
                placeholder="Search items, collection, and accounts"
                aria-label="Search"
              />
            </div>
          </form>

          <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0 navigation-bar"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Explore</a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/nft-list" class="dropdown-item border-bottom py-2">All NFT</router-link>
                </li>
                <li v-for="explore in explores" :key="explore">
                  <router-link
                    :to="'/category/' + explore.link"
                    class="dropdown-item border-bottom py-2"
                  >{{ explore.title }}</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Stat</a>
              <ul class="dropdown-menu">
                <li v-for="rank in ranks" :key="rank">
                  <router-link
                    :to="'/' + rank.link"
                    class="dropdown-item border-bottom py-2"
                  >{{ rank.title }}</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Resources</a>
              <ul class="dropdown-menu">
                <li v-for="resource in resources" :key="resource.link">
                  <router-link
                    :to="'/' + resource.link"
                    class="dropdown-item border-bottom py-2"
                  >{{ resource.title }}</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <div class="row">
                    <router-link
                    :to="'/' + social.link"
                    v-for="social in social_links"
                    :key="social"
                    class="col-md-2 mx-1 text-muted"
                    ><i :class="social.title" aria-hidden="true"></i></router-link>
                  </div>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >More</a>
              <ul class="dropdown-menu">
                <li v-for="more_link in more_links" :key="more_link">
                    <router-link :to="'/' + more_link.link" class="dropdown-item border-bottom py-2">
                        {{ more_link.title }}
                    </router-link>
                </li>
                <li>
                    <router-link to="#" @click="logout" class="dropdown-item border-bottom py-2">
                        Logout
                    </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
                <router-link :to="'/nft/create'" class="nav-link">
                    Create
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'#'" class="nav-link">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Toaster />

    <router-view />
    <!-- Footer  -->
    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Toaster from './Toaster.vue';
import apiRoutes from '@/utils/api_routes/ApiRoutes.js'
import axios from 'axios';


export default {
  name: "HelloWorld",
  data() {
    return {
      explores: [
        {
          title: "Solana NFT",
          link: "all-nft",
          icon: "fa fa-pinterest-square"
        },
        {
          title: "Art ",
          link: "art",
          icon: "fa fa-paint-brush"
        },
        {
          title: "Collectible",
          link: "collectible",
          icon: "fa fa-pinterest-square"
        },
        {
          title: "Domain",
          link: "domain",
          icon: "fa fa-paint-brush"
        }
      ],
      ranks: [
        {
          title: "Rankings",
          link: "ranking",
          icon: "fa fa-paint-brush"
        },
        {
          title: "Activity",
          link: "activity"
        }
      ],
      resources: [
        {
          title: "Partners",
          link: "partners"
        },
        {
          title: "Tax",
          link: "tax"
        },
        {
          title: "Blogs",
          link: "blog/list"
        },
        {
          title: "NewsLatter",
          link: "news-latter"
        },
        {
          title: "Help Center",
          link: "help"
        },
      ],
      social_links: [
        {
          title: "fa fa-twitter",
          link: "twitter"
        },
        {
          title: "fa fa-instagram",
          link: "instagram"
        },
        {
          title: "fa fa-reddit-alien",
          link: "reddit"
        },
        {
          title: "fa fa-youtube-play",
          link: "youtube"
        }
      ],
      more_links : [
        {
            link : 'user/account',
            title : 'Profile'
        },
        {
            link : 'user/account',
            title : 'Favorite'
        },
        {
            link : 'user/collection',
            title : 'My Collection'
        },
        {
            link : 'setting',
            title : 'Setting'
        },
        {
            link : 'login',
            title : 'Night Mode'
        },
      ]
    };
  },
  methods: {
    async logout(){
      axios.post(apiRoutes.main+apiRoutes.auth.logout)
        .then(function (response) {
          alert (response.data);
        })
        .catch(function (error) {
          alert(error);
        });
    }
  },
  components: { Footer , Toaster }
};
</script>

<style scoped>
.navigation-bar > li {
  padding-right: 1rem;
}

.light-gray-color {
  border-color: #dee2e6;
}

.form-control:focus {
  border-color: none;
}
</style>
