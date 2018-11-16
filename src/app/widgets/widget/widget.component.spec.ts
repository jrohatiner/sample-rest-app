import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { WidgetDetailComponent } from '../widget-detail/widget-detail.component';
import { AppMaterialModule } from '../../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { WidgetsService } from '../../shared/widgets.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../testing/router.stubs';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

class WidgetServiceStub {
  load() {
    return Observable.of({})
  }
}


describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [ WidgetComponent, WidgetDetailComponent ],
      providers: [
        {provide: WidgetsService, useClass: WidgetServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed
      .createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
