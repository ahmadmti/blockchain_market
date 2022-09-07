<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span>Sale ends August 25, 2022 at 3:52pm GMT+5</span>
      <br />
      <span>
        <span class="fs-3 mx-1">1 :</span>
        <span class="fs-3 me-4">Hours</span>
      </span>
      <span>
        <span class="fs-3 mx-1">1 :</span>
        <span class="fs-3 me-4">Minutes</span>
      </span>
      <span>
        <span class="fs-3 mx-1">1 :</span>
        <span class="fs-3">Second</span>
      </span>
    </li>
    <li class="list-group-item">
      <p class="text-muted">Current Price</p>

      <span>
        <img
          src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
          height="50"
          width="50"
          alt="eth"
        />
      </span>
      <span class="fs-4">0.025 ($ 42.05)</span>
        <button type="button" class="btn btn-primary mx-2">
            <i class="fa fa-money" aria-hidden="true"></i>
            Buy Now
        </button>

        <button type="button" class="btn btn-secondary"> 
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            Make a offer
        </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SaleEndTime"
};
</script>