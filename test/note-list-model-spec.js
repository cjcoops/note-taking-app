'use strict';

let chai = require('chai'),
    path = require('path'),
    sinon = require('sinon');

let expect = chai.expect;

let NoteList = require(path.join(__dirname, '..', 'models/note-list-model'));

describe('NoteList', function() {
  let noteList;

  beforeEach(function() {
    noteList = new NoteList;
  })

  it('stores an array of note models', function() {
    expect(noteList.notes).to.be.empty
  })

  describe('#addNote', function() {

    it('adds a new note to the list', function() {
      let mockNote = {};
      noteList.addNote(mockNote);
      expect(noteList.notes).to.include(mockNote)
    })
  })
})
