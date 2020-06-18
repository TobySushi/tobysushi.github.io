$(function() {
var document_height = $(document).height();
var sidebar = $('.sidebar');
var sidebarStretch = $('.sidebarStretch');
var articleBox = $('.articleBox');
var sidebar_height = sidebar.height();

if (document_height > sidebar_height) {
    sidebar.css('height', document_height - 50);
}

var height = document.getElementById('body').offsetHeight;

sidebarStretch.css('min-height', document_height);

});