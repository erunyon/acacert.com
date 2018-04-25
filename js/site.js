document.addEventListener('DOMContentLoaded', function(){

  // Link Tracking
  document.querySelectorAll('a').forEach(function(item) {
    var link = item;
    // External Link Tracking
    if(link.href.indexOf(location.hostname) == -1){
      link.addEventListener('click', function(e){
        try{ ga( 'send', 'event', 'UserAction', 'External Link', e.target.href ); } catch(err){}
      }, false);
    }

    // PDF Download tracking
    if(link.href.indexOf('.pdf') != -1){
      link.addEventListener('click', function(e){
        try{ ga( 'send', 'event', 'UserAction', 'PDF Download', e.target.href ); } catch(err){}
      }, false);
    }

  });

}, false);
