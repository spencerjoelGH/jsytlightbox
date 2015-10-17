# jsytlightbox
Simple lightbox to show youtube videos

Include releavnt js and css files

To init use:
$("body").jsytlightbox();

Optional selector can be set:

$("body").jsytlightbox({
  selector : '.anyCssSelector'
});

The default selector is: *[media="youtube"] (Any element with media attribute of "youtube"

For the plugin to work you wil also need to add a data attribute to this element containing the YouTube video ID
