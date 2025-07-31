import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'
import { prepareExpenseLineChartData } from '../../utils/helper'
import CustomLineChart from '../Charts/CustomLineChart'



function ExpenseOverview({transactions,onAddExpense}) {

    const [chartData,setChartData] = useState([])

    useEffect(()=>{
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);

        return () => {};
    },[transactions])

  return (
    <div className='card ' >
      <div className='flex items-center justify-between' >
            <div className='' >
                <h5 className='text-xl' >Expense Overview</h5>
                <p className='text-sm text-gray-400 mt-0.5' >
                    Track your expenditure over time and analyze your expense trends.
                </p>
            </div>

            <button className='add-btn ml-4 font-medium cursor-pointer' onClick={onAddExpense} >
                <LuPlus className='text-lg ' />
                Add Expense
            </button>
      </div>

      <div className='mt-10'>
        <CustomLineChart data={chartData}/>
      </div>
    </div>
  )
}

export default ExpenseOverview;