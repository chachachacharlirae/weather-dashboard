var owmAPI = "788d5638d7c8e354a162d6c9747d1bdf";
var currentCity = "";
var lastCity = "";

function getURLParams() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('key')) {
        owmAPI = urlParams.get('key');
    }
}

