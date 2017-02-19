'use strict';

describe('NoteController', function() {
  let noteController,
      appDivMock,
      noteListMock,
      noteListViewMock;

  beforeEach(function() {
    noteListViewMock = jasmine.createSpyObj("noteListView",["returnHTML"])
    noteListViewMock.returnHTML.and.returnValue("<ul><li><div>Favourite food: pesto</div></li></ul>")
  })

  describe("::new", function() {
    it("creates a new noteController instance", function() {
      appDivMock = {}
      noteListMock = {}
      noteController = new NoteController(appDivMock, noteListViewMock, noteListMock)
      expect(noteController instanceof NoteController).toBe(true);
    });
  });

  describe("#displayList", function() {
    it("sets the innerHTML of the app element to the list of notes", function() {
      expect(appDivMock.innerHTML).toEqual("<ul><li><div>Favourite food: pesto</div></li></ul>")
    })
  })
});
