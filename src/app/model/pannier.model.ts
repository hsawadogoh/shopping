import {Product} from './product.model';

export class Pannier {
    constructor(
        public item?: Product,
        public qte?: number,
        public amount?: number
    ) {
    }
}
