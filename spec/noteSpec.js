'use strict';

describe('Note', function() {
  let note

  beforeEach(function() {
    note = new Note("My favourite language is JavaScript");
  })

  it('stores the note content in its text property', function() {
    expect(note.text).toEqual("My favourite language is JavaScript")
  })

  describe('#getText', function() {

    it('returns the text', function() {
      expect(note.getText()).toEqual("My favourite language is JavaScript");
    })
  })
})
