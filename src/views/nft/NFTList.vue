<template>
    <div>
        <div class="container-fluid">
            <!-- Show Filter Top Set Layout Show 3 or 4 of grid -->
            <NFTSetGridFilter /> 
        </div>

        <div class="container-fluid">
            <div class="container-fluid discover-container">
                <div class="row">
                    <div class="col-md-3">
                        <NFTFiler />
                    </div>
                    <div class="col-md-9">
                        <span class="text-start text-secondary">
                            Minute Counter Set Later
                        </span> 
                        <span class="text-end text-secondary">
                            722 items
                        </span>
                        <NFTGridList />
                    </div>
                </div>                
            </div>

        </div>
    </div>
</template>
<script>
import NFTSetGridFilter from '@/components/nft/NFTSetGridFilter.vue'; // Top Filter Set 3 , 4 Grid
import NFTFiler from '@/components/nft/LeftFilter.vue';
import NFTGridList from  '@/components/nft/NFTSGridList.vue';
export default {
  name : 'NFTList',
  components : { NFTSetGridFilter, NFTFiler, NFTGridList}
}
</script>