import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsSearchComponent } from './widgets-search.component';
import { AppMaterialModule } from '../../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetsService } from '../../shared/widgets.service';

class WidgetsServiceStub {}

describe('WidgetsSearchComponent', () => {
  let component: WidgetsSearchComponent;
  let fixture: ComponentFixture<WidgetsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, BrowserAnimationsModule],
      declarations: [ WidgetsSearchComponent ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
