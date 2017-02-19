'use strict';

describe('NoteList', function() {
  let noteList

  beforeEach(function() {
    noteList = new NoteListModel;
    noteList.createNote("My favourite language is JavaScript");
    noteList.createNote("My favourite test framework is Jasmine");
  })

  describe('#createNote', function() {

    it('creates a new note and adds to the list', function() {
      expect(noteList.notes[0] instanceof NoteModel).toBeTruthy();
    })

    it("gives the first note an id of 0", function() {
      expect(noteList.notes[0].getId()).toEqual(0);
    })

    it("gives the second note an id of 1", function() {
      expect(noteList.notes[1].getId()).toEqual(1);
    })
  })

  describe('#getNotes', function() {

    it('returns all the notes in the list', function() {
      expect(noteList.getNotes()).toEqual(noteList.notes);
    })
  })
})
