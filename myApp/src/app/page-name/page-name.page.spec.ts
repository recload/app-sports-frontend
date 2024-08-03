import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNamePage } from './page-name.page';

describe('PageNamePage', () => {
  let component: PageNamePage;
  let fixture: ComponentFixture<PageNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
