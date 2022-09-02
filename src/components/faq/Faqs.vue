<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="faq in faqs" :key="faq">
                <div class="card border-0">
                    <p>
                        <button class="btn btn-light text-dark border-0" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+faq.target.replaceAll(' ', '_').replace(/[^a-zA-Z ]/g, '')" aria-expanded="false" :aria-controls="faq.target.replaceAll(' ', '_').replace(/[^a-zA-Z ]/g, '')">
                            {{ faq.title}}
                        </button>
                    </p>
                    <div class="collapse" :id="faq.target.replaceAll(' ', '_').replace(/[^a-zA-Z ]/g, '')">
                        <div class="card card-body" v-html="faq.content">
                        
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'Faqs' ,
    props : {
        faqs : Array
    }
}
</script>