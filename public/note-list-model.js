'use strict';

(function(exports){

  class NoteList {
    constructor(){
      this.notes = [];
    }

    createNote(text) {
      let newNote = new Note(text)
      this._addNote(newNote)
    }

    getNotes() {
      return this.notes
    }

    _addNote(note) {
      this.notes.push(note);
    }
  }

  exports.NoteList = NoteList;

})(this);
