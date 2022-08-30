<template>
    <div>
        <div class="status">
            <p>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#status" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Status
                    </a>
                </div>
            </p>
            <div class="collapse" id="status">
                <div class="list-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Buy Now
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Auction
                        </label>
                    </div>
                </div>
            </div>    
        </div>

        <div class="price">
            <p>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#price" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Price
                    </a>
                </div>
            </p>
            <div class="collapse" id="price">
                <form class="my-2">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Select Currency</option>
                            <option value="USD">USD</option>
                        </select>
                        <label for="floatingSelect">Works with selects</label>
                    </div> <br />
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="Min">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="Max">
                    </div>
                    <button type="submit" class="btn btn-primary">Apply</button>
                </form>
            </div>    
        </div>

        <div class="quantity">
            <p>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#quantity" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Quantity
                    </a>
                </div>
            </p>
            <div class="collapse" id="quantity">
                <div class="list-group">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            All items
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                            Single Item
                        </label>
                    </div>
                </div>
            </div>    
        </div>

        <div class="chain">
            <p>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#chain" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Currency
                    </a>
                </div>
            </p>
            <div class="collapse" id="chain">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        SOL
                    </label>
                </div>
            </div>    
        </div>
        
    </div>
    
</template>
<script>
export default {
    name : 'LeftFilterCollection'
}
</script>