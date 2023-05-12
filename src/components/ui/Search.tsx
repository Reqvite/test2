import { products } from "@/data/data";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

import "../../app/styles/search.css";

const Search = () => {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState<any>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSearch = (value: string) => {
        setFilter(value);
    };

    useEffect(() => {
        searchProducts();
        document.addEventListener("click", handleBackdropClick);
        return () => {
            document.removeEventListener("click", handleBackdropClick);
        };
    }, [filter]);

    const searchProducts = () => {
        const results = [];
        if (filter) {
            for (const key in products) {
                const filteredProducts = products[
                    key as keyof typeof products
                ].filter((product) => {
                    return product.name.toLowerCase().includes(filter.toLowerCase());
                });
                results.push(...filteredProducts);
            }
            setData(results.slice(0, 10));
        }
    };

    const handleItemClick = () => {
        setFilter("");
    };

    const handleCross = () => {
        setFilter("");
    };

    const handleBackdropClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setData([]);
        }
    };

    return (
        <div className="search-box">
            <input
                className="search-box__input"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
                value={filter}
            />
            <div className="search-box__icons">
                {filter ? (
                    <VscChromeClose size={20} onClick={handleCross} />
                ) : (
                    <BsSearch size={20} />
                )}
            </div>
            {data.length !== 0 && filter && (
                <div ref={dropdownRef} className="search-box__drop-down">
                    {data.map((product: any) => (
                        <div
                            className="search-box__item"
                            key={product.id}
                            onClick={handleItemClick}
                        >
                            <Link
                                href={`/product/${product.slug}`}
                                className="search-box__link"
                            >
                                <div className="search-box__data">
                                    <p className="search-box__text">{product.name}</p>
                                    <Image
                                        src={product.image[0]}
                                        className="search-box__image"
                                        alt={product.name}
                                        width="111"
                                        height="111"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;