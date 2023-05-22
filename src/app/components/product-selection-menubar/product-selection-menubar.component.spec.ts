import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionMenubarComponent } from './product-selection-menubar.component';

describe('ProductSelectionMenubarComponent', () => {
  let component: ProductSelectionMenubarComponent;
  let fixture: ComponentFixture<ProductSelectionMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSelectionMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
