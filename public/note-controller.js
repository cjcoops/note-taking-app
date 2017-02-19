'use strict';

(function(exports){

  class NoteController {
    constructor(app, noteListView, noteListModel){
      this._noteListModel = noteListModel;
      this._noteListView = noteListView;
      this._app = app;
      this.displayList();
    }
  
    displayList(){
      this._app.innerHTML = this._noteListView.returnHTML();
    }
  }

  exports.NoteController = NoteController;
})(this);
