<template>
    <div>
        <div class="banner_section py-5">
            <div class="container p-4 my-5">
                <form class="text-center">
                    <input type="text" class="form-control py-2 ms-15 w-50" name="" id="" placeholder="Search">
                </form>
            </div>
        </div>

        <div class="container my-5">
            <div class="row text-center ps-10">
                <router-link :to="'/help/'+grid.link.replace(' ', '-')" v-for="grid in grids" :key="grid" class="card col-md-3 m-4 section-bg-color text-decoration-none">
                    <div class="card-body my-2">
                        <img class="w-25" :src="grid.url" alt="">
                    </div>
                    <h5 class="my-3 text-secondary">
                        {{ grid.title }}
                    </h5>
                </router-link>
            </div>
        </div>

        <div class="section-bg-color">
            <h4 class="text-center pt-5">Recommended Read</h4>
             <div class="container">
                <div class="row text-center py-2 ps-10">
                    <router-link :to="'/article/'+grid.link.replace(' ', '-')" v-for="grid in grids" :key="grid" class="card col-md-3 m-4  text-decoration-none">
                        <h5 class="my-3 text-dark">
                            {{ grid.title }}
                        </h5>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "HelpView",
    data() {
        return {
            grids : [
                {
                    link : 'get-started',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'Get Started'
                },
                {
                    link : 'buying',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'Buying'
                },
                {
                    link : 'selling',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'Selling'
                },
                {
                    link : 'creating',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'Creating'
                },
                {
                    link : 'faq',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'FAQ'
                },
                {
                    link : 'user-safety',
                    url : 'https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png',
                    title : 'User Safety'
                },
            ]
        }
    },
}
</script>
<style scoped>
    .banner_section {
        background-image: url('https://theme.zdassets.com/theme_assets/10680073/c6e28229deb7e53544d30abfe704bb5762a576ef.png');
        background-repeat: no-repeat ;
    }
</style>