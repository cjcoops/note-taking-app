'use strict';

let chai = require('chai'),
    path = require('path');

chai.should();

let NoteList = require(path.join(__dirname, '..', 'models/note-list-model'));

describe('NoteList', function() {
  let noteList;

  beforeEach(function() {
    noteList = new NoteList;
  })

  it('stores an array of note models', function() {
    noteList.notes.should.be.empty
  })

  // describe('#getText', function() {
  //
  //   it('returns the text', function() {
  //     note.getText().should.equal("My favourite language is JavaScript");
  //   })
  // })
})
