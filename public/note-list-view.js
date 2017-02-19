'use strict';

(function(exports){
  class NoteListView {
    constructor(noteListModel){
      this._noteListModel = noteListModel;
    }

    returnHTML(){
      let html = "<ul>";
      let notes = this._noteListModel.getNotes();
      for (var i=0; i<notes.length; i++) {
        html += "<li><div>" + notes[i].getText() + "</div></li>";
      }
      html += "</ul>";
      return html;
    }
  }

  exports.NoteListView = NoteListView;
})(this);
