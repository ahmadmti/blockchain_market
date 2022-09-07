<template>
    <div>
        <p>
            <a class="btn btn-primary bg-transparent border-0 text-dark fw-bold mb-2" data-bs-toggle="collapse" href="#user-detail" role="button" aria-expanded="false" aria-controls="user-detail">
            <i class="fa fa-indent" aria-hidden="true"></i>  Detail
            </a>
        </p>
        <div class="collapse" id="user-detail">
            <div>
                <span class="text-start">
                    Contract Address
                </span>
                <span class="text-end float-end">
                    0x495f...7b5e
                </span>
                <br />
                <span class="text-start">
                    Token ID
                </span>
                <span class="text-end float-end">
                    2511530819889637...
                </span>
                <br />
                <span class="text-start">
                    Token Standard
                </span>
                <span class="text-end float-end">
                    ERC-1155
                </span>
                <br />
                <span class="text-start">
                    Blockchain
                </span>
                <span class="text-end float-end">
                    Ethereum
                </span>
                <br />
                <span class="text-start">
                    Metadata
                </span>
                <span class="text-end float-end">
                    Centrailized
                </span>
                <br />
                <span class="text-start">
                    Creator Earnings
                </span>
                <span class="text-end float-end">
                    2%
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'NFTUserDetail'
}
</script>