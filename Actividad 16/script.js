const app = Vue.createApp({
    data: () => ({
        texto: "Paradigmas de programacion",
        nombre: "Roberto",
        productos: [
            {nombre: "Soda", cantidad: 10},
            {nombre: "Papas", cantidad: 0},
            {nombre: "Chocolate", cantidad: 20},
        ],
        productoNuevo: "",
        total: 0,
    }),

    methods: {
        agregarProducto() {
            this.productos.push(
                {nombre: this.productoNuevo, cantidad: 0},
            )
         }
    },

    computed: {
        sumarCantidad(){
            this.total = 0;
            for(producto of this.productos){
                this.total = this.total + producto.cantidad;
            }
            return this.total;
        },

    voltearTexto(){
        return this.productoNuevo.split("").reverse().json("")
         }
     }
    })

const vm = app.mount('#app')