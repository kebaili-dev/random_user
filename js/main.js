'use strict';

const url = 'https://randomuser.me/api/';

const app = new Vue({
    el: '#app',
    data: {
        user: null
    },
    methods: {
        getRandomUser() {
            fetch(url).then(response => response.json()).then(json => {
                this.user = json.results[0];
            });
        }
    },
    computed: {
        fullname() {
            return this.user.name.first + ' ' + this.user.name.last;
        }
    }
});