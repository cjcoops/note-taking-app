'use strict';

let chai = require('chai'),
    path = require('path');

chai.should();

let Note = require(path.join(__dirname, '..', 'models/note-model'));

describe('Note', function() {
  let note;

  beforeEach(function() {
    note = new Note("My favourite language is JavaScript");
  })

  it('stores the note content in its text property', function() {
    note.text.should.equal("My favourite language is JavaScript")
  })

  describe('#getText', function() {

    it('returns the text', function() {
      note.getText().should.equal("My favourite language is JavaScript");
    })
  })
})
