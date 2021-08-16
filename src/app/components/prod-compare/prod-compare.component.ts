import {
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  IntersectionObserverService,
  INTERSECTION_THRESHOLD,
} from '@ng-web-apis/intersection-observer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prod-compare',
  templateUrl: './prod-compare.component.html',
  styleUrls: ['./prod-compare.component.scss'],
  providers: [
    IntersectionObserverService,
    {
      provide: INTERSECTION_THRESHOLD,
      useValue: 0.75,
    },
  ],
})
export class ProdCompareComponent implements OnInit, OnDestroy {
  isIntersecting = false;
  private entriesSub?: Subscription;
  @HostBinding('class')
  get getIntersectingClass(): string {
    return this.isIntersecting ? 'intersecting' : '';
  }

  constructor(
    @Inject(IntersectionObserverService)
    private entries$: IntersectionObserverService
  ) {}

  ngOnInit(): void {
    this.entriesSub = this.entries$.subscribe(([entry, ...entries]) => {
      this.isIntersecting = entry.isIntersecting;
    });
  }

  ngOnDestroy(): void {
    this.entriesSub?.unsubscribe();
  }
}
