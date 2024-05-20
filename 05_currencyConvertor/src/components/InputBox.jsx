import React, { useId } from 'react'

function InputBox( {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",}){
        const amountInputId = useId();
  return (
    
    <div className={`flex bg-zinc-50 text-black p-3 rounded-md ${className}`}>
        <div className='w-1/2'>
            <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                {label}
            </label>
            <input  className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    id={amountInputId}
                    onChange={(e)=>onAmountChange(Number(e.target.value))}
                    min={0}>
            </input>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        disabled={currencyDisable}
        value={selectCurrency}
        onChange={e=>onCurrencyChange(e.target.value)}>
            {currencyOption.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>

    
  )
}

export default InputBox