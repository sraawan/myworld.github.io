import { Component, OnInit,Input } from '@angular/core';
import { Language } from './language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit,Language {
  public nativeLanguage: any;
  // taking input of langauges array from parent component
  @Input() languages = [];

  constructor() { }

  ngOnInit() {
    this.nativeLanguage = this.languages[0]
  }

}
