<template>
    <div>
        <div class="status">
            <p>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#status" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Event Type
                    </a>
                </div>
            </p>
            <div class="collapse" id="status">
                <div class="list-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Sales
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Listing
                        </label>
                    </div>
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