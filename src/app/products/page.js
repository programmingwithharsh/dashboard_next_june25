function ProductList({ products = [] }) {
    return (<div>
        <h1>This is Product List Functional Component</h1>
        <ul>
            {products.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
        </ul>
    </div>
    );
}

export default ProductList;