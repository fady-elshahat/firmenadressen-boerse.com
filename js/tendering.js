
function stepsProgress() {
     let inputsStep = Array.from( document.querySelectorAll( "#step1 .radio input" ) );
     let btnsBack = Array.from( document.querySelectorAll( ".back-btn" ) );
     let btnsNext = Array.from( document.querySelectorAll( ".next-btn" ) );

     inputsStep.forEach( ( input ) => {
          input.addEventListener( "click", ( e ) => {
               console.log(e);
               if ( e.target.checked === true ) {
                    $( "#step1" ).fadeOut( 0 );
                    $( "#step2" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '33.2%' );
               }
          } )
     } )

     btnsBack.forEach( ( btn ) => {
          btn.addEventListener( "click", ( e ) => {
               if ( e.currentTarget.dataset.step == 2 ) {
                    $( "#step2" ).fadeOut( 0 );
                    $( "#step1" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '16.6%' )
               } else if ( e.currentTarget.dataset.step == 3 ) {
                    $( "#step3" ).fadeOut( 0 );
                    $( ".row.regionals > div" ).fadeOut( 0 )
                    $( "#step2" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '33.2%' )
               } else if ( e.currentTarget.dataset.step == 4 ) {
                    $( "#step4" ).fadeOut( 0 );
                    $( "#step3" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '49.8%' )
               } else if ( e.currentTarget.dataset.step == 5 ) {
                    $( "#step5" ).fadeOut( 0 );
                    $( "#step4" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '66.4%' )
               } else if ( e.currentTarget.dataset.step == 6 ) {
                    $( "#step6" ).fadeOut( 0 );
                    $( "#step5" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '83%' )
               }
          } )
     } )

     btnsNext.forEach( ( btn ) => {
          btn.addEventListener( "click", ( e ) => {
               if ( e.currentTarget.dataset.step == 2 ) {
                    $( "#step2" ).fadeOut( 0 );
                    $( "#step3" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '49.8%' )
               } else if ( e.currentTarget.dataset.step == 3 ) {
                    $( "#step4" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '66.4%' )
                    $( ".row.regionals > div" ).fadeOut( 0 )
               } else if ( e.currentTarget.dataset.step == 4 ) {
                    $( "#step4" ).fadeOut( 0 );
                    $( "#step5" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '83%' )
               } else if ( e.currentTarget.dataset.step == 5 ) {
                    $( "#step5" ).fadeOut( 0 );
                    $( "#step6" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '100%' )
               }
          } )
     } )

     function radiosStep3() {

          const radiosStep3 = Array.from( document.querySelectorAll( "#step3 .radio" ) )
          radiosStep3.forEach( ( radio ) => {
               radio.addEventListener( "click", ( e ) => {
                    $( ".progress-bar" ).css( 'width', '49.8%' )
                    if ( e.currentTarget.dataset.regional === "#step4" ) {
                         $( ".progress-bar" ).css( 'width', '66.4%' )
                    }
                    $( "#step3" ).fadeOut( 0 )
                    let element = document.querySelector( e.currentTarget.dataset.regional )
                    $( element ).fadeIn( 250 )
               } )
          } )

     }
     radiosStep3()
}
stepsProgress()

// OwL Carousel
$( '.owl-carousel.step1' ).owlCarousel( {
     loop: true,
     margin: 20,
     dots: false,
     autoWidth: true,
     responsiveClass: true,
     responsive: {
          300: {
               items: 1,
          },
          500: {
               items: 1,
          },
     }
} )
$( '.owl-carousel.step3' ).owlCarousel( {
     loop: false,
     margin: 20,
     nav: true,
     dots: false,
     autoWidth: true,
     responsiveClass: true,
     responsive: {
          300: {
               items: 1,
          },
          500: {
               items: 1,
          },
     }
} )
