
function initMap() {
    let losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });

    // The marker, positioned at losAngeles
    let marker = new google.maps.Marker({position: losAngeles, map: map});
}