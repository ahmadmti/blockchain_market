<template>
  <div class="container-fluid">
    <div class="row">
      <div class="position-relative">
        <img
          class="img-fluid"
          src="https://lh3.googleusercontent.com/jf0gvDCFYHwjFSP46immi5ulPb1yzaPARegOJIbi-w4-5JDHpYoFMX7gMQttSh5za_cGceRq9zYViJ7fWgYLRH1YNLNQoebl3-uE=h600"
          alt
        />
        <div
          class="mb-3 w-25 position-absolute bottom-0 start-0 set-profile-image p-2 bg-light rounded"
        >
          <img
            class="rounded"
            src="https://lh3.googleusercontent.com/MGcmQRCEiTuP8PxyJaCfCTZ1kE2q9kOOqicJrQca0KbqgSRh7cRxLksFSEyqjCJfuBrz0QDS_na9O2yS2XGFW761PEGyYb5kaJIInlE=s168"
            alt
            srcset
          />
        </div>
      </div>
      <!-- It's Collection Name -->
      <span class="pt-3">
        <span class="text-uppercase ps-5 fs-5 fw-bold">
          BEEPLE: EVERYDAYS - THE 2020 COLLECTION
          <i class="fa fa-check" aria-hidden="true"></i>
        </span>
        <span class="text-end float-end">
          <div class="btn-group" role="group" aria-label="Basic example">
            <SocialLink :social_links="social_links" />
          </div>
        </span>
      </span>

      <!-- Author Name -->
      <span>
        <p class="ps-5 fs-6">
          By
          <b>Owais Javaid</b>
          <i class="fa fa-check" aria-hidden="true"></i>
        </p>
      </span>
      <p class="ps-5 w-75">{{ description }}</p>

      <Specfication :nft_titles="nft_titles" />

      <div class="px-5">
        <ul class="nav nav-pills mb-3 border-bottom border-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
                class="nav-link bg-transparent text-muted fw-bold active"
                id="aria-controls-tab"
                data-bs-toggle="pill"
                data-bs-target="#items"
                type="button"
                role="tab"
                aria-controls="aria-controls"
                aria-selected="true"
            >Items</button>
          </li>
          <li class="nav-item" role="presentation">
            <button
                class="nav-link bg-transparent text-muted fw-bold"
                id="activity-tab"
                data-bs-toggle="pill"
                data-bs-target="#activity"
                type="button"
                role="tab"
                aria-controls="activity"
                aria-selected="false"
            >Activity</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="items"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="row">
                <div class="col-md-3">
                    <LeftFilterCollection />
                </div>
                <div class="col-md-9">
                    <NFTSetGridFilterCollection />
                    Update {{ time  }} ago
                    <GetNFTListByCollection :items="items" />
                </div>
            </div>
          </div>
          <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
            <div class="row">
                <div class="col-md-3">
                    <LeftSideBar />
                </div>
                <div class="col-md-9">
                    <SaleHistiryBySpecficCollection />
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialLink from "@/components/social/SocialLink.vue";
import Specfication from "@/components/collection/Specfication.vue";
import NFTSetGridFilterCollection from "@/components/collection/NFTSetGridFilterCollection.vue";
import LeftFilterCollection from "@/components/collection/LeftFilterCollection.vue";
import BeforeUpdated from '@/mixin/BeforeUpdated';
import GetNFTListByCollection from "@/components/nft/GetNFTListByCollection.vue";
import LeftSideBar from '@/components/activity/LeftSidebar.vue';
import SaleHistiryBySpecficCollection from '@/components/collection/SaleHistiryBySpecficCollection.vue';

export default {
  name: "CollectionDetail",
  data() {
    return {
      social_links: [
        {
          link: "google.com",
          icon: "fa fa-twitter"
        },
        {
          link: "google.com",
          icon: "fa fa-facebook"
        },
        {
          link: "google.com",
          icon: "fa fa-instagram"
        }
      ],
      nft_titles: [
        {
          url: "www.google",
          amount: "1.1K",
          title: "Items"
        },
        {
          url: "www.google",
          amount: "675",
          title: "Onwer"
        },
        {
          url: "www.google",
          amount: "1.9K",
          title: "Total Volume"
        },
        {
          url: "www.google",
          amount: " --- ",
          title: "floor price"
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
        }
      ],
      description: `Beeple is Mike Winkelmann, a graphic designer from Charleston, SC, USA who does a variety of digital artwork including short films, Creative Commons VJ loops, everydays and VR / AR work. He has done work for Apple, Space X, Nike, Coca-Cola, Adobe, Pepsi, Samsung and many more.`
    };
  },
  components: {
    SocialLink,
    Specfication,
    LeftFilterCollection,
    NFTSetGridFilterCollection,
    GetNFTListByCollection,
    LeftSideBar,
    SaleHistiryBySpecficCollection
  },
  mixins : [ BeforeUpdated ]
};
</script>
<style scoped>
.set-profile-image {
  margin-left: 100px !important;
}
</style>