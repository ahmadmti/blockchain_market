<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand border-end pe-3">
            <img src="https://opensea.io/static/images/logos/opensea.svg" width="40" height="40" alt="">
            <b>OpenSea</b>
        </router-link>
      
        <router-link to="/blog/list" class="navbar-brand">
          Blog
        </router-link>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-8">
            <li class="nav-item" v-for="link in links" :key="link">
              <router-link :to="'/blog/'+link.link" class="nav-link active text-secondary">
              {{ link.title }} 
              </router-link>
            </li>
          </ul>
          <div class="row">
              <div v-for="social_link in social_links" :key="social_link" class="col-md-3">
                <a :href="social_link.link" class="text-dark">
                  <i :class="social_link.title" class="text-secondary" aria-hidden="true"></i>
                </a>
              </div>
          </div>
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
import Footer from '@/components/Footer.vue';
export default {
  name: "BlogNavigation",
  data() {
    return {
      links :  [
        {
          link : 'guide',
          title : 'Guide'
        },
        {
          link : 'guest-post',
          title : 'Guest Post'
        },
        {
          link : 'spotlight',
          title : 'Spotlights'
        },
        {
          link : 'safety',
          title : 'Safety & Security'
        },
        {
          link : 'announcements',
          title : 'Announcements'
        },
      ],
      social_links : [
        {
          link : '/',
          title : 'fa fa-facebook'
        },
        {
          link : '/',
          title : 'fa fa-google-plus'
        },
        {
          link : '/',
          title : 'fa fa-twitter-square'
        },
        {
          link : '/',
          title : 'fa fa-instagram'
        }
      ]
    }
  },
  components : { Footer }
};
</script>