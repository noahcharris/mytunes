// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

//MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({
MyTunes.Collections.SongQueue = Backbone.Collection.extend({



  model: MyTunes.Models.SongModel,

  initialize: function(){
  }

});
