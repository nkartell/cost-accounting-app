import  {useState}  from 'react';
import './CostForm.css';


const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };
    

        props.onSaveCostData(costData);

        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return <form onSubmit={submitHandler} >
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Name</label>
                        <input type='text' onChange={nameChangeHandler} value={inputName}/>
                    </div>
                    <div className="new-cost__control">
                        <label>Sum</label>
                        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount}/>
                    </div>
                    <div className="new-cost__control">
                        <label>Date</label>
                        <input type='date' min='2019-01-01' step='30-11-2023' onChange={dateChangeHandler} value={inputDate}/>
                    </div>
                    <div className="new-cost__actions">
                        <button type='submit'>Add expense</button>
                        <button type='button' onClick={props.onCancel}>Cancel</button>
                    </div>      
                </div>
            </form>
}

export default CostForm;