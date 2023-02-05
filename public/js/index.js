$(function(){
  'use restrict';

  $.ajaxSetup({cache: true});

  var _url = window.location.href;

  var $shjyMask = $("#shjy-mask");
  var $pageContent = $("#page-content");

  $("#shjy-enter").on("click", function(event){
    $pageContent.show();
    $shjyMask.slideUp({
      "duration": 1000,
      "complete": function(){
        $shjyMask.remove();
      }
    });
  });

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

  loadHeader(function(){
    var urls = _url.split('#');
    if (urls.length > 1) {
      $('#' + urls[1] + '-link').click();
    } else {
      $('#home-link').click();
    }
  });
  loadFooter();

});