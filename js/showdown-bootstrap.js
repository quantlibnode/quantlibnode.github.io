showdown.extension('bootstrap', function () {
  return [{
    type: "output",
    filter: function (html, converter, options) {
      var liveHtml = $('<div></div>').html(html);
      $('table', liveHtml).each(function(){
      	var table = $(this);
        // table bootstrap classes
        table.addClass('table table-bordered');
      });
      return liveHtml.html();
    }
  }];
});
