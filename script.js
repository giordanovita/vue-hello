/* GOAL: stampare a schermo il contenuto di una variabile dentro un h1
BONUS: utilizzare un data come nome del file immagine in un tag img
 */
 function helloVue(){

    new Vue({
        el: '#starter', 
        data: {
            'target': 'Vue prima stampa',
        },
       
    });
}



function init(){

    helloVue()
}

$(init);
 
