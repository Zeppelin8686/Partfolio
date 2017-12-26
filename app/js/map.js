    //  // When the window has finished loading create our google map below
    //  google.maps.event.addDomListener(window, 'load', init);
     
    //      function init() {
    //          // Basic options for a simple Google Map
    //          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    //          var mapOptions = {
    //              // How zoomed in you want the map to start at (always required)
    //              zoom: 16,

    //              // The latitude and longitude to center the map (always required)
    //              center: new google.maps.LatLng(25.1146, 55.2024), // New York

    //              // How you would like to style the map. 
    //              // This is where you would paste any style found on Snazzy Maps.
    //              styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffbb00"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"hue":"#ffbb00"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"hue":"#ffbb00"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#ffe600"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1.00"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.text.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#cecece"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ffe600"}]}]
    //          };

    //          // Get the HTML DOM element that will contain your map 
    //          // We are using a div with id="map" seen below in the <body>
    //          var mapElement = document.getElementById('map');

    //          // Create the Google Map using our element and options defined above
    //          var map = new google.maps.Map(mapElement, mapOptions);

    //          // Let's also add a marker while we're at it
    //          var marker = new google.maps.Marker({
    //              position: new google.maps.LatLng(25.1147, 55.2038),
    //              map: map,
    //              title: 'Snazzy!'
    //          });
    //      }

    var map;
    function initMap(){
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 25.1147, lng: 55.2038},
        zoom: 16, // typical is usually 8 or 9
        styles: 
        [
          {
              "featureType": "all",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#ffbb00"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "hue": "#ffbb00"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "hue": "#ffbb00"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffe600"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#2c2c2c"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#cecece"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffe600"
                  }
              ]
          }
      ]
      });
    }// end initMap function

    initMap();