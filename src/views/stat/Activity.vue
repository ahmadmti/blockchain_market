<template>
    <div class="container-fluid">
        <div class="row py-5">
            <div class="col-md-3">
                <LeftSideBar />
            </div>
            <div class="col-md-9">
                <SaleHistiryBySpecficCollection />
            </div>
        </div>
    </div>
</template>
<script>

import SaleHistiryBySpecficCollection from '@/components/collection/SaleHistiryBySpecficCollection.vue';
import LeftSideBar from '@/components/activity/LeftSidebar.vue';
export default {
    name : 'Activity',
    components : { SaleHistiryBySpecficCollection, LeftSideBar }
}
</script>