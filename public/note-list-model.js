'use strict';

(function(exports){

  class NoteListModel {
    constructor(){
      this.notes = [];
      this._count = 0;
    }

    createNote(text) {
      let newNote = new NoteModel(text, this._count)
      this._addNote(newNote)
    }

    getNotes() {
      return this.notes
    }

    _addNote(note) {
      this.notes.push(note);
      this._updateCount();
    }

    _updateCount() {
      this._count ++;
    }


  }

  exports.NoteListModel = NoteListModel;

})(this);
