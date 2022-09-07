<template>
    <div class="container-fluid">
        <div class="row">
            <h1 class="p-5 fw-bold">
                Collection Stat
            </h1>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="top-tab" data-bs-toggle="tab" data-bs-target="#top" type="button" role="tab" aria-controls="top" aria-selected="true">
                        Top
                    </button>
                    <button class="nav-link" id="trending-tab" data-bs-toggle="tab" data-bs-target="#trending" type="button" role="tab" aria-controls="trending" aria-selected="false">
                        Trending
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active text-secondary py-5" id="top" role="tabpanel" aria-labelledby="top-tab" tabindex="0">
                    <SaleHistiryBySpecficCollection />
                </div>
                <div class="tab-pane fade text-secondary py-5" id="trending" role="tabpanel" aria-labelledby="trending-tab" tabindex="0">
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
</template>
<script>
import SaleHistiryBySpecficCollection from '@/components/collection/SaleHistiryBySpecficCollection.vue';
import LeftSideBar from '@/components/activity/LeftSidebar.vue';

export default {
    name : 'TopRankNFT',
    components : { SaleHistiryBySpecficCollection, LeftSideBar}
}
</script>