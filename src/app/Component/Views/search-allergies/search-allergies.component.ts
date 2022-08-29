import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { AllergieInterface } from 'src/app/allergie-interface';
import { AllergiesListInterface } from 'src/app/allergies-list-interface';
import { AllergiesService } from 'src/app/services/allergies.service';

@Component({
  selector: 'app-search-allergies',
  templateUrl: './search-allergies.component.html',
  styleUrls: ['./search-allergies.component.less'],
  host: {'class': 'col-md-6 col-lg-6 col-sm-6'}
})
export class SearchAllergiesComponent implements OnInit {
  allergies$!: Observable<AllergiesListInterface[]>;
  private searchTerms = new Subject<string>();

  constructor(private allergieSrv: AllergiesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.allergies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.allergieSrv.searchAllergies(term)),
    );
  }
}
