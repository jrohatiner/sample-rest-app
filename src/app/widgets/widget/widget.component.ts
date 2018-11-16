import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WidgetsService } from '../../shared/widgets.service';

import { Widget } from '../../shared/widget.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  widget: Widget;

  constructor(
    private widgetsService: WidgetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .map((params: ParamMap) => +params.get('id'))
      .switchMap(id => this.widgetsService.load(id))
      .subscribe(widget => this.widget = widget);
  }

  saveWidget(widget) {
    // Do something
  }

  cancel(widget) {
    // Do something
  }

}
