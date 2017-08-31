import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPermissionToRoleComponent } from './insert-permission-to-role.component';

describe('InsertPermissionToRoleComponent', () => {
  let component: InsertPermissionToRoleComponent;
  let fixture: ComponentFixture<InsertPermissionToRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPermissionToRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPermissionToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
