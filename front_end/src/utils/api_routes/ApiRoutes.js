const apiRoutes = {
    main: process.env.VUE_APP_API_URL,
    auth: {
        logout : 'logout',
        web3_login : 'web3-login-message',
        web3_login_varify : 'web3-login-verify',
    }
}



export default apiRoutes;
