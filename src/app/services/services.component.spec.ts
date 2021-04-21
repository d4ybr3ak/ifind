import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsService } from './services.component';

describe('ServicesComponent', () => {
  let component: ProductsService;
  let fixture: ComponentFixture<ProductsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
