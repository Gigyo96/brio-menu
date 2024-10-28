import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-brioche-lievitati',
  templateUrl: './brioche-lievitati.component.html',
  styleUrls: ['./brioche-lievitati.component.scss'],
})
export class BriocheLievitatiComponent {
  faArrowLeft = faArrowLeft;

  constructor(public ss: SectionsService) {}
}
