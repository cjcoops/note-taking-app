'use strict';

let chai = require('chai'),
    path = require('path');

chai.should();

let Note = require(path.join(__dirname, '..', 'models/note-model'));

describe('Note', function() {

  it('stores the note content in its text property', function() {
    var note = new Note("My favourite language is JavaScript");
    note.text.should.equal("My favourite language is JavaScript")
  })

})
