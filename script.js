function toImage(){
  var element = $("#run"); // global variable
  var getCanvas; // global variable
  $('document').ready(function(){
    html2canvas(element, {
      onrendered: function (canvas) {
        $("#res").append(canvas);
        getCanvas = canvas;
      }
    });
  });
  $("#download").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#download").attr("download", "image.png").attr("href", newData);
  });

}