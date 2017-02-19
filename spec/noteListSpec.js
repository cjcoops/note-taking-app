'use strict';

describe('NoteList', function() {
  let NoteList = require('../models/note-list-model')
  let noteList
  let Note = require('../models/note-model')

  beforeEach(function() {
    noteList = new NoteList;
  })

  it('stores an array of note models', function() {
    expect(noteList.notes).toEqual([])
  })

  describe('#createNote', function() {

    it('creates a new note and adds to the list', function() {
      noteList.createNote("My favourite language is JavaScript");
      expect(noteList.notes[0] instanceof Note).toBeTruthy();
    })

  })
})
