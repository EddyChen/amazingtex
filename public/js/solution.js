
$(function(){
  'use restrict';

  var _url = window.location.href;

  $(".solution-detail-btn").on("click", function(event){
    var dataTarget = $(this).attr("data-target");
    var dataType = $(this).attr("data-type");
    console.log(dataType + "/" + dataTarget);
    window.open("solution-detail.html#" + dataType + "/" + dataTarget);
  });

});
