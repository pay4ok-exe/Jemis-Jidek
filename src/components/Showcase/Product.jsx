export default function Product({add, remove, item}){
    const {id, name, price, amountLeft, img} = item;
    // console.log(props);
    return(
        <div key={id}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{amountLeft}</p>
            <img src={img} style={{width: '350px'}}/>
            <button onClick={()=>add(id)}>Add</button>
            <button onClick={()=>remove(id)}>Remove</button>
        </div>
    )
}