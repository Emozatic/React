import "./Product.css";
function Product({title,price,features,features2}){
    return (
        <div className="mainBox">
        <h1>{title}</h1>
        <p>Price: {price}</p>
        <p>{features.map((option)=><li>{option}</li>)}</p>
        <p>{features2.a}</p>
        </div>

    )
}

export default Product;