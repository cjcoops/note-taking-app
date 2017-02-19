'use strict';

class NoteListView {

  constructor(noteListModel){
    this._noteListModel = noteListModel;
  }

  returnHTML(){
    let html = "<ul>"
    html += "</ul>"
    return html;
  }

}

module.exports = NoteListView;
