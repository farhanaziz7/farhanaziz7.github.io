// 1. Definisikan komponen Vue
// Komponen "Home" akan menampilkan halaman depan aplikasi
new Vue({
    el: '#app',
    data () {
        return {
            mov: null,
            t: null,
            y: null
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
                .then(response => (this.mov = response))

        }
    }
});

// http://www.omdbapi.com/?apikey=310a3fc
