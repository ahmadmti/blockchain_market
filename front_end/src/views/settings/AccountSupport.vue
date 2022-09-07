<template>
    <div>
        <div class="p-4">
            <Faqs :faqs="faqs" />
        </div>
    </div>
</template>
<script>
import Faqs from '@/components/faq/Faqs.vue';
export default {
    name : 'AccountSupport',
    data() {
        return {
            faqs : [
                {
                    target : 'How can I contact OpenSea(s)23232',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                {
                    target : 'How can I contact Open',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                {
                    target : 'How can I contact OpenSea?',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                }
            ],
        }
    },
    components : { Faqs }
}
</script>