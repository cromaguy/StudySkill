function PopUp(hideOrshow) {
    if ( hideOrshow == 'hide' )document . getElementById( 'ac-wrapper' ) . style . display = "none";
    else document . getElementById( 'ac-wrapper' ) . removeAttribute( 'style' );
    
    if ( hideOrshow == 'show' ) {
        $("#wrapper").addClass('blur');
    } else {
        $("#wrapper").removeClass('blur');
    }
    
}

function AddPopUp(hideOrshow) {
    if ( hideOrshow == 'hide' ) {
        document . getElementById( 'ac-wrapper-2' ) . style . display = "none"; 
    }
    else {
        document . getElementById( 'ac-wrapper-2' ) . removeAttribute( 'style' );
    }
    
    if ( hideOrshow == 'show' ) {
        $("#wrapper").addClass('blur');
    } 
    else {
        $("#wrapper").removeClass('blur');
    }
    
}



// window . onload = function () {
//     setTimeout( function () {
//         PopUp( 'show' );
//     }, 0 );
// }