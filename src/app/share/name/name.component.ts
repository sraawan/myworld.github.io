import { Component, OnInit,Input } from '@angular/core';
import { Name } from './name';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit,Name {
  @Input() name;
  @Input() nativeName;
  @Input()  capital;
  @Input() translations;
  public translationKey:any =[];
  



  constructor() { }

  ngOnInit() {
    

}
}
