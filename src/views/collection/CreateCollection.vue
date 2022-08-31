<template>
    <div class="container">
        <div class="ps-15 py-5 w-75">
            <h2>
                Create a Collection
            </h2>
            <small class="text-secondary">
                <span class="text-danger"> * </span> Required fields
            </small>
            <h3>
                Logo image
            </h3>
            <small class="text-secondary fs-12">
                This image will also be used for navigation. 350 x 350 recommended.
            </small>

            <div class="mb-3">
                <input class="form-control" type="file" id="formFile">
            </div>

            <div class="mb-3">
                <label class="form-label">Featured image</label>
                <label class="form-label text-muted fs-12">
                    This image will be used for featuring your collection on the homepage,
                     category pages, or other promotional areas of OpenSea. 600 x 400 recommended.
                </label>
                <input class="form-control" type="file" id="formFile">
            </div>

            <div class="mb-3">
                <label class="form-label">Banner image</label>
                <label class="form-label text-muted fs-12">
                    This image will appear at the top of your collection page. Avoid including too much text in this banner image, 
                    as the dimensions change on different devices. 1400 x 350 recommended.
                </label>
                <input class="form-control" type="file" id="formFile">
            </div>

            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" placeholder="Example: Treasure of the Opensea ">
            </div>

            <div class="mb-3">
                <label class="form-label">URL</label> <br />
                <label class="form-label text-muted fs-12">
                    Customize your URL on OpenSea. Must only contain lowercase letters, numbers, and hyphens.
                </label>
                <input type="text" class="form-control" placeholder="https://opensea.io/collection/">
            </div>

            <div class="mb-3">
                <label class="form-label">URL</label> <br />
                <label class="form-label text-muted fs-12">
                    Markdown syntax is supported. 0 of 1000 characters used.
                </label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Category</label> <br />
                <label class="form-label text-muted fs-12">
                    Adding a category will help make your item discoverable on OpenSea.
                </label>
                <NFTCategoryDropDown />
            </div>

            <div class="mb-3">
                <label class="form-label">Link</label>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action p-0">
                        <input type="text" class="form-control border-0" placeholder="yoursite.io" aria-label="Username" aria-describedby="basic-addon1">
                    </li>
                    <li class="list-group-item list-group-item-action p-0">
                        <input type="text" class="form-control border-0" placeholder="https://discord.gg/abcdef" aria-label="Username" aria-describedby="basic-addon1">
                    </li>
                    <li class="list-group-item list-group-item-action p-0">
                        <input type="text" class="form-control border-0" placeholder="https://www.medium.com/@YourMeduimHandle" aria-label="Username" aria-describedby="basic-addon1">
                    </li>
                    <li class="list-group-item list-group-item-action p-0">
                        <input type="text" class="form-control border-0" placeholder="https://t.me/abcdef" aria-label="Username" aria-describedby="basic-addon1">
                    </li>
                </ul>
            </div>

            <div class="mb-3">
                <label class="form-label">Creator earnings</label>
                <label class="form-label text-muted fs-12">
                    Earn a percentage of the sale price every time one of your items is sold. 
                    Adding multiple addresses may increase gas fees for buyers.
                </label>
                <input type="text" class="form-control w-50 me-0 d-inline-block" name="" id="" placeholder="Please enter an address, e.g. 0x1ed3... or destination.eth">
                <input type="text" class="form-control w-25 float-end" name="" placeholder="0%" id="">
            </div>

            <div class="mb-3">
                <label class="form-label">Blockchain</label> <br />
                <label class="form-label text-muted fs-12">
                    Select the blockchain where you'd like new items from this collection to be added by default
                </label> 

                <select name="" class="form-control">
                    <option :value="block_chain.name" v-for="block_chain in block_chains" :key="block_chain">{{ block_chain.title }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Explicit & sensitive content</label> <br />
                <label class="form-label text-muted fs-12">
                    Set this collection as explicit and sensitive content
                </label> 
                <div class="form-check form-switch float-end">
                    <input class="form-check-input p-2" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                </div>
            </div>

            <button class="btn btn-primary">Create</button>

        </div>
    </div>
</template>
<script>
import NFTCategoryDropDown from '@/components/nft/NFTCategoryDropDown.vue';
export default {
    name : 'CreateCollection',
    data() {
        return {
            block_chains : [
                {
                    title : 'Ethereum',
                    name : 'ethereum'
                },
                {
                    title : 'Klaytn',
                    name : 'klaytn'
                },
                {
                    title : 'Polygon',
                    name : 'polygon'
                }
            ]
        }
    },
    components : { NFTCategoryDropDown }
}
</script>