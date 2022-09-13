<template>
    <div>
        <div class="container">
            <h2 class="text-center my-3">
                FAQS
            </h2>
            <router-link to="faq/create" class="btn btn-primary">Add New</router-link>
            <div class="row my-5">
                <table class="table table-hover table-striped table-bordered table-responsive">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Created By</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Awais Javaid</td>
                        <td>Active</td>
                        <td>
                            <button class="btn btn-primary m-2">
                                Edit
                            </button>
                            <button class="btn btn-danger m-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'AdminFaqs'
}
</script>