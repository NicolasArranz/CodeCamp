$(document).ready(function() {
        $.getJSON('https://api.airtable.com/v0/appOhwMHkICe6nl1S/musics?api_key=keyyJKAl9mB385rEZ',
                  function(data) {
                          $.each(data.records, function(key,val) {
                              $('.table').append("<tr><th scope='row'>-</th><td><a href='https://www.facebook.com/Chapman.Max/'>" + val.fields.Artist + "</td><td>" + val.fields.Track + "</td><td>" + val.fields.Label + "</td><td><iframe src='https://open.spotify.com/embed?uri=" +  val.fields['spotify-link'] + "' height='80' frameborder='0' allowtransparency='true'></iframe></td><td>" + val.fields.Wikipedia + "</td><td><a href='https://twitter.com/share' class='twitter-share-button' data-url='https://open.spotify.com/embed?uri=" +  val.fields['spotify-link'] + "' data-via='ukundergroundm'>Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script></td></tr>") ; 

                          });

                  });
});
