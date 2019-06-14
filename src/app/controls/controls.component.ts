import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  ignoreWhitespaces: any = false;
  ignoreCase: boolean = false;
  copyingMode: boolean = false;

  optionChange(optionId: string, event: any) {
    let status =  event.target.checked;

    switch (optionId) {
      case "optIgnoreWhitespaces":
        this.ignoreWhitespaces = status;
        break;
      case "optIgnoreCase":
        this.ignoreCase = status;
        break;
      case "optCopyingMode":
        this.copyingMode = status;
        break;
    }

    console.log(optionId + ": " + status);
  }


  compare(): boolean {
    console.log("compare called")
    return false;
  }




  constructor() { }

  ngOnInit() {
  }

}
