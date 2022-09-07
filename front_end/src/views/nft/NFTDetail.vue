<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-5">
        <div class="card">
          <h5 class="card-header">
            <span>
              <img
                src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                height="20"
                width="20"
                alt="eth"
              />
            </span>
            <span class="float-end text-end">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </span>
          </h5>

          <div class="card-body">
            <p class="card-text">
              <figure>
                <img
                  class="card-img-top"
                  src="https://lh3.googleusercontent.com/78dxQyq4XM5PYZnS4Nyplt61dLSa7KwXYhF6QU5cRGg7ZNMaOIP05HR6yf5-PBV-RNAK3w2fiSTvFCkki1j1spY6OdL0GY02z3mE_g=w600"
                  alt="Disco Aps"
                />
              </figure>
            </p>
          </div>
        </div>   <!-- End Card -->

        <ul class="list-group my-4">
            <li class="list-group-item fw-bold"> <i class="fa fa-bars" aria-hidden="true"></i> Description</li>
            <li class="list-group-item">By <span class="fw-bold"> 3786C2 </span></li>
            <li class="list-group-item">
                <NFTProperties />
            </li>
            <li class="list-group-item">
              <NFTAbout />
            </li>
            <li class="list-group-item">
              <NFTUserDetail />
            </li>
        </ul>

      </div>
      <div class="col-md-7">
        <a
          href="#"
          class="text-decoration-none text-secondary fw-bold"
        >Crazy Apes Social Club : Collection</a>

        <SocialLink :social_links="social_links" />
        <br />
        <span class="pt-5">
          <span class="text-secondary">Owned By</span>
          <a href="#" class="text-primary text-decoration-none fw-bold">Awais javaid</a>

          <span class="ps-5 fs-5">
            1
            <span class="text-secondary">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
          </span>
        </span>
        <div class="mt-3">
          <SaleEndTime />
        </div>

        <div class="mt-3">
          <NFTPriceHisotry />
        </div>

        <div class="mt-3">
          <NFTSelfListing />
        </div>

        <div class="mt-3">
          <NFTOfferList />
        </div>
      </div>
    </div> <!-- End Row -->
    <div class="row mb-3">
      <div class="container">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <a class="btn btn-primary bg-transparent border-0 text-dark fw-bold mb-2" data-bs-toggle="collapse" href="#item_activity" role="button" aria-expanded="false" aria-controls="item_activity">
                <i class="fa fa-area-chart" aria-hidden="true"></i>  Item Activity
            </a>
              </div>
              <div>
                <NFTActivityTable />
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="container mb-3">
        <div class="card">
          <div class="card-header">
            <a class="btn btn-primary bg-transparent border-0 text-dark fw-bold mb-2" data-bs-toggle="collapse" href="#more-colllection" role="button" aria-expanded="false" aria-controls="more-colllection">
              <i class="fa fa-th" aria-hidden="true"></i> More from this Collection
            </a>
          </div>
          <div class="collapse card-body" id="more-colllection">
            <GetNFTByCollection :items="items" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import SocialLink from "@/components/social/SocialLink.vue";
import SaleEndTime from "./SaleEndTime.vue";
import NFTPriceHisotry from "./NFTPriceHisoty.vue";
import NFTSelfListing from "./NFTSelfListing.vue";
import NFTOfferList from "./NFTOfferList.vue";
import NFTProperties from  './NFTProperties.vue';
import NFTAbout from './NFTAbout.vue';
import NFTUserDetail from './NFTUserDetail.vue';
import NFTActivityTable from './NFTActivityTable.vue';
import GetNFTByCollection from '@/components/nft/GetNFTListByCollection.vue';

export default {
  name: "NFTDetail",
  data() {
    return {
        social_links : [
            {
                link : 'google.com',
                icon : 'fa fa-twitter'
            },
            {
                link : 'google.com',
                icon : 'fa fa-facebook'
            },
            {
                link : 'google.com',
                icon : 'fa fa-instagram'
            }
        ],
        items: [
            {
            link: "google.com",
            url:
                "https://lh3.googleusercontent.com/WkxqhBkSbZD2xKX4aaE85PHtVSY0ap-sqYplytVaJM6GnNjBz6rfAYptwPUCq--_rRbICspoCK3hpixNJJ-0D_beV27qfV-x1Jyn=w600",
            title: "Elite Ape",
            price: "6.94"
            },
            {
            link: "google.com",
            url:
                "https://lh3.googleusercontent.com/XilgJOSw5t31fh-WPTVFfmx6O2yjCtyOxQsdLG9TOBtXBKP9y-AWGYdaL4cdBfEeMKXHpu_OqL1VNzgNCoexEG8DFmk7nBvOYzb_Pg=w600",
            title: "Elite Ape",
            price: "80.94"
            },
            {
            link: "google.com",
            url:
                "https://lh3.googleusercontent.com/ySogYQAEBdFwlMkWB-0Mu68ivbmXk_MWzhg5ZC2W3Q2L5IpitHsaZBMRyZ429WBRRrdYvVKXRchPYRnEpWP4DeHGTZVnJ_82-FdWPA=w600",
            title: "Elite Ape",
            price: "20.94"
            },
            {
            link: "google.com",
            url:
                "https://lh3.googleusercontent.com/WgU1X0UxkAKEHZAaxhf2KSCQEB8mfM4NC74R_DxOY25mwFTY6wjfhF7UvrBsyQ2q3y7Xx5QjtAv52sOy3mkFPE_MPDILZ55RgYE7I-0=w600",
            title: "Elite Ape",
            price: "1.94"
            },
            {
            link: "google.com",
            url:
                "https://lh3.googleusercontent.com/WgU1X0UxkAKEHZAaxhf2KSCQEB8mfM4NC74R_DxOY25mwFTY6wjfhF7UvrBsyQ2q3y7Xx5QjtAv52sOy3mkFPE_MPDILZ55RgYE7I-0=w600",
            title: "Elite Ape",
            price: "1.94"
            },
        ]
    }
  },
  components: {
    SocialLink,
    SaleEndTime,
    NFTPriceHisotry,
    NFTSelfListing,
    NFTOfferList,
    NFTProperties,
    NFTAbout,
    NFTUserDetail,
    NFTActivityTable,
    GetNFTByCollection
  }
};
</script>