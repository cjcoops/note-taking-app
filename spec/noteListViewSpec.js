'use strict';

describe('NoteListView', function() {
  let NoteListView = require('../views/note-list-view');
  let noteListView,
      noteListMock;
  //
  // beforeEach(function() {
  //   noteListMock = {};
  //   noteListView = new NoteListView(noteListMock)
  // })

  describe("::new", function() {
    it("should create new noteListView instance", function() {
      noteListMock = {};
      noteListView = new NoteListView(noteListMock)
      expect(noteListView instanceof NoteListView).toBe(true);
    });
  });

  describe("#returnHTML", function() {

    it("returns HTML when list is empty", function() {
      noteListMock = {notes: []};
      noteListView = new NoteListView(noteListMock)
      expect(noteListView.returnHTML()).toEqual("<ul></ul>")
    })
  })
})
