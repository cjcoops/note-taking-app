"use strict";

(function() {
  window.addEventListener("load", function() {
    var app = document.getElementById("app");

    new NoteController(app, new NoteModel());
  });
})();
