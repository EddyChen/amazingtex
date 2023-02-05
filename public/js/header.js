$(function(){
  'use restrict';

  var $pageContent = $("#page-content");

  $('#home-link').on("click", function(event){
    $.ajax({
      url: "page/home.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });

  $('#solution-link').on("click", function(event){
    $.ajax({
      url: "page/solution.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });

  $('#product-link').on("click", function(event){
    $.ajax({
      url: "page/product.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });

  $('#service-link').on("click", function(event){
    $.ajax({
      url: "page/service.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });

  $('#about-us-link').on("click", function(event){
    $.ajax({
      url: "page/about-us.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });

  $('#contact-us-link').on("click", function(event){
    $.ajax({
      url: "page/contact-us.html",
      dataType: "html",
      success: function(html){
        $pageContent.html(html);
      }
    });
  });
  
});