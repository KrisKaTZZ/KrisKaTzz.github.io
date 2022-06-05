var app = new Vue({
    el: '.items, .item',
    data: {
        products:[
            {id:1, title:"Variety Gulliver", short_text:"Variety Gribovsky jubilee", image:"img1.jpg", desc:"Variety Gribovsky jubilee - winter, forming an arrow with bulbous seeds. In terms of maturation - mid-season."},
            {id:2, title:"Sort Gribovsky", short_text:"Variety Degtyarsky, recommended by experts for cultivation on personal plots.", image:"img2.jpg", desc:"Variety Degtyarsky, recommended by experts for cultivation on personal plots. Spring variety, mid-season, non-shooting."},
            {id:3, title:"Degtyarsky variety", short_text:"Variety Duchess - winter, giving arrows, early ripe.", image:"img3.jpg", desc:"Variety Duchess - winter, giving arrows, early ripe. The head is rounded flattened, up to 5 cm in diameter, it has 4-6 large cloves."},
            {id:4, title:"Variety Lyubasha", short_text:"Variety Lyubasha - winter, mid-season, high-yielding.", image:"img4.jpg", desc:"Variety Lyubasha - winter, mid-season, high-yielding. The arrow is about 1.5 meters. The leaves are dense, dark green in color, suitable for salads."},
            {id:5, title:"Sort Flight", short_text:"Variety Poljot, bred in Belarus - winter, mid-season, throwing arrows.", image:"img5.jpg", desc:"Variety Poljot, bred in Belarus - winter, mid-season, throwing arrows. The heads are large, rounded, dense, weighing about 40-52 grams, they have 5-6 cloves."}]
                  },
    mounted:function() {
 console.log(window.localStorage.getItem('prod'));
    
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        }
    }
});
       