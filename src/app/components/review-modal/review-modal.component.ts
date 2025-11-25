import { Component, OnDestroy } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent implements OnDestroy {
  faStar = faStar;

  openReviewLinks() {
    window.open('https://g.page/r/CW52CXdddSyMEBM/review', '_blank');
  }

  ngOnDestroy(): void {
    localStorage.setItem('reviewModalClosedAt', Date.now().toString());
  }
}
