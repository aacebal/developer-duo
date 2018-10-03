import { Component, OnInit, Input } from '@angular/core';
import { DeveloperInfo } from 'src/app/models/developer-info.model';

@Component({
  selector: 'app-developer-info',
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.scss']
})
export class DeveloperInfoComponent implements OnInit {
  @Input() info: DeveloperInfo;

  constructor() { }

  ngOnInit() {
  }

}
