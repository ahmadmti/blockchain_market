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
                        <NFTGridList :lists="lists" />
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
  data() {
    return {
        lists : [
            {
                id  :1,
                link : 'www.goolge.com',
                url : 'https://lh3.googleusercontent.com/ctlaOTtIeE3N8ozeVEs1ZlZgIRaVYpiWPe-PQMEqTOw6qhtsvA2Q52O1Pq5DLWS6d0WQPRHwe095HdXH6SAdYZdeEUCvbpZ4w5tY2Q=w600',
                title : 'Bored Ape Eighties'
            },
            {
                id  :1,
                link : 'www.goolge.com',
                url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                title : 'Asuki'
            },
            {
                id  :1,
                link : 'www.goolge.com',
                url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                title : 'Robotic Ape'
            },
            {
                id  :1,
                link : 'www.goolge.com',
                url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                title : 'Asuki'
            },
        ]
    }
  },
  components : { NFTSetGridFilter, NFTFiler, NFTGridList}
}
</script>