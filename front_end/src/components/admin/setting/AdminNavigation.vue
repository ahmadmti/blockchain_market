<template>
    <div>  
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                    <img
                        src="https://opensea.io/static/images/logos/opensea.svg"
                        width="40"
                        height="40"
                        alt="logo"
                    />
                    <router-link to="/admin" class="navbar-brand fw-bold">
                        OpenSea
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/admin/categories" class="nav-link active">
                                Categories
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/faqs" class="nav-link active">
                                FAQ
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/blogs" class="nav-link">
                                Blogs
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#" class="nav-link">
                                Logout
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view  />
    </div>
    
</template>
<script>
export default {
    name : "AdminNavigation"
}
</script>