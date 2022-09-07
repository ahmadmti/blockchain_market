<template>
    <div>
        <select class="form-select" aria-label="Default select example">
            <option :value="explore.title" v-for="explore in explores" :key="explore">{{ explore.title }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name : "NFTCategoryDropDown",
    data() {
        return {
            explores: [
                {
                    title: "Art ",
                    link: "art",
                    icon: "fa fa-paint-brush"
                },
                {
                    title: "Collectible",
                    link: "collectible",
                    icon: "fa fa-pinterest-square"
                },
                {
                    title: "Domain",
                    link: "domain",
                    icon: "fa fa-paint-brush"
                }
            ],
        }
    },
}
</script>
