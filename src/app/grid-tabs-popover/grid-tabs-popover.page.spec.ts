import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridTabsPopoverPage } from './grid-tabs-popover.page';

describe('GridTabsPopoverPage', () => {
  let component: GridTabsPopoverPage;
  let fixture: ComponentFixture<GridTabsPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTabsPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridTabsPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
