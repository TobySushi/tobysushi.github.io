$(function() {
var document_height = $(document).height();
var sidebar = $('.sidebar');
var sidebarContainer = $('.sidebarContainer');
var sidebarStretch = $('.sidebarStretch');
var articleBox = $('.articleBox');
var sidebar_height = sidebar.css("height");
var bodyContent = $('.bodyContent');

if (document_height > sidebar_height) {
    sidebar.css('height', document_height - 50);
}
sidebar.css('min-height', $( window ).height() - 70);
sidebarContainer.css('height', document_height - 70);

});