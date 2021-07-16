import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { login } from '@example/auth';

@Component({
  selector: 'weincode-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute){
    this.id=+this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    // console.log(login())
  }

}
