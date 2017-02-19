'use strict';

(function(exports){

  class NoteListModel {
    constructor(){
      this.notes = [];
    }

    createNote(text) {
      let newNote = new NoteModel(text, 0)
      this._addNote(newNote)
    }

    getNotes() {
      return this.notes
    }

    _addNote(note) {
      this.notes.push(note);
    }
  }

  exports.NoteListModel = NoteListModel;

})(this);
