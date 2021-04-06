/* GOAL: stampare a schermo il contenuto di una variabile dentro un h1
BONUS: utilizzare un data come nome del file immagine in un tag img
 */
 function helloVue(){

    new Vue({
        el: '#starter', 
        data: {
            'target': 'Vue prima stampa',
            'pic': 'img/mountains.jpg'
        },
        methods: {
            backSlide: function(){
                if(this.pic=='img/mountains.jpg'){
                    this.pic='img/mountains2.jpg'
                }else if(this.pic=='img/mountains2.jpg'){
                    this.pic='img/mountains1.jpg'
                }else{
                    this.pic='img/mountains.jpg'
                }
            },
            nextSlide:function(){
                if(this.pic=='img/mountains.jpg'){
                    this.pic='img/mountains1.jpg'
                }else if(this.pic=='img/mountains1.jpg'){
                    this.pic='img/mountains2.jpg'
                }else{
                    this.pic='img/mountains.jpg'
                }
            }
        }
    });
}



function init(){

    helloVue()
}

$(init);
 
