// ==UserScript==
// @name        New SS Chatinator
// @namespace   xenomark.com
// @description just does stuff
// @include     http*://www.singsnap.com/karaoke/chat/main*
// @include     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @version     3
// @grant       none
// ==/UserScript==

function fixPage() {
    $messageButton = $('#top-bar .btn-group:first a:last');
    $inboxCodez = "<p id='inboxP' style='position:absolute;top:5px;right:20px;width:5px;text-align:center;'></p>";
    $('body').append($inboxCodez);
    $('#inboxP').append($messageButton);
    $('#alerts, #top-bar, #header, #footer, #content h1, #content h2, #content p.lg, span.optional').remove();
    $('#content p:first').remove();
    $('div.container').css('width','100%');
    $('p').addClass('listy').css({'color':'#FFF','padding':'3px 20px 0px 20px','line-height':'14px','font-size':'14px','height':'30px'});
}
setTimeout(
    function() {
        fixPage();
    }, 100);

function resizeShit() {
	$chatHeight = $(window).height()-48+'px';
	$('object').css({'width':'100%','height':$chatHeight,'margin-top':'-10px'});
}

setTimeout(
    function() {
        resizeShit();
        $('a').attr('target','_blank');
    }, 1000);

$(window).resize(
    function(){
        resizeShit();
});