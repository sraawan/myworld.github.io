import { Component, OnInit,Input } from '@angular/core';
import { Code } from './code';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit,Code {
  @Input() alpha2Code
  @Input() alpha3Code
  @Input() numericCode
  @Input() callingCodes
  @Input() currencies
  @Input() topLevelDomain

  constructor() { }

  ngOnInit() {
  }

}
