'use strict';

(function(exports){

  class NoteController {
    constructor(app, noteListModel){
      this._noteListModel = noteListModel;
      this._noteListView = new NoteListView(this._noteListModel)
      this._app = app;
      this.displayList();
    }

    displayList(){
      this._app.innerHTML = this._noteListView.returnHTML();
    }
  }

  exports.NoteController = NoteController;
})(this);
