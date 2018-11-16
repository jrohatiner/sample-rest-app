import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { WidgetsService } from '../../shared/widgets.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-widgets-search',
  templateUrl: './widgets-search.component.html',
  styleUrls: ['./widgets-search.component.css']
})
export class WidgetsSearchComponent implements OnInit {
  @Output() onResults = new EventEmitter();
  @ViewChild('widgetsSearch') widgetsSearch;

  constructor(private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    const search$ = Observable.fromEvent(this.getNativeElement(this.widgetsSearch), 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      .map((event: any) => event.target.value)
      .switchMap(term => this.widgetsService.search(term))
      .subscribe(widgets => this.onResults.emit(widgets));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
