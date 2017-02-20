'use strict';

describe('NoteController', function() {
  let noteController,
      appDivMock,
      noteListMock,
      noteListViewMock,
      noteMock;

  beforeEach(function() {
    noteListViewMock = jasmine.createSpyObj("noteListView",["returnHTML"])
    noteListViewMock.returnHTML.and.returnValue("<ul><li><div>Favourite food: pesto</div></li></ul>")
    appDivMock = {}
    noteListMock = {}
    noteController = new NoteController(appDivMock, noteListViewMock, noteListMock)
  })

  describe("::new", function() {
    it("creates a new noteController instance", function() {
      expect(noteController instanceof NoteController).toBe(true);
    });
  });

  describe("#displayList", function() {
    it("sets the innerHTML of the app element to the list of notes", function() {
      expect(appDivMock.innerHTML).toEqual("<ul><li><div>Favourite food: pesto</div></li></ul>")
    })
  })

  // describe("#displaySingleNote", function() {
  //   it("sets the innerHTML of the app element to a single note's text", function() {
  //     noteController.displaySingleNote(noteMock)
  //     expect(appDivMock.innerHTML).toEqual("<ul><li><div>Favourite food: pesto</div></li></ul>")
  //   })
  // })
});
