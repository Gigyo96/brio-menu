import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-tea-time',
  templateUrl: './tea-time.component.html',
  styleUrls: ['./tea-time.component.scss'],
})
export class TeaTimeComponent {
  faArrowLeft = faArrowLeft;

  constructor(public ss: SectionsService) {}
}
