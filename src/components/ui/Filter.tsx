import { buttons } from '@/data/filter'
import React, { useState } from 'react'
import DropDown from './DropDown';
import { useStateContext } from '@/context/StateContext';

const Filter = () => {
    const {
        setFilterOptions,
    } = useStateContext();
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleFilter = (index: number, filter: string) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
            setFilterOptions(filter);
        }
    };

    return (
        <div className='filter-container'>
            {buttons.map(({ title, filter }, index) => (
                <div className='button-box' key={title}>
                    <button
                        className='btn-filter'
                        type='button'
                        onClick={() => handleFilter(index, filter)}
                    >
                        {title}
                    </button>
                    {activeIndex === index && (
                        <DropDown filter={filter} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Filter;
