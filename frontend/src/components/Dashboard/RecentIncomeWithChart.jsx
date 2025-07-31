import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const COLORS = ["#8B5CF6", "#EAB308", "#DC2626"];

function RecentIncomeWithChart({data,totalIncome}) {

    const [chartData,setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item)=>({
            name:item?.source?.trim()?.toLowerCase(),
            amount:item?.amount,
        }));
        console.log(dataArr);
        
        setChartData(dataArr);
    };
    useEffect(()=>{
        prepareChartData();

        return ()=>{}
    },[data])

  return (
    <div className='card' >
        <div className='flex items-center justify-between' >
            <h5 className='text-xl' >Last 60 Days Income</h5>
        </div>

        <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={`₹${totalIncome}`}
            colors={COLORS}
            showTextAnchor
        />

    </div>
  )
}

export default RecentIncomeWithChart