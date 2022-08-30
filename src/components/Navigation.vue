<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" @click="changeRoute('/')">
          <img
            src="https://opensea.io/static/images/logos/opensea.svg"
            width="40"
            height="40"
            alt="logo"
          />
          <b>OpenSea</b>
        </a>
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
            style="--bs-scroll-height: 100px;"
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
                  <button @click="changeRoute('/nft-list')" class="dropdown-item border-bottom py-2"> <i class="fa fa-paint-brush" aria-hidden="true"></i> All NFT's </button>
                </li>
                <li v-for="explore in explores" :key="explore">
                  <button @click="changeRoute('/category/'+explore.link)" class="dropdown-item border-bottom py-2"> <i :class="explore.icon" aria-hidden="true"></i> {{ explore.title }} </button>

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
                  <a class="dropdown-item border-bottom py-2" href="#" @click="changeRoute('/'+rank.link)">{{ rank.title }}</a>
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
                  <a
                    class="dropdown-item py-2 border-bottom"
                    href="#"
                    @click="changeRoute('/'+ resource.link)"
                  >{{ resource.title }}</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a
                    class="nav-link d-inline"
                    v-for="social in social_links"
                    :key="social"
                    href="#"
                    @click="changeRoute('/' + social.link)"
                  >
                    <i :class="social.title" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#" @click="changeRoute('/login')">Create</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- Footer  -->
      <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import Footer from './Footer.vue';
import RouteMixin from '@/mixin/RouteMixin';
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
          link: "activity",
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
          link: "blogs"
        },
        {
          title: "NewsLatter",
          link: "news-latter"
        },
        {
          title: "Help Center",
          link: "help"
        },
        {
          title: "Platform Status",
          link: "help"
        },
        {
          title: "Docs",
          link: "help"
        }
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
      ]
    };
  },
  components : { Footer },
  mixins : [RouteMixin ]
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