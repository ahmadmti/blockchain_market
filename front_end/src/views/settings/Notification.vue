<template>
    <div>
        <ul class="list-group p-4">
            <h3>
                Notification Settings
            </h3>
            <h6>
                Select which notifications you would like to receive for 0xbe38...008f
            </h6> <br />
            <li class="list-group-item">
                <span>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </span>
                <span class="text-start">
                    <p>
                        Item Sold  <br />
                        When someone purchased one of your items
                    </p>
                </span>
            </li>
            <li class="list-group-item">
                <span>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </span>
                <span class="text-start">
                    <p>
                        Bid Activity  <br />
                        When someone bids on one of your items
                    </p>
                </span>
            </li>
            <li class="list-group-item">
                <span>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </span>
                <span class="text-start">
                    <p>
                        Price Change  <br />
                        When an item you made an offer on changes in price
                    </p>
                </span>
            </li>
            <li class="list-group-item">
                <span>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </span>
                <span class="text-start">
                    <p>
                        Auction Expiration <br />
                        When a timed auction you created ends
                    </p>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name  : 'Notification'
}
</script>