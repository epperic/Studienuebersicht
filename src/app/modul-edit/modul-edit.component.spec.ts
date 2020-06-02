import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulEditComponent } from './modul-edit.component';

describe('ModulEditComponent', () => {
  let component: ModulEditComponent;
  let fixture: ComponentFixture<ModulEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
