<template>
  <div class="container-fluid">
    <div class="discover-section">
      <div style="background-color : rgb(255,255,255 , .9) ;">
        <div class="container">
          <div class="row py-5">
            <div class="col-md-6 pt-4 my-2">
              <h1 class="fs-1 mb-4">
                Discover, collect, and sell <br /> extraordinary NFTs
              </h1>
              <h4 class="mb-4">
                  OpenSea is the world's first and <br /> largest NFT marketplace
              </h4>
              <button @click="changeRoute('/category/all-nft')" type="button" class="btn btn-primary py-2 px-4 me-3">Explore</button>
              <button
                type="button"
                class="btn bg-white btn-white text-primary border border-light py-2 px-4"
              >Create</button>
            </div>
            <div class="offset-md-1 col-md-5">
              <div class="card" style="width: 100% ; float:right;">
                <img
                  src="https://storage.googleapis.com/opensea-prod.appspot.com/files/black-future-collection-long-neckie-adira-by-nyla-c42aa3.gif"
                  class="rounded"
                />
                <div class="card-body">
                  Black Future Collection: Long Neckie Adira
                  <br />  by <span class="fw-bold"> Nyla Hayes </span> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="py-3">
        <center>
          Notable Drops
        </center>
      </h2>
      <HomeNFTList />
    </div>
    <div>
      <h2 class="py-3">
        <center>
            Top collections over Last 24 Hours
        </center>
      </h2>
      <TopCollectionList />

      <div class="container">
        <center>
          <button type="button" class="btn btn-primary py-2 px-4 my-3">Go to Ranking</button>
        </center>
      </div>
    </div>
    <div>
      <h2 class="py-3">
        <center>
            Trending in all Categories
        </center>
      </h2>
      <CollectionSlides />
    </div>
    <div class="section-bg-color py-5">
      <h2 class="py-3">
          <center>
              How To Buy And Sell NFT's
          </center>
        </h2>
        <HowToCreateAndSellNFT />
    </div>

    <div class="container">
      <h2 class="py-3">
          <center>
              Resources for getting started
          </center>
        </h2>
    
      <HowToSetUp />
    </div>

    <div>
      <h2 class="py-3">
          <center>
              Browse by category
          </center>
        </h2>
        <NFTCategoryList />
    </div>

    <div class="container-fluid section-bg-color">
      <div class="container">
          <h2 class="py-3">
            <center>
                Meet OpenSea
            </center>
          </h2>
          <h4> <center class="text-seconedery"> The NFT marketplace with everything for everyone </center> </h4>
          <EmbadedVideo />
          <center>
            <button type="button" class="btn btn-primary py-2 px-4 my-3">Explore the marketplace</button>
          </center>
      </div>
    </div>

    <div class="jade-blue">
      <div class="container">
          <BrandList />
      </div>
    </div>

  </div>
</template>


<script>
import HomeNFTList from './HomeNFTList.vue';
import TopCollectionList from './TopCollectionList.vue';
import CollectionSlides from './CollectionsSlides.vue';
import HowToCreateAndSellNFT from './HowToCreateAndSellNFT.vue';
import HowToSetUp from './HowToSetUp.vue';
import NFTCategoryList from './NFTCategoryList.vue';
import EmbadedVideo from './EmbadedVideo.vue';
import BrandList from './BrandList.vue';
import RouteMixin from '@/mixin/RouteMixin';

export default {
    name: "HomeView",
    components : {
        HomeNFTList,
        TopCollectionList,
        CollectionSlides,
        HowToCreateAndSellNFT,
        HowToSetUp,
        NFTCategoryList,
        EmbadedVideo,
        BrandList
    },
    mixins : [RouteMixin]
};
</script>
<style scoped>
.discover-section {
  background-image: url("https://storage.googleapis.com/opensea-prod.appspot.com/files/black-future-collection-long-neckie-adira-by-nyla-c42aa3.gif");
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>
