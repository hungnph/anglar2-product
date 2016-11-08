import {Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product';
@Pipe({
    name:'productPipe'
})
export class ProductPipeFilter implements PipeTransform {
    transform(listProducts : IProduct[], filterValue : string) : IProduct[] {
        filterValue = filterValue ? filterValue.toLocaleLowerCase() : null;
        return filterValue ? listProducts.filter((product : IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filterValue) !== -1;
        }) : listProducts;
    }
}