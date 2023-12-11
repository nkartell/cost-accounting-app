import './CostFilter.css';


const CostsFilter = (props) => {

    const yearChangeHandler = (event)=> {
        console.log(event.target.value);
        props.onChangeYear(event.target.value);
    };

    return (
        <div className='costs-filter'>
            <div className='costs-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} value={props.year} className='select-css'>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;