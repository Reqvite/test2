import { useStateContext } from '@/context/StateContext';
import { FC } from 'react'

const DropDownApple = ['iPhone', 'MacBook', 'iMac']

const DropDownPlayStation = ['Playstation']
// ['Playstation 4', 'Playstation 5']

const DropDownDyson = ['Dyson']

const DropDown: FC<any> = ({ filter, onMouseLeave }) => {
    const {
        setFilterOptions
    } = useStateContext();

    const getDropDownKeys = () => {

        if (filter === 'apple') {
            return DropDownApple
        }
        if (filter === 'playstation') {
            return DropDownPlayStation
        }
        if (filter === 'dyson') {
            return DropDownDyson
        }
        return []
    }


    return (
        <ul className='drop-down' onMouseLeave={onMouseLeave}>
            {getDropDownKeys().map((product) => (
                <li key={product} className='drop-down__item'>
                    <button type='button' className='drop-down__button' onClick={() => setFilterOptions({ product: filter, filter: product.toLowerCase() })}>
                        <span className='drop-down__text'>
                            {product}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default DropDown
