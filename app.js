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
            film: null,
            res:null,
            det: null,
            s: null,
            i:null
        }
    },
    methods: {
        searching() {
            axios
                .get('http://www.omdbapi.com/', {
                    params: {
                        apikey: '310a3fc',
                        s: this.s
                    }
                })
                .then(response => {
                    this.film = response.data.Search
                    for (let i = 0; i < response.data.Search.length; i++) {
                        console.log(response.data.Search[i].Title);
                    }
                    // alert(response.data.Search[1].Title)
                })
        },
        details() {
            let id = event.target.getAttribute('data-id');
            axios
                .get('http://www.omdbapi.com/', {
                    params: {
                        apikey: '310a3fc',
                        i: id
                    }
                })
                .then(response => {
                    this.det = response
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
