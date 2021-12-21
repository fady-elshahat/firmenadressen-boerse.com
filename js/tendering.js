function stepsProgress() {
     const inputsStep1 = Array.from( document.querySelectorAll( "#step1 .radio input" ) )
     const btnsBack = Array.from( document.querySelectorAll( ".back-btn" ) )
     const btnsNext = Array.from( document.querySelectorAll( ".next-btn" ) )


     inputsStep1.forEach( ( input ) => {
          input.addEventListener( "click", ( e ) => {
               if ( e.target.checked === true) {
                    $( "#step1" ).fadeOut( 0 );
                    $("#step2").fadeIn(150)
                    $( ".progress-bar" ).css( 'width', '33.2%')
               }
          })
     } )
     
     btnsBack.forEach( ( btn ) => {
          btn.addEventListener( "click", ( e ) => {
               if ( e.currentTarget.dataset.step == 2 ) {
                    $( "#step2" ).fadeOut( 0 )
                    $( "#step1" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '16.6%' )
               } else if ( e.currentTarget.dataset.step == 3 ) {
                    $( "#step3" ).fadeOut( 0 )
                    $( "#step2" ).fadeIn( 150 )
                    $( ".progress-bar" ).css( 'width', '33.2%' )
               }
          })
     } )
     
     btnsNext.forEach( ( btn ) => {
          btn.addEventListener( "click", (e) => {
               if ( e.currentTarget.dataset.step == 2) {
                    $( "#step2" ).fadeOut( 0 );
                    $( "#step3" ).fadeIn( 150 );
                    $( ".progress-bar" ).css( 'width', '49.8%' )
               }
          })
     })
     
}


$( document ).ready( stepsProgress() )
