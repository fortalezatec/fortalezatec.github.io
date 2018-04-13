function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-20.79222,-51.723277),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("tl"), mapOptions);
}