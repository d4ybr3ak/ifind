import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/services.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  saveProducts(): void {
    const data = {
      title: this.products.title,
      description: this.products.description
    };

    this.productsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProducts(): void {
    this.submitted = false;
    this.products = {
      title: '',
      description: '',
      published: false
    };
  }

}
