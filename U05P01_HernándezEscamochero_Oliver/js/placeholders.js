function placeHolderGeneral() {
    placeHolderHotel();
    placeHolderCalendario();
    placeHolderNoches();
    placeHolderhabitaciones();
}

function placeHolderHotel() {
    var nombrePlace = document.getElementById("nombre");
    nombrePlace.setAttribute("placeholder", "Costa Rica");
}

function placeHolderCalendario() {
    var yearMax = "2025-12-31";
    var year = new Date();
    var yearHolder = year.getFullYear() + "-" + ('0' + (year.getMonth() + 1)).slice(-2) + "-" + ('0' + year.getDate()).slice(-2);
    var fechaPlace = document.getElementById("calendario");
    fechaPlace.setAttribute("min", yearHolder);
    fechaPlace.setAttribute("max", yearMax);
    fechaPlace.setAttribute("value", yearHolder);
}

function placeHolderNoches() {
    var nombrePlace = document.getElementById("numNoches");
    nombrePlace.setAttribute("placeholder", "0 noches");
}

function placeHolderhabitaciones() {
    var nombrePlace = document.getElementById("habitaciones");
    nombrePlace.setAttribute("placeholder", "0 rooms 0 guests");
}

export { placeHolderGeneral };