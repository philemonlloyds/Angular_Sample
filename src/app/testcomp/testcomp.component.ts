import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  letMePassAVariable = 'I am from the testcomp.ts';
  disableRandomStuff = false;
  serverName ='NewServer';

  constructor() { }

  ngOnInit() {
  }

  OnClickOfRandStuff(){
    this.letMePassAVariable = 'I am glad you clicked the add random stuff button';
  }
   
  DisableClickOfRandStuff(){
    setTimeout(() =>{
      this.disableRandomStuff = true;
    },2000)
  }  

}
