/* global Vue */
/* eslint-disable no-new */

new Vue({
    el: '#app',
    data: {
        user: {
            email: '',
            password: ''
        },
        msg: ''
    },
    methods: {
        login() {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json"
            };

            axios({
                    url: "https://course-ec-api.hexschool.io/api/auth/login",
                    method: "post",
                    headers: headers,
                    data: this.user
                }
            ).then(res => {
                document.cookie = `token=${res.data.token}; max-age=1800; path=/`;
                document.cookie = `uuid=${res.data.uuid}; max-age=1800; path=/`;
                window.location = "html/products.html";
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        }
    }
})
