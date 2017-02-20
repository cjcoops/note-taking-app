'use strict';

(function(exports){

  class NoteController {
    constructor(app, noteListView, noteListModel){
      this._noteListModel = noteListModel;
      this._noteListView = noteListView;
      this._singleNoteView = null;
      this._app = app;
      this.displayList();
      this.makeUrlChangeShowSingleNote();
    }

    displayList(){
      this._app.innerHTML = this._noteListView.returnHTML();
    }

    makeUrlChangeShowSingleNote() {
      let self = this;
      window.addEventListener("hashchange", function() {
        self.showSingleNote(self.getNoteFromId())
      });
    }

    showSingleNote(note) {
      this._singleNoteView = new SingleNoteView(note)
      this.displaySingleNote();
    }

    getNoteFromId() {
      return this._noteListModel.notes[this.getNoteIdFromUrl()]
    }

    getNoteIdFromUrl(){
      return parseInt(location.hash.split("#")[1]);
    }

    displaySingleNote() {
      this._app.innerHTML = this._singleNoteView.returnHTML();
    }
  }

  exports.NoteController = NoteController;
})(this);
