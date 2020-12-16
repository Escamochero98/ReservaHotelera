import { placeHolderGeneral } from "./placeholders.js";

placeHolderGeneral();
document.getElementById("buscar").addEventListener("click", recogidaDeDatos);

$(document).ready(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return contenidoHabitaciones;
    },
  });
});

$(document).on("click", "#habitaciones", function () {
  document
    .getElementById("addRoom")
    .addEventListener("click", añadirHabitacion);
});

$(document).on("click", "#addRoom", function () {
  document
    .getElementById("deleteNode")
    .addEventListener("click", eliminarHabitacion);
});

$(document).on("click", "#done", function () {
  $(".popover").popover("hide");
  actualizarPopover();
  placeHolderHabitacion();
});

var contenidoHabitaciones = `<div id="todo">
        <div id="primeParte">
            <div id="seccion" style="padding-top:1.9em">
                <h1 id="habitacionNum">1 Room</h1>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Adultos</label>
                    <select class="form-control" id="numAdultos">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Niños</label>
                    <select class="form-control" id="numNinios">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="vl"></div>
        </div>
        <div id="segundaParte">
            <button id="addRoom">Add Room</button>
            <button id="done">Done</button>
        </div>
    </div>`;

function añadirHabitacion() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);

  var primeParte = document.getElementById("primeParte");
  primeParte.appendChild(clon);
  $(".popover").popover("update");

  var dataIds = document.querySelectorAll("#borrarConte");
  var javascriptLastDataID = dataIds[dataIds.length - 1];
  javascriptLastDataID.addEventListener("click", eliminarHabitacion);
  añadirID();
}

function eliminarHabitacion() {
  var boton = event.target;
  var primeParte = boton.parentNode.parentNode.parentNode;
  var seccion = boton.parentNode.parentNode;
  var barraEspace = boton.parentNode.parentNode.nextElementSibling;
  primeParte.removeChild(seccion);
  primeParte.removeChild(barraEspace);

  añadirID();
}

function añadirID() {
  var dataIds = document.querySelectorAll("#habitacionNum");
  dataIds.forEach(function (element, index) {
    element.innerHTML = index + 1 + " Room";
  });
}

function actualizarPopover() {
  var todo = document.getElementById("todo");
  contenidoHabitaciones = todo;
}

function recogidaDeDatos() {
  var hotel = document.getElementById("nombre").value;
  if (hotel.trim() != "") {
    var fechaEntrada = document.getElementById("calendario").value;
    var numNoches = document.getElementById("numNoches").value;

    var habitaciones = document.getElementById("habitaciones").value;
    if (habitaciones.trim() != "") {
      console.log("Nombre del hotel: " + hotel);
      console.log("Fecha de entrada: " + fechaEntrada);
      console.log("Numero de noches: " + numNoches);
      console.log("Registro de habitaciones: " + habitaciones);
    } else {
      alert(
        "No ha introducido un parámetro adecuado en el registro de habitaciones. Inténtelo de nuevo."
      );
    }
  } else {
    alert("No ha introducido el nombre del hotel. Inténtelo de nuevo.");
  }
}

function placeHolderHabitacion() {
  var habitaciones = document.querySelectorAll("#seccion");
  var numHabitaciones = habitaciones.length;
  var numHuespedes = 0;

  habitaciones.forEach(function (element, index) {
    var selectorAdultos;
    var selectorNinios;

    if (index == 0) {
      selectorAdultos =
        element.firstElementChild.nextElementSibling.firstElementChild
          .nextElementSibling;
      selectorNinios =
        element.firstElementChild.nextElementSibling.nextElementSibling
          .firstElementChild.nextElementSibling;
    } else {
      selectorAdultos =
        element.firstElementChild.nextElementSibling.nextElementSibling
          .firstElementChild.nextElementSibling;
      selectorNinios =
        element.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling.firstElementChild.nextElementSibling;
    }

    var numAdultos =
      selectorAdultos.options[selectorAdultos.selectedIndex].value;
    var numNinios = selectorNinios.options[selectorNinios.selectedIndex].value;

    numHuespedes += parseInt(numAdultos) + parseInt(numNinios);
  });

  var placeHolderUpdate = numHabitaciones + " room " + numHuespedes + " guest";

  document.getElementById("habitaciones").value = placeHolderUpdate;
}
