'use client';

import Link from "next/link";

const Nav = () => {
    return (<nav>
        <ul>
            <li>
                <Link href="/">Welcome</Link>
            </li>
            <li>
                <Link href="/add-product">Add Product</Link>
            </li>
            <li>
                <Link href="/products">Products</Link>
            </li>
            <li>
                <Link href="/title">Title</Link>
            </li>
        </ul>
    </nav>);
}

export default Nav;