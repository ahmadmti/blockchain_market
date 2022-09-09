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
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'Login',
    methods: {
        async web3Login()
        {
            if (!window.ethereum) {
                alert('MetaMask not detected. Please install MetaMask first.');
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            let response = await fetch('http://127.0.0.1:8000/api/web3-login-message');
            const message = await response.text();

            await provider.send("eth_requestAccounts", []);
            const address = await provider.getSigner().getAddress();
            const signature = await provider.getSigner().signMessage(message);
            response = await fetch('http://127.0.0.1:8000/api/web3-login-verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'address': address,
                    'signature': signature,
                    'session' : message
                })
            });

            console.log(response)
        }
    },
    mixins : [ RouteMixin ]
}
</script>