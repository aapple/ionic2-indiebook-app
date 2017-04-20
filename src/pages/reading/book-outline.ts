import { Injectable } from '@angular/core';

@Injectable()
export class BookOutlineService{
 findAll() {
  return new Promise((resolve, reject) => resolve([
   {
    page: 1,
    title: 'Title1'
   }, {
      page: 10,
      title: 'Title2'
    },{
      page: 11,
      title: 'Title3'
    },{
      page: 12,
      title: 'Title4'
    },
  ]));
 }
}
