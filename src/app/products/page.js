import defaultProducts from '../../data/Products';
import Link from "next/link";

function ProductList({ products = defaultProducts }) {
    return (<div className='container mt-4'>
        <h1 className='mb-4'>Product List</h1>
        <div className='row'>
            {products.map((product) => (
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3' key={product.productId}>
                    <div className="card h-100">
                        <img src={product.imageUrl} style={{ height: '200px' }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text"><strong>Code:</strong>{product.productCode}</p>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><strong>Rating:</strong>{product.starRating}</p>
                            <p className="card-text">{product.price}</p>
                            <p className="card-text">Released: {product.releaseDate}</p>
                            <Link className="btn btn-primary" href="/product-detail">Buy Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    );
}

export default ProductList;