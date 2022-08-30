<template>
    <div class="row my-2">
        <div class="col-md-4 mb-3" v-for="item in lists" :key="item.title">
            <a href="#" @click="changeRoute('/chain/eth-id/id')" class="text-decoration-none">
                <div class="card">
                    <img :src="item.url" class="card-img-top" alt="apes">
                    <div class="card-body">
                        <p class="card-text text-center text-secondary">{{ item.title }}</p>
                    </div>
                        <span class="text-secondary ps-2 fw-bold"> <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" height="20" width="10" alt=""> Price : 3.05</span>
                        <br />
                        <a href="#" class="btn btn-primary">Buy Now </a>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'NFTGridList',
    data() {
        return {
            lists : [
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/ctlaOTtIeE3N8ozeVEs1ZlZgIRaVYpiWPe-PQMEqTOw6qhtsvA2Q52O1Pq5DLWS6d0WQPRHwe095HdXH6SAdYZdeEUCvbpZ4w5tY2Q=w600',
                    title : 'Bored Ape Eighties'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/ctlaOTtIeE3N8ozeVEs1ZlZgIRaVYpiWPe-PQMEqTOw6qhtsvA2Q52O1Pq5DLWS6d0WQPRHwe095HdXH6SAdYZdeEUCvbpZ4w5tY2Q=w600',
                    title : 'Bored Ape Eighties'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/ctlaOTtIeE3N8ozeVEs1ZlZgIRaVYpiWPe-PQMEqTOw6qhtsvA2Q52O1Pq5DLWS6d0WQPRHwe095HdXH6SAdYZdeEUCvbpZ4w5tY2Q=w600',
                    title : 'Bored Ape Eighties'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/3e56v_wzGLWStknsCL4ftoRKMbEfOkykAhNbRsTs2-2cVIfh1osPmJbYk_CtqZRt69cwDqWL0YzuD7rLyti39VWn05Tmhnm4FhqXtw=w600',
                    title : 'Asuki'
                },
                {
                    id  :1,
                    link : 'www.goolge.com',
                    url : 'https://lh3.googleusercontent.com/iifrzejePiqWoS6gYW5vNf8FyKfXLhIRveZ9O48ywLTKtCh2O_4x0Qju3LDama1Fl4c28NeLIajsrXJ1X90Ce9Uzknosn18vwX2SLg=w600',
                    title : 'Robotic Ape'
                },

            ]
        }
    },
    mixins : [ RouteMixin ]
}
</script>