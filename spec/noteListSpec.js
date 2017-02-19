'use strict';

describe('NoteList', function() {
  let NoteList = require('../models/note-list-model')
  let noteList

  beforeEach(function() {
    noteList = new NoteList;
  })

  it('stores an array of note models', function() {
    expect(noteList.notes).toEqual([])
  })

  describe('#addNote', function() {

    it('adds a new note to the list', function() {
      let mockNote = {};
      noteList.addNote(mockNote);
      expect(noteList.notes).toContain(mockNote)
    })
  })
})
