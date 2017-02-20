'use strict';

describe('NoteListView', function() {
  let noteListView,
      noteListMock,
      noteMock,
      noteMock2;

  beforeEach(function() {
    noteMock2 = jasmine.createSpyObj("note", ["getText","getId"]);
    noteMock2.getText.and.returnValue("Favourite drink: seltzer");
    noteMock2.getId.and.returnValue(1);

    noteMock = jasmine.createSpyObj("note", ["getText","getId"]);
    noteMock.getText.and.returnValue("Favourite food: pesto");
    noteMock.getId.and.returnValue(0);

    noteListMock = jasmine.createSpyObj("noteList",["getNotes"])

    noteListView = new NoteListView(noteListMock)
  })

  describe("::new", function() {
    it("should create new noteListView instance", function() {
      noteListMock = {};
      noteListView = new NoteListView(noteListMock)
      expect(noteListView instanceof NoteListView).toBe(true);
    });
  });

  describe("#returnHTML", function() {

    it("returns HTML when list is empty", function() {
      noteListMock.getNotes.and.returnValue([])
      expect(noteListView.returnHTML()).toEqual("<ul></ul>")
    })

    it("returns HTML when list has one note", function() {
      noteListMock.getNotes.and.returnValue([noteMock])
      expect(noteListView.returnHTML()).toEqual("<ul><li><a href='#0'>Favourite food: pest...</a></li></ul>")
    })

    it("returns HTML when list has two notes", function() {
      noteListMock.getNotes.and.returnValue([noteMock, noteMock2])
      expect(noteListView.returnHTML()).toEqual("<ul><li><a href='#0'>Favourite food: pest...</a></li><li><a href='#1'>Favourite drink: sel...</a></li></ul>")
    })
  })
})
