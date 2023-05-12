import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../Product';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import '../../app/styles/paginations.css';
import { useStateContext } from '@/context/StateContext';


function Items({ currentItems }: any) {

    return (
        <div className="products-container">
            {currentItems &&
                currentItems.map((product: any) => (
                    <Product key={product.id} {...product} />
                ))}
        </div>
    );
}

function PaginatedItems({ items, itemsPerPage }: any) {
    const {
        filterOptions
    } = useStateContext();
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    useEffect(() => {
        setItemOffset(0)
    }, [filterOptions]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };



    return (
        <>
            <Items currentItems={currentItems} />
            {pageCount > 1 && <ReactPaginate
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                marginPagesDisplayed={2}
                nextClassName={"item pagination-next"}
                nextLabel={<div><AiOutlineRight color='white' size={20} /></div>}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageClassName={'item pagination-page '}
                pageRangeDisplayed={2}
                previousClassName={"item pagination-previous"}
                previousLabel={<div><AiOutlineLeft color='white' size={20} /></div>}
            />}
        </>
    );
}

export default PaginatedItems