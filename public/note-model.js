'use strict';

(function(exports) {
  class NoteModel {
    constructor(text, id){
      this._text = text;
      this._id = id;
    }

    getText() {
      return this._text;
    }

    getId() {
      return this._id;
    }
  }

  exports.NoteModel = NoteModel;
})(this);
