"use strict";

(function() {
  window.addEventListener("load", function() {
    let app = document.getElementById("app");

    let noteList = new NoteListModel();
    noteList.createNote("Favourite drink: seltzer")

    let noteListView = new NoteListView(noteList);

    new NoteController(app, noteListView, noteList);
  });
})();
