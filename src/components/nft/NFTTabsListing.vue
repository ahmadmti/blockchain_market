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
            <li class="nav-item dropdown" role="presentation">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
                <ul class="dropdown-menu">
                    <li><a class="nav-link" id="offer_made-tab" data-bs-toggle="pill" data-bs-target="#offer_made" type="button" role="tab" aria-controls="offer_made" aria-selected="false">Offer Made</a></li>
                    <li><a class="nav-link" id="offer_received-tab" data-bs-toggle="pill" data-bs-target="#offer_received" type="button" role="tab" aria-controls="offer_made" aria-selected="false">Offer Received</a></li>
                    <li><a class="nav-link" id="offer_active-tab" data-bs-toggle="pill" data-bs-target="#offer_active" type="button" role="tab" aria-controls="offer_made" aria-selected="false">Active Listing</a></li>
                    <li><a class="nav-link" id="offer_inactive-tab" data-bs-toggle="pill" data-bs-target="#offer_inactive" type="button" role="tab" aria-controls="offer_made" aria-selected="false">Inactive Listing</a></li>
                </ul>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-collected" role="tabpanel" aria-labelledby="pills-collected-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="pills-created" role="tabpanel" aria-labelledby="pills-created-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="pills-favorite" role="tabpanel" aria-labelledby="pills-favorite-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="offer_made" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="offer_received" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="offer_active" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
            <div class="tab-pane fade" id="offer_inactive" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                <NFTSGridList :lists="lists" />
            </div>
        </div>
    </div>
</template>
<script>
import NFTSGridList from '@/components/nft/NFTSGridList.vue';
export default {
    name : 'NFTTabsListing',
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
    components : { NFTSGridList }
}
</script>