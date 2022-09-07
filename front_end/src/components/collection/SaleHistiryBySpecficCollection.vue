<template>
  <div class="row">
    <div class="table-responsive">
      <table class="table table-hover ">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in history" :key="item">
            <td>
              <a href="#" class="btn btn-primary">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </td>
            <td>{{ item.title}}</td>
            <td>{{ item.price}}</td>
            <td>{{ item.quantity}}</td>
            <td>{{ item.from}}</td>
            <td>{{ item.to}}</td>
            <td>{{ item.date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "SaleHistoryBySpecficCollection",
  data() {
    return {
      history: [
        {
          title: "Trippy Bunny #954",
          price: "42.08",
          quantity: "2.9",
          from: "945623",
          to: "542345",
          date: "0.04"
        },
        {
          title: "Trippy Bunny #914",
          price: "42.08",
          quantity: "2.9",
          from: "945623",
          to: "542345",
          date: "0.04"
        },
        {
          title: "Trippy Bunny #940",
          price: "42.08",
          quantity: "2.9",
          from: "945623",
          to: "542345",
          date: "0.04"
        }
      ]
    };
  }
};
</script>