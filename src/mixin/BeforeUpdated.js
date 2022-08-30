export default {
    data() {
        return {
          time : ''
      }  
    },
    methods: {
        getTime(sec) {
            this.intervalid = setInterval(() => {
                sec++
                if (sec < 60) {
                    this.time = sec + ' sec'
                } else if (sec > 60) {
                    let newsec = sec - 60 ;
                    this.time = Math.floor(sec / 60) + ' min ' + newsec + 's' ;
                }
            }, 1000);
        }
    },
    mounted() {
        this.getTime(1);
    },
}