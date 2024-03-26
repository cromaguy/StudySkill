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
        location.reload(true);
    }
    else {
        document . getElementById( 'ac-wrapper-2' ) . removeAttribute( 'style' );

    }
    
    if ( hideOrshow == 'show' ) {
        $("#wrapper").addClass('blur');
        document.getElementById("sidebar").style.display = "none";
    } 
    else {
        $("#wrapper").removeClass('blur');
        document.getElementById("sidebar").style.display = "none";
    }
    
}



// window . onload = function () {
//     setTimeout( function () {
//         PopUp( 'show' );
//     }, 0 );
// }