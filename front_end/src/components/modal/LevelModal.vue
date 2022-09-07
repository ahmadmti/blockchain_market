<template>
    <div class="modal fade" :id="title" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add {{ title }}</h5>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div>
                            <span>
                                <input type="text" class="form-control w-50 d-inline-block" placeholder="Speed"> 
                            </span>
                            <span>
                                <input type="text" class="form-control w-25 d-inline-block" value="3"> 
                                <input type="text" class="form-control w-25 d-inline-block" value="5"> 
                            </span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'LevelModal',
    props : {
        title : {
            type : String
        }
    }
}
</script>