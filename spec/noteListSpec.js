'use strict';

describe('NoteList', function() {
  let noteList

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

  describe('#getNotes', function() {

    it('returns all the notes in the list', function() {
      expect(noteList.getNotes()).toEqual(noteList.notes);
    })
  })
})
