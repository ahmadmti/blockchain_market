<template>
  <div class="container-fluid discover-container">
    <div class="p-3">
        <span class="text-start">
            <button class="btn btn-primary">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </span>
        <span>
            <input class="form-control w-75 ms-2 d-inline-block" placeholder="Search by name" />
        </span>
        <span class="float-end">
            <div class="dropdown mx-2">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort by
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Recently Created</a></li>
                    <li><a class="dropdown-item" href="#">Recently Listed</a></li>
                    <li><a class="dropdown-item" href="#">Recently Sold</a></li>
                </ul>
            </div>
        </span>

        <span class="text-end float-end">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">
                    <i class="fa fa-th" aria-hidden="true"></i>
                </button>
                <button type="button" class="btn btn-primary">
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                </button>
            </div>
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name : 'NFTSetGridFilter'
}
</script>

<style>

</style>