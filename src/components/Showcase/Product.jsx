export default function Product(props){
    const product = props.item;
    console.log(props);
    return(
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.amountLeft}</p>
            <img src={product.img} style={{width: '350px'}}/>
        </div>
    )
}