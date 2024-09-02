export default function Product({item}){
    const {id, name, price, amountLeft, img} = item;
    // console.log(props);
    return(
        <div key={id}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{amountLeft}</p>
            <img src={img} style={{width: '350px'}}/>
        </div>
    )
}