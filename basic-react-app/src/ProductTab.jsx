import Product from "./Product";

function ProductTab(){
    const option= [<li>high-tech</li>, <li>durable</li>];
    const option2= {a:"technology", b:"value for money"};
    return(
        <>
        <Product title="phone" price={30000} features={option} features2={option2}/>
        <Product title="laptop" price={80000} features={option} features2={option2}/>
        <Product title="Tab" price={40000} features={option} features2={option2}/>
        </>
    )
}

export default ProductTab