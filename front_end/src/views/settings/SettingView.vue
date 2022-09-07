<template>
    <div>
        <div class="contaier-fluid">
            <div class="d-flex align-items-start p-5">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link bg-transparent text-secondary text-start active" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
                    <button class="nav-link bg-transparent text-secondary text-start" id="notification-tab" data-bs-toggle="pill" data-bs-target="#notification" type="button" role="tab" aria-controls="notification" aria-selected="false">Notification</button>
                    <button class="nav-link bg-transparent text-secondary text-start" id="account-tab" data-bs-toggle="pill" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false">Account </button>
                    <button class="nav-link bg-transparent text-secondary text-start" id="earning-tab" data-bs-toggle="pill" data-bs-target="#earning" type="button" role="tab" aria-controls="earning" aria-selected="false"> Earning </button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <UserProfile />
                    </div>
                    <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab" tabindex="0">
                        <div>
                            <Notification />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab" tabindex="0">
                        <div>
                            <AccountSupport />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="earning" role="tabpanel" aria-labelledby="earning-tab" tabindex="0">
                        <div>
                            <Earning />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Earning from './Earning.vue';
import AccountSupport from './AccountSupport.vue';
import Notification from './Notification.vue';
import UserProfile from  './UserProfile.vue';

export default {
    name : 'SettingView',
    components : { Earning, AccountSupport, Notification, UserProfile }
}
</script>