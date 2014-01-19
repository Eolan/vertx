/**
 * Created by Gael on 19/01/14.
 */
var eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');
eb.onopen = function() {
  eb.send('mindMaps.list', {}, function() {
     var renderListItem = function(mindMap) {
        var li = $('<li>');
        $('<span>').text(mindMap.name).appendTo(li);
        li.appendTo('.mind-maps');
     };
      eb.send('mindMaps.list', {}, function(res) {
          $.each(res.mindMaps, function() {
              renderListItem(this);
          });
      });
  });

};