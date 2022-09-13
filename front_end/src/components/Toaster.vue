<template>
    <div>
        <div class="toast-container position-fixed top-0 end-0 p-3">
            <div class="toast fade show"  role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto text-uppercase"> {{ message.status }} </strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="close"></button>
                </div>
                <div class="toast-body text-capitalize">
                    {{ message.content }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Toaster',
    props : {
        message : {
            type : Object
        }
    },
    //    toast : {
        //     show : false ,  Not Use her but in Parent
        //     content : '', Show Messsage
        //     status : '', Success or Validation Expection Title 
    //   },
}

</script>
