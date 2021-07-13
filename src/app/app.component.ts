import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

// import { publicApiFunction } from '@weincode/shared'


@Component({
  selector: 'mf-images',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-images';
  message: string;
  bordered$ = fromEvent(window, 'customEvent');


  ngOnInit() {

    // this.message = localStorage.getItem('dataSource');

    this.bordered$.subscribe(res => {
      this.message = res['detail']['message'];
      // console.log("Message form header" + res['detail']['message'])
      console.log("Message form header" + res['detail']['data']['name'])

    })
    // console.log(publicApiFunction())
    // console.log(hello)
    // auth$.subscribe(res=>{
    //   console.log(res)
    // })

    // login('')
  }
}
