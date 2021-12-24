function stepsProgress() {
     const inputsStep1 = Array.from( document.querySelectorAll( "#step1 .radio input" ) )
     const btnsBack = Array.from( document.querySelectorAll( ".back-btn" ) )
     const btnsNext = Array.from( document.querySelectorAll( ".next-btn" ) )

     inputsStep1.forEach( ( input ) => {
          input.addEventListener( "click", ( e ) => {
               if ( e.target.checked === true ) {
                    console.log( e.target.checked );
                    $( "#step1" ).fadeOut( 0 );
                    $( "#step2" ).fadeIn( 150 )
                    $( ".progress-bar" ).css( 'width', '33.2%' )
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
                    $( ".row.regionals>div" ).fadeOut( 0 )
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
                    $( "#step3" ).fadeOut( 0 )
                    $( ".progress-bar" ).css( 'width', '66.4%' )
                    let element = document.querySelector( e.currentTarget.dataset.regional )
                    $( element ).fadeIn( 250 )
               } )
          } )

     }
     radiosStep3()


}


$( document ).ready( stepsProgress() )
