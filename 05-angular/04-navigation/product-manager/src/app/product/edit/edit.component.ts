import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Product } from '../../product.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productID: any;
  editProduct: any;
  errors: any;
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
    this.productID = this.route.snapshot.paramMap.get('id');
    console.log(this.productID);
    this.editProduct = { title: '', price: '', url: '' };
    this.onLoad();
  }

  onLoad() {
    this.httpService.getProduct(this.productID).subscribe(data => {
      this.editProduct = data;
      console.log("editing this sheeeit!!", data);
    });
  }

  editThisProduct(editProduct: Product) {
    console.log('we got here');
    this.httpService.updateProduct(editProduct).subscribe(data => {
      console.log('product successfully added');
      this.router.navigate(['/products']);
    },
      error => {
        console.log('some error');
        this.errors = error.error;
      }
    )
  }
}

