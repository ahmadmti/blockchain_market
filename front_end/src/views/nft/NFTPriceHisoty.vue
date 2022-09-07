<template>
    
    <div>
        <div class="card">
            <div class="card-header">
                <a class="btn btn-primary bg-transparent text-secondary border-0" data-bs-toggle="collapse" href="#price_history" role="button" aria-expanded="false" aria-controls="price_history">
                    <b>
                       <i class="fa fa-line-chart" aria-hidden="true"></i> Price History
                    </b>
                </a>
            </div>
            <div>
                <div class="collapse" id="price_history">
                    <div class="card card-body p-2 border-0">
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import LineChart from '@/views/chart/LineChart.vue';
export default {
    name : 'NFTPriceHisotry',
    components : { LineChart }
}
</script>