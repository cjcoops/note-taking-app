'use strict';

(function(exports){

  class NoteListModel {
    constructor(){
      this.notes = [];
    }

    createNote(text) {
      let newNote = new NoteModel(text)
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
