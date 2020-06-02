import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModullistComponent } from './modullist.component';

describe('ModullistComponent', () => {
  let component: ModullistComponent;
  let fixture: ComponentFixture<ModullistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModullistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModullistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
