import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Widget } from '../../shared';
import { trigger, transition, state, group, style, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter, :leave, * => pending', []),
      transition('* => *', [
        // animate both the newly entered and removed items on the page
        // at the same time
        group([
          query(':enter', [
            style({ opacity: 0, height: '0px' }),
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ], { optional: true }),

          query(':leave', [
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, height: '0px', borderTop: 0, borderBottom: 0 }))
            ])
          ], { optional: true })
        ]),
      ]),
    ]),
  ]
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  animationsDisabled = true;

  trackWidget(index, widget) {
    return widget.id;
  }

  //ngOnInit() {
  //  setTimeout(() => {
  //    this.animationsDisabled = false;
  //  }, 500)
  //}

  prepareListState() {
    return this.widgets ? this.widgets.length : 'pending';
  }
}

