<template>
    <div>
        <div class="container">
            <form class="w-50 mx-auto my-5">
                
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input type="text" class="form-control">
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Blog Type</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Guide</option>
                        <option value="2">Guide Post</option>
                        <option value="3">Spotlight</option>
                        <option value="2">Safety & Security</option>
                        <option value="3">Annoucement</option>
                    </select>
                </div>
                
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                    <input type="file" class="form-control" id="inputGroupFile01">
                </div>
                
                <div class="input-group mb-3">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Set Status Active / Deactive</label>
                    </div>
                </div>
                
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
                
                <button type="sumit" class="btn btn-primary my-3">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name : 'AdminBlogs'
}
</script>