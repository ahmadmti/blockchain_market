<template>
    <div>
        <div class="collapse" id="item_activity">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Price</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="activity in activities" :key="activity">
                        <td>{{ activity.name }}</td>
                        <td>{{ activity.price }}</td>
                        <td>{{ activity.from }}</td>
                        <td>{{ activity.to }}</td>
                        <td>{{ activity.date }}</td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
       
    </div>
</template>
<script>
export default {
    name : 'NFTActivityTable',
    data() {
        return {
            activities : [
                {
                    name    : 'List',                    
                    price   : '0.034',
                    from    : '3786C2',                    
                    to      : '4246C2',                    
                    date    : '2 Days ago',
                },
                {
                    name    : 'List',                    
                    price   : '0.031',
                    from    : '3786C2',                    
                    to      : '4245C2',                    
                    date    : '1 Days ago',
                },
                {
                    name    : 'List',                    
                    price   : '0.037',
                    from    : '3786A2',                    
                    to      : '424QC2',                    
                    date    : '2 Days ago',
                },
            ]
        }
    },
}
</script>