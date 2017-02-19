'use strict';

let Note = require('../models/note-model')

class NoteList {
  constructor(){
    this.notes = [];
  }

  createNote(text) {
    let newNote = new Note(text)
    this._addNote(newNote)
  }
  
  _addNote(note) {
    this.notes.push(note);
  }
}

module.exports = NoteList;
