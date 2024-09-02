import { products } from '../../data/products';
import Product from './Product';

export default function Showcase(){
    // console.log(products)
    return(
        <div style={{
            display: 'flex',
            gap: '100px',
            flexWrap: 'wrap'
        }}>

            {products.map((product, index) =>(
                <Product item={product}/>
            ))}
        </div>
    )
}