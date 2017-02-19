'use strict';

describe('Note', function() {
  let note

  beforeEach(function() {
    note = new NoteModel("My favourite language is JavaScript", 0);
  })

  it('stores the note content in its text property', function() {
    expect(note._text).toEqual("My favourite language is JavaScript")
  })

  it('stores the note id in its id property', function() {
    expect(note._id).toEqual(0)
  })

  describe('#getText', function() {
    it('returns the text', function() {
      expect(note.getText()).toEqual("My favourite language is JavaScript");
    })
  })

  describe('#getId', function() {
    it('returns the id', function() {
      expect(note.getId()).toEqual(0);
    })
  })
})
