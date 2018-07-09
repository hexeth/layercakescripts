//Split path name to array and remove blanks
var urlWithBlanks = window.location.pathname.split( "/" );
var url = urlWithBlanks.filter( function(v){return v!==''} );

//If array only has one item, add home class
//Else If last path is not a number, go one item back in path, add path name as class to body
//Else get two items back in path and add as class to body and If in reade
if ( url.length == 1 ) {
		$( "body" ).addClass( "home" );
	}
	else {  
		if ( isNaN( url[url.length-1] )) {
			if ( url.indexOf('read') == 1 ) {
				blur = 'read'
				$('iframe[id^=epub').contents().find('body').addClass('epub-frame');
			}
			else {
				blur = url[url.length-1];
			}
			$( "body" ).addClass( blur );
				
		}
		else {
			blur = url[url.length-2] ;
			$( "body" ).addClass( blur );
		} 
	}

//If there are exactly 2 types of ebooks for a single book title, format to list
firstDownload = $( 'a[id^=btnGroupDrop]' ).first();
lastDownload = $( 'a[id^=btnGroupDrop]' ).last();
downloadItems = $( 'a[id^=btnGroupDrop]' );

if ($( 'a[id^=btnGroupDrop]' ).length == 2 ) {

	downloadItems.find( 'span' ).remove()
	downloadItems.removeClass( 'btn btn-primary' );
	downloadItems.removeAttr( 'role' );

	$( '<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-download"></span>Download :<span class="caret"></span></button><ul class="dropdown-menu leramslist aria-labelledby="btnGroupDrop1"><li></li><li></li></ul>' ).insertBefore( firstDownload );

	$( firstDownload ).prependTo( ".leramslist li:first-child" );
	$( lastDownload ).prependTo( ".leramslist li:last-child" );
}

//remove the popup modals
$( 'a' ).removeAttr( 'data-toggle', 'data-target', 'data-remote' );