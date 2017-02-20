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
        html += `<li><a href='#${notes[i].getId()}'>` + this.truncate(notes[i]) + "</a></li>";
      }
      html += "</ul>";
      return html;
    }

    truncate(note){
      let noteText = note.getText()
      if (noteText.length > 20) {
        return noteText.substring(0,20) + "..."
      } else {
        return noteText;
      }
    }
  }

  exports.NoteListView = NoteListView;
})(this);
