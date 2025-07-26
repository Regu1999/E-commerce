import { splitPriceRange } from '../utlity/cretePriceRange'
import { CheckBox } from './UI/Inputs';
import { useState, useEffect } from 'react';
import { useNavigate, useFetcher } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../store/shopFilterData'
import { objectToQueryStringConverter, queryStringToObjectConverter } from '../utlity/handleQueryString';
const availabelSize = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
const chooseData = {
    price: [],
    size: []
};
let isFetching = false;
export default function Filter() {
    const checkedData = useSelector((state) => state.filter);
    // console.log(checkedData);
    
    const dispatch = useDispatch()
    const fetcher = useFetcher()
    const [isUpdated, setIsUpdated] = useState(false);
    const navigate = useNavigate()
    const startPrice = 0;
    const maxPrice = 100;
    const range = 20;
    const proceRange = splitPriceRange(startPrice, maxPrice, range);
    useEffect(() => {
        const currectUrl = window.location.href;
        const url = new URL(currectUrl);
        if (url.search) {
            const urlData = queryStringToObjectConverter(url.search);
            if (urlData.size) {
                dispatch(addData({ type: 'size', value: urlData.size }));
                chooseData.size = urlData.size
            }
            if (urlData.price) {
                dispatch(addData({ type: 'price', value: urlData.price }));
                chooseData.price = urlData.price
            }
        }
    }, [])
    useEffect(() => {
        
        if (isFetching) {
            const queryPatams = objectToQueryStringConverter(checkedData);
            if (queryPatams) {
                navigate('?' + queryPatams)
                // fetcher.load('?' + queryPatams)
                
            } else {
                navigate('/shop')
            }
        }
    }, [checkedData])
    const handleSizeFilter = (val) => {
        if (chooseData.size.includes(val)) {
            const index = chooseData.size.indexOf(val);
            chooseData.size.splice(index, 1)
        } else {
            chooseData.size.push(val);
        }
        !isUpdated && setIsUpdated(true);
    }
    const handlePriceFilter = (val) => {
        if (chooseData.price.includes(val)) {
            const index = chooseData.price.indexOf(val);
            chooseData.price.splice(index, 1)
        } else {
            chooseData.price.push(val);
        }
        !isUpdated && setIsUpdated(true);
    }
    // console.log(checkedData);

    function handleFilterUpdate() {
        isFetching = true;
        dispatch(addData({ type: 'size', value: chooseData.size }));
        dispatch(addData({ type: 'price', value: chooseData.price }));

        setIsUpdated(false);
    }
    // console.log('dummy filter',chooseData);
    return <div className="p-3" >
        <label>Size</label>
        <section className="grid grid-cols-3 gap-3 min-w-44 mb-3">
            {availabelSize.map(size => <CheckBox inputName={size} key={size}
                checkedArray={checkedData.size} type="size" handleIsUpdated={handleSizeFilter} />)}
        </section>
        <label>Price $</label>
        <section className="grid grid-cols-2 gap-3">
            {proceRange.map(price => <CheckBox inputName={price} checkedArray={checkedData.price}
                key={price} type="price" handleIsUpdated={handlePriceFilter} />)}
        </section>
        {isUpdated && <div className='flex justify-end'>
            <button onClick={handleFilterUpdate} className='bg-black text-white rounded-full p-2 px-4 shadow hover:bg-white hover:text-black transition-all font-bold'>Apply</button>
        </div>}

    </div>
}