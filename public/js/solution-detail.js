$(function(){
  'use restrict';

  /*$.ajaxSetup({cache: true});*/

  var _url = window.location.href;

  var $pageContent = $("#page-content");

  var loadHeader = function(successFun) {
    $.ajax({
      url: "header.html",
      dataType: "html",
      success: function(html){
        $pageContent.before(html);
        if ('function' === typeof successFun) {
          successFun();
        }
      }
    });
  }

  var loadFooter = function(successFun) {
    $.ajax({
      url: "footer.html",
      dataType: "html",
      success: function(html){
        $pageContent.after(html);
        if ('function' === typeof successFun) {
          successFun();
        }
      }
    });
  }

  var $solutionContent = $('#solution-content');

  loadHeader(function(){
    var urls = _url.split('#');
    if (urls.length <= 1) {
      $('#solution-link').click();
      return;
    }
    var solutionHtml = "page/solutions/" + urls[1] + ".html";
    $.ajax({
      url: solutionHtml,
      dataType: "html",
      success: function(html){
        $solutionContent.html(html);
      }
    });
  });
  loadFooter();

});