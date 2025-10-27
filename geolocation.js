let map;
let directionsService;
let directionsRenderer;

const initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom:6,
        center: {lat: 22.5744, lng: 88.3629}
        //Default value for center
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    //auto-recommendation suggestion of nearby areas
    const originInput = new google.maps.places.Autocomplete(
        document.getElementById("origin")
    );

    const destinationInput = new google.maps.places.Autocomplete(
        document.getElementById("destination")
    );
};

window.onload = initMap;

const calculateRoute = () => {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    if(!origin || !destination) {
        alert("Fill the input fields properly");
        return;
    }

const request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING
};

directionsService.route(request,(result,status) => {
    if(status === "OK") {
        directionsRenderer.setDirections(result);
    } else {
        alert("Direction Request Failed:" + status);
    }
})
}


