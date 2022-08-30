<template>
  <div class="row">
    <div class="col-md-3 mb-3" v-for="item in items" :key="item">
      <a href="#" @click="changeRoute('/chain/eth-id/id')" class="card text-decoration-none">
        <div class="card-body">
          <img :src="item.url" class="img-fluid set-img-max-width" />
          <span class="py-2 fw-bold text-dark">{{ item.title }}</span>
          <br />
          <span class="py-2 fw-bold text-secondary">Price {{ item.price }}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
  // Not the Base Of Specfic Collection get All NFT
  name: "GetNFTByCollection",
  props : {
    items : {
      type : Array
    }
  },
  mixins : [ RouteMixin ]
};
</script>
