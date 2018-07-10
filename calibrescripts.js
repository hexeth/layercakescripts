//Split path name to array and remove blanks
var urlWithBlanks = window.location.pathname.split( "/" );
var url = urlWithBlanks.filter( function(v){return v!==''} );

//If array only has one item, add home class
//Else If last path is not a number, go one item back in path, add path name as class to body
if ( url.length == 1 ) {
	$( "body" ).addClass( "home" );
}
else {  
	$( "body").addClass( url[1]);
}
$(window).load(function() {
      $("iframe[id^=epub").contents().find("body").addClass( 'read-frame' );
	  console.log( $("iframe[id^=epub").contents().find("body") );
    });

//If there are exactly 2 types of ebooks for a single book title, format to list
downloads = $( 'a[id^=btnGroupDrop]' ).get();

if ( $( downloads ).length > 1 ) {
	$( '<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-download"></span>Download :<span class="caret"></span></button><ul class="dropdown-menu leramslist aria-labelledby="btnGroupDrop1"></ul>' ).insertBefore( downloads[downloads.length-1] );
	$( downloads ).detach();
	$.each(downloads, function (i,val) {
		$("<li>" + downloads[i].outerHTML + "</li>").appendTo( ".leramslist" );
	});
	$( ".leramslist" ).find( 'span' ).remove();
	$( ".leramslist a" ).removeClass( 'btn btn-primary' ).removeAttr( 'role' );
}

//remove the popup modals
if (!$( "body" ).hasClass('book')) { 
$(' a ').removeAttr( 'data-toggle', 'data-target', 'data-remote' );
}