<template>
    <div>
        <a class="btn btn-primary bg-transparent border-0 text-dark fw-bold mb-2" data-bs-toggle="collapse" href="#nft-about" role="button" aria-expanded="false" aria-controls="nft-about">
            <i class="fa fa-info-circle" aria-hidden="true"></i> About Okay Beared Ape 
        </a>
        <div class="collapse" id="nft-about">
            <div>
                <span>
                    <img class="border" src="https://openseauserdata.com/files/c9ba4828ef7e68a145e0c1664f91fb02.gif" width="60" height="60" alt="">
                </span>
                <span>
                    (Collection Image and Detail Show Below)  Okay Apes is a culture shift. A clean collection of 25,000 diverse Apes building a virtuous.
                </span>
                <br />
                <div class="btn-group my-1" role="group" aria-label="Basic example">
                    <SocialLink :social_links="social_links" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialLink from "@/components/social/SocialLink.vue";
export default {
    name : 'NFTAbout',
    data() {
        return {
            social_links : [
                {
                    link : 'google.com',
                    icon : 'fa fa-twitter'
                },
                {
                    link : 'google.com',
                    icon : 'fa fa-facebook'
                },
                {
                    link : 'google.com',
                    icon : 'fa fa-instagram'
                }
            ],
        }
    },
    components : { SocialLink }
}
</script>