"use strict";

describe("SingleNoteView", function() {
  let singleNoteView,
      noteMock;

  beforeEach(function() {
    noteMock = jasmine.createSpyObj("note",["getText"]);
    noteMock.getText.and.returnValue("Favourite drink: seltzer");
    singleNoteView = new SingleNoteView(noteMock);
  })

  describe("::new", function() {
    it("should create a new single note view", function() {
      expect(singleNoteView instanceof SingleNoteView).toBe(true);
    })
  })

  describe("#returnHTML", function() {
    it("returns HTML with the note content", function() {
      expect(singleNoteView.returnHTML()).toEqual("<div>Favourite drink: seltzer</div>")
    })
  })
})
