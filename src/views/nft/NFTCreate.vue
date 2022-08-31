<template>
    <div class="container">
        <div class="ps-15 py-5 w-75">
            <h2>
                Create New Item
            </h2>
            <small class="text-secondary">
                <span class="text-danger"> * </span> Required fields
            </small>
            <h3>
                Image, Video, Audio, or 3D Model
            </h3>
            <small class="text-secondary fs-12">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
            </small>

            <form>
                <div class="mb-3">
                    <input class="form-control" type="file" id="formFile">
                </div>

                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Item name">
                </div>

                <div class="mb-3">
                    <label class="form-label">External Link</label>
                    <label class="form-label text-muted fs-12">OpenSea will include a link to this URL on this item's detail page,
                         so that users can click to learn more about it.
                         You are welcome to link to your own webpage with more details.</label>
                    <input type="text" class="form-control" placeholder="http://yoursite.io/item/123">
                </div>

                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <label class="form-label text-muted fs-12">The description will be included on the item's detail page underneath its image.
                         Markdown syntax is supported.</label>
                    <textarea class="form-control" placeholder="Provide a detailed description of your item." id="floatingTextarea"></textarea>
                </div>

                <div class="mb-3">
                    <label class="form-label">Collection</label> <br />
                    <label class="form-label text-muted fs-12">This is the collection where your item will appear.</label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Daning Kid #469049752</option>
                        <option value="2">Daning Kid #469049752</option>
                        <option value="3">Daning Kid #469049752</option>
                    </select>
                </div>

                <div class="py-3 border-bottom">
                    <span class="p-5">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </span>
                    <span>
                        <span class="fw-bold">
                            Propteries
                        </span> <br />
                        <span class="p-10 text-muted fs-12">
                            Textual traits that show up as rectangles
                        </span>
                    </span>
                    <span class="float-end">
                        <button class="btn btn-primary">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>

                <div class="py-3 border-bottom">
                    <span class="p-5">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span>
                        <span class="fw-bold">
                            Levels
                        </span> <br />
                        <span class="p-10 text-muted fs-12">
                            Numerical traits that show as a progress bar
                        </span>
                    </span>
                    <span class="float-end">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Level">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        
                        <!-- Modal -->
                        <LevelModal title="Level" />
                    </span>
                </div>

                <div class="py-3 border-bottom">
                    <span class="p-5">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </span>
                    <span>
                        <span class="fw-bold">
                            Stats
                        </span> <br />
                        <span class="p-10 text-muted fs-12">
                            Numerical traits that just show as numbers
                        </span>
                    </span>
                    <span class="float-end">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Stat">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>

                        <LevelModal title="Stat" />
                    </span>
                </div>

                <div class="py-3 border-bottom">
                    <span class="p-5">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                    <span>
                        <span class="fw-bold">
                            Unlockable Content
                        </span> <br />
                        <span class="p-10 text-muted fs-12">
                            Include unlockable content that can only be revealed by the owner of the item.
                        </span>
                    </span>
                    <span class="float-end">
                        <div class="form-check form-switch">
                            <input v-model="block_content" value="" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                    </span>

                    <span>
                        <div v-if="block_content" class="p-10 form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>
                    </span>

                </div>

                <div class="py-3 border-bottom">
                    <span class="p-5">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    </span>
                    <span>
                        <span class="fw-bold">
                            Explicit & Sensitive Content
                        </span> <br />
                        <span class="p-10 text-muted fs-12">
                            Set this item as explicit and sensitive contentinfo
                        </span>
                    </span>
                    <span class="float-end">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                    </span>
                </div>

                <div class="my-3">
                    <label class="form-label">Blockchain</label> <br />
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Etherurem</option>
                        <option value="2">Polygon</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">Freeze metadata info</label> <br />
                    <label class="form-label text-muted fs-12">Freezing your metadata will allow you to permanently lock and store all of this item's
                         content in decentralized file storage.</label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Daning Kid #469049752</option>
                    </select>
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary">Create</button>
                </div>
            

            </form>
        </div>
    </div>
</template>
<script>
import LevelModal from  '@/components/modal/LevelModal.vue';

export default {
    name : 'NFTCreate',
    data() {
        return {
            block_content : false
        }
    },
    components : { LevelModal }
}
</script>
<style scoped>
    .p-10 {
        padding-left: 7rem;
    }
</style>