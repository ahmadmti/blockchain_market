<template>
    <div class="p-5">
        <h4 class="ps-5 fw-bold">
            Connect your wallet.
        </h4>
        <h4 class="ps-5" v-html="`If you don't have a <a href='#' class='text-decoration-none'> wallet </a> yet, you can select a provider and create one now.`">
        </h4>

        <ul class="p-5 list-group">
            <li class="list-group-item">
                <img src="https://opensea.io/static/images/logos/metamask-fox.svg" height="40" width="40" alt="">
                <a class="btn btn-primary" @click="web3Login">
                    Login with Metamask 
                </a>
                <a class="btn btn-primary float-end">
                    Popular
                </a>
            </li>
        </ul>

        <Toaster v-if="toast.show" :message="toast" />


    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
import apiRoutes from '@/utils/api_routes/ApiRoutes.js'
import Toaster from '@/components/Toaster.vue';

export default {
    name : 'Login',
    data() {
        return {
            toast : {
                show : false , 
                content : '',
                status : '', 
            },            
        }
    },
    methods: {
        async web3Login()
        {
            if (!window.ethereum) {
                alert('MetaMask not detected. Please install MetaMask first.');
                return;
            }
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                let response = await fetch(apiRoutes.main+apiRoutes.auth.web3_login);
                const message = await response.text();
                await provider.send("eth_requestAccounts", []);
                const address = await provider.getSigner().getAddress();
                const signature = await provider.getSigner().signMessage(message);
                localStorage.setItem('hash', signature)
                response = await fetch(apiRoutes.main+apiRoutes.auth.web3_login_varify, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'address': address,
                        'signature': signature,
                        'session' : message
                    })
                })
                if(response.status === 200) 
                {
                    this.changeRoute('/user/account');
                }
            } catch (error) {
                this.toast.show = true ;
                this.toast.status = "Error Code "+error.code;
                this.toast.content = error.message ;
                console.log(error)
            } 
        }
    },
    components : { Toaster },
    mixins : [ RouteMixin ]
}
</script>