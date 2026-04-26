import "./Product.css";
function Product({title,price}){
    return (
        <div className="mainBox">
        <h1>{title}</h1>
        <p>Price: {price}</p>
        </div>
    )
}

export default Product;