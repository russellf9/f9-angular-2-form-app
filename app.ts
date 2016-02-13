import {
    Component,
    EventEmitter
} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';
import ParameterDeclaration = ts.ParameterDeclaration;

/**
 * Provides a `Product` object
 */
class Product {
    constructor(public sku:string,
                public name:string,
                public imageUrl:string,
                public department:string[],
                public price:number) {
    }
}


/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
    selector: 'inventory-app',
    directives: [ProductsList],
    template: `
  <div class="inventory-app">
   <products-list
    [productsList] = "products"
    <!--
    input
    -->

    (onProductSelected) = "productWasSelected($event)"
    <!--
    output
    -->
    >
    </products-list>
  </div>
  `
})
class InventoryApp {

    products:Product[];

    constructor() {
        this.products = [
            new Product(
                'NICEHAT',
                'A nice black hat',
                '/resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                20.0),

            new Product(
                'MYSHOES',
                'Black Nikes',
                '/resources/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running'],
                64.99),

            new Product(
                'COAT',
                'Warm Coat',
                '/resources/images/products/blue-jacket.jpg',
                ['Women', 'Jackets', 'Out'],
                54.99),
        ]
    }

    productWasSelected(product:Product):void {
        console.log('Product selected: ', product);
    }

}

}

bootstrap(InventoryApp);
