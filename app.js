// 1. Definisikan komponen Vue
// Komponen "Home" akan menampilkan halaman depan aplikasi

const Home = Vue.extend({
    template: '#home',
    data: function () {
        return {
            judul: 'Frontend Test',
            konten: 'Vue JS with Public API',
        }
    }
});

const Search = Vue.extend({
    template: '#search',
    data: function () {
        return {
            mov: null,
            t: null,
            y: null,
        }
    },
    methods: {
        submit() {
            axios
                .get('http://www.omdbapi.com/', {
                    params: {
                        apikey: '310a3fc',
                        y: this.y,
                        t: this.t
                    }
                })
                .then(response => {
                    this.mov = response
                })
        }
    }
});

const Title = Vue.extend({
    template: '#title',
    data: function () {
        return {
            res: null,
            s: null,
            i:null
        }
    },
    methods: {
        search() {
            axios
                .get('http://www.omdbapi.com/', {
                    params: {
                        apikey: '310a3fc',
                        s: this.s
                    }
                })
                .then(response => {
                    this.res = response
                })
        },
        details() {
            axios
                .get('http://www.omdbapi.com/', {
                    params: {
                        apikey: '310a3fc',
                        i: this.i
                    }
                })
                .then(response => {
                    this.res = response
                })
        }
    }
});

// 2. Definisikan routing menuju komponen
const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/title', component: Title },
]

// 3. Buat instance Router Vue
const router = new VueRouter({ routes })

// 4. Tempelkan instance "router" ke App Vue
const zpa = new Vue({ router }).$mount('#app');
const spa = new Vue({ router }).$mount('#top-page');
// http://www.omdbapi.com/?apikey=310a3fc
