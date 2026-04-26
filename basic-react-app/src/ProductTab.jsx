import Product from "./Product";

function ProductTab(){
    //const option= ["hi-tech","demanding"];
    //const option2= {a:"technology", b:"value for money"};
    return(
        <>
        <Product title="phone" price={30000} features={["hi-tech","demanding"]} features2={{a:"technology", b:"value for money"}}/>
        <Product title="laptop" price={80000} features={["hi-tech","demanding"]} features2={{a:"technology", b:"value for money"}}/>
        <Product title="Tab" price={40000} features={["hi-tech","demanding"]} features2={{a:"technology", b:"value for money"}}/>
        </>
    )
}

export default ProductTab