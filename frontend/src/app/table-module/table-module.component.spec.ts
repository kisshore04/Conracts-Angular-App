import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModuleComponent } from './table-module.component';

describe('TableModuleComponent', () => {
  let component: TableModuleComponent;
  let fixture: ComponentFixture<TableModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableModuleComponent]
    });
    fixture = TestBed.createComponent(TableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
