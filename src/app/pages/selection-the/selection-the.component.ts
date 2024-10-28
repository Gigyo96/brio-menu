import { Component } from '@angular/core';
import { faArrowLeft, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-selection-the',
  templateUrl: './selection-the.component.html',
  styleUrls: ['./selection-the.component.scss'],
})
export class SelectionTheComponent {
  faArrowLeft = faArrowLeft;
  faLeaf = faLeaf;

  constructor(public ss: SectionsService) {}
}
