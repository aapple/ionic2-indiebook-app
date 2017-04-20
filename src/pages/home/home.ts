import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { BookStoreTabPage } from '../book-store-tab/book-store-tab';
import { MyBooksTabPage } from '../my-books-tab/my-books-tab';
import { CommentTabPage } from '../comment-tab/comment-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mybooksTab = MyBooksTabPage;
  bookStoreTab = BookStoreTabPage;
  commentTab = CommentTabPage;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  ionViewDidEnter() {
   this.menuCtrl.enable(true, 'menu-customer');
   this.menuCtrl.enable(false, 'menu-publisher');
   this.menuCtrl.enable(false, 'outline-book');
  }
}
