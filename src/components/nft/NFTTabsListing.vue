<template>
    <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-collected-tab" data-bs-toggle="pill" data-bs-target="#pills-collected" type="button" role="tab" aria-controls="pills-collected" aria-selected="true">Collected</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-created-tab" data-bs-toggle="pill" data-bs-target="#pills-created" type="button" role="tab" aria-controls="pills-created" aria-selected="false">Created</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-favorite-tab" data-bs-toggle="pill" data-bs-target="#pills-favorite" type="button" role="tab" aria-controls="pills-favorite" aria-selected="false">Favorited</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="activity-tab" data-bs-toggle="pill" data-bs-target="#pills-activity" type="button" role="tab" aria-controls="pills-activity" aria-selected="false">Activity</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="more-tab" data-bs-toggle="pill" data-bs-target="#pills-more" type="button" role="tab" aria-controls="pills-activity" aria-selected="false">More</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-collected" role="tabpanel" aria-labelledby="pills-collected-tab" tabindex="0">
                <NFTTabsListing />
            </div>
            <div class="tab-pane fade" id="pills-created" role="tabpanel" aria-labelledby="pills-created-tab" tabindex="0">

            </div>
            <div class="tab-pane fade" id="pills-favorite" role="tabpanel" aria-labelledby="pills-favorite-tab" tabindex="0">

            </div>
            <div class="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">

            </div>
            <div class="tab-pane fade" id="pills-more" role="tabpanel" aria-labelledby="pills-more-tab" tabindex="0">

            </div>
        </div>
    </div>
</template>
<script>
import NFTTabsListing from '@/components/nft/NFTSGridList.vue';
export default {
    name : 'NFTTabsListing',
    components : { NFTTabsListing }
}
</script>