'use strict';

(function(exports){

  class NoteController {
    constructor(noteListModel){
      this._noteListModel = noteListModel;
      this._app = document.getElementById("app");
    }

    change(){
      this._app.innerHTML = "howdy";
    }
  }

  exports.NoteController = NoteController;
})(this);
