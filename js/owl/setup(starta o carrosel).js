$('.owl-carousel').owlCarousel({
    loop:true,       /* se colocar false não fica loop infinito */
    margin:10,       /*  a distancia de uma imgaem/poster da outra */
    nav:true,      /* são as setinhas de navegação abaixo das imagens/posters*/
    responsive:{
        0:{
            items:1   //tela perta de zero apresenta 1 imagem//
        },
        600:{
            items:3   // tela 600 ou menos apresenta 3 imagens//
        },
        1000:{        // tela 1000 ou mais apresenta 5 imagens//
            items:5
        }
    }
})