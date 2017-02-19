'use strict';

class NoteList {
  constructor(){
    this.notes = [];
  }

  addNote(note) {
    this.notes.push(note);
  }
}

module.exports = NoteList
