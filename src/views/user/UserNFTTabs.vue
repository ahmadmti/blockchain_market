<template>
    <div class="container-fluid">
        <div class="position-relative ">
            <img class="user-background-image" src="https://images.unsplash.com/photo-1440151050977-247552660a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80" alt="">
            <div class="position-absolute bottom-0 start-0">
                <img height="200" width="200" class="rounded-circle border border-3" src="https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="">
            </div>
        </div>

        <div class="container">
            <h3>
                AwaisJavaid93
            </h3>
            <div class="my-2">
                <span>
                    <a class="text-decoration-none hide-content" href="#" @click="copyText('0xBe381cad175daa8E4379C28fEfDfC22aF339008F')">
                        0xBe381cad175daa8E4379C28fEfDfC22aF339008F
                    </a>
                </span>
                <span class="fw-bold text-muted">
                    Joined August 2022
                </span>
            </div>
            
            <NFTTabsListing />

        </div>
    </div>

</template>
<script>
import NFTTabsListing from '@/components/nft/NFTTabsListing.vue';
export default {
    name : 'UserNFTTabs',
    methods: {
        copyText(textToCopy)
        {
            const tmpTextField = document.createElement("textarea")
            tmpTextField.textContent = textToCopy
            tmpTextField.setAttribute("style","position:absolute; right:200%;")
            document.body.appendChild(tmpTextField)
            tmpTextField.select()
            tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
            document.execCommand("copy")
            tmpTextField.remove()
        }
    },
    components : { NFTTabsListing }
}
</script>
<style scoped>
    .user-background-image{
        width: 100%;
        height: 300px ;
    }
</style>