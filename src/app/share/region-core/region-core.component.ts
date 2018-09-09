import { Component, OnInit,Input } from '@angular/core';
import {RegionCore} from './region-core'


@Component({
  selector: 'app-region-core',
  templateUrl: './region-core.component.html',
  styleUrls: ['./region-core.component.css']
})
export class RegionCoreComponent implements RegionCore {

  @Input() regionName;
  @Input() img;

  constructor() { }

  ngOnInit() {
  }

}
