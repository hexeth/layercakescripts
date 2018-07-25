//Split path name to array and remove blanks
var urlWithBlanks = window.location.pathname.split( "/" );
var url = urlWithBlanks.filter( function(v){return v!==''} );


if ( jQuery.inArray( 'epub', url ) != -1 ) {
        $( "body" ).addClass( url[3] );
}

//add class to iframe body after it loads.
$('body.read').on('DOMNodeInserted', 'iframe', function(e) {
        setTimeout(function() {
                $("iframe").contents().find("body").addClass( 'read-frame' );
        }, 1000);
});

//remove the popup modals
if (!$( "body" ).hasClass('admin')) {
$(' a:not(.dropdown-toggle) ').removeAttr( 'data-toggle', 'data-target', 'data-remote' );
}
