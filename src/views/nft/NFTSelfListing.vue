<template>
    <div class="row">
            <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-list" aria-hidden="true"></i> Listing
                </div>
                <div class="card-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Price</th>
                                <th scope="col">USD Price</th>
                                <th scope="col">Expiration</th>
                                <th scope="col">From</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 5 ETH </td>
                                <td> $8,250.05 </td>
                                <td> 7 Days </td>
                                <td> Hazardous_OOGA </td>
                                <td> <a href="#" class="btn btn-secondary"> Buy </a> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name : 'NFTOfferListing'
}
</script>