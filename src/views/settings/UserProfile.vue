<template>
    <div>
        <ul class="list-group p-3">
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" placeholder="@username">
            </li>
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Bio</label>
                <textarea class="form-control" rows="3" placeholder="Tell the world your story!"></textarea>
            </li>
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="email" class="form-control" placeholder="mail@mail.com">
            </li>
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Social Connections</label> 
                <p>
                <button class="btn btn-primary m-1">
                    Connect Twitter <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </button>
                <button class="btn btn-primary m-1">
                    Connect Facebook <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </button>
                </p>
            </li>
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Links</label>
                <input type="text" class="form-control" placeholder="yoursite.com">
            </li>
            <li class="list-group-item border-0">
                <label for="exampleFormControlInput1" class="form-label">Wallet Address</label>
                <input type="text" class="form-control" placeholder="0xbe3....9008f">
            </li>
            <li class="list-group-item border-0">
                <button class="btn btn-primary p-2">
                    Update
                </button>
            </li>
                
        </ul>
    </div>
</template>
<script>
export default {
    name : 'UserProfile'
}
</script>