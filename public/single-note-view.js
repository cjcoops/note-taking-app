"use strict";

(function(exports){

  class SingleNoteView {
    constructor(noteModel){
      this._note = noteModel;
    }

    returnHTML(){
      return "<div>" + this._note.getText() + "</div>";
    }
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
