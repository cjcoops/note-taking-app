"use strict";

(function() {
  window.addEventListener("load", function() {
    let app = document.getElementById("app");

    let noteList = new NoteListModel();
    noteList.createNote("Favourite drink: seltzer")

    console.log(noteList)
    new NoteController(app, noteList);
  });
})();
