'use strict';

describe('NoteListView', function() {
  let NoteListView = require('../views/note-list-view');
  let noteListView,
      noteListMock;

  beforeEach(function() {
    noteListMock = {};
    noteListView = new NoteListView(noteListMock)
  })

  describe("::new", function() {
    it("should create new noteListView instance", function() {
      expect(noteListView instanceof NoteListView).toBe(true);
    });
  });
})
