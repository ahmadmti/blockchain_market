export default {
    methods: {
        toasterMessage(title, content) {
            this.toast.show = false ;
            this.$nextTick(() => {
                this.toast.show = true ;
            })
            this.toast.status = title;
            this.toast.content = content;
        }
    },
}