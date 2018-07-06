
//Get last folder title from URL and add as class to body
var url = document.URL;

if (url.substr(url.lastIndexOf('/') + 1).length > 0) {
    blur = url.substr(url.lastIndexOf('/') + 1);
    $("body").addClass(blur);
} else {
    $("body").addClass("home");
};

//If there are exactly 2 types of ebook, format to list
firstDownload = $( 'a[id^=btnGroupDrop]' ).first();
lastDownload = $( 'a[id^=btnGroupDrop]' ).last();
downloadItems = $( 'a[id^=btnGroupDrop]' );

if ($( 'a[id^=btnGroupDrop]' ).length == 2) {

	downloadItems.find('span').remove()
	downloadItems.removeClass( 'btn btn-primary' );
	downloadItems.removeAttr( 'role' );

	$( '<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-download"></span>Download :<span class="caret"></span></button><ul class="dropdown-menu leramslist aria-labelledby="btnGroupDrop1"><li></li><li></li></ul>' ).insertBefore( firstDownload );

	$( firstDownload ).prependTo(".leramslist li:first-child");
	$( lastDownload ).prependTo(".leramslist li:last-child");
}

//remove the popup modals
$( 'a' ).removeAttr( 'data-toggle', 'data-target', 'data-remote' );