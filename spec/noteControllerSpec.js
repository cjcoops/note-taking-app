'use strict';

describe('NoteController', function() {
  let noteController,
      appDivMock,
      noteListMock,
      noteListViewMock;

  beforeEach(function() {
    noteListViewMock = jasmine.createSpyObj("noteListView",["returnHTML"])
    noteListViewMock.returnHTML.and.returnValue("gg")
  })

  describe("::new", function() {
    it("should create a new noteController instance", function() {
      appDivMock = {}
      noteListMock = {}
      noteController = new NoteController(appDivMock, noteListViewMock, noteListMock)
      expect(noteController instanceof NoteController).toBe(true);
    });
  });
});
