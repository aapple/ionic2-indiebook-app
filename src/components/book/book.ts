import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { BookDetailsPage } from '../../pages/book-details/book-details';
import { ReadingPage } from '../../pages/reading/reading';


@Component({
  selector: 'book',
  templateUrl: 'book.html'
})
export class BookComponent {

  constructor(public appCtrl: App) {

  }

  openBook() {
    this.appCtrl.getRootNav().push(ReadingPage);
  }
}
