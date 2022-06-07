var app = new Vue({
    el: '.items, .item, .contactUs',
    data:{
        products:[
            {id:1, title:"Variety Gulliver", short_text:"Variety Gribovsky jubilee", image:"img1.jpg", desc:"Variety Gribovsky jubilee - winter, forming an arrow with bulbous seeds. In terms of maturation - mid-season."},
            {id:2, title:"Sort Gribovsky", short_text:"Variety Degtyarsky, recommended by experts for cultivation on personal plots.", image:"img2.jpg", desc:"Variety Degtyarsky, recommended by experts for cultivation on personal plots. Spring variety, mid-season, non-shooting."},
            {id:3, title:"Degtyarsky variety", short_text:"Variety Duchess - winter, giving arrows, early ripe.", image:"img3.jpg", desc:"Variety Duchess - winter, giving arrows, early ripe. The head is rounded flattened, up to 5 cm in diameter, it has 4-6 large cloves."},
            {id:4, title:"Variety Lyubasha", short_text:"Variety Lyubasha - winter, mid-season, high-yielding.", image:"img4.jpg", desc:"Variety Lyubasha - winter, mid-season, high-yielding. The arrow is about 1.5 meters. The leaves are dense, dark green in color, suitable for salads."},
            {id:5, title:"Sort Flight", short_text:"Variety Poljot, bred in Belarus - winter, mid-season, throwing arrows.", image:"img5.jpg", desc:"Variety Poljot, bred in Belarus - winter, mid-season, throwing arrows. The heads are large, rounded, dense, weighing about 40-52 grams, they have 5-6 cloves."}
                 ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        this.getProducts();
        this.checkInCart();
        this.getCart();
        console.log(this.cartIds);
        console.log(this.contactFields);
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products) {
                   for(i in this.products) {
                       if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                   } 
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },
        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }
});
