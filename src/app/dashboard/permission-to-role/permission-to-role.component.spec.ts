import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionToRoleComponent } from './permission-to-role.component';

describe('PermissionToRoleComponent', () => {
  let component: PermissionToRoleComponent;
  let fixture: ComponentFixture<PermissionToRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionToRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
