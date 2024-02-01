'use client';

import React from 'react';
import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import TotalIncome from './TotalIncome';

const incomeData = [
    {
        name: '1998',
        daily: 100,
        weekly: 700,
        monthly: 3000,
    },
    {
        name: '2000',
        daily: 500,
        weekly: 1400,
        monthly: 15000,
    },
    {
        name: '2004',
        daily: 1000,
        weekly: 7000,
        monthly: 30000,
    },
    {
        name: '2008',
        daily: 2000,
        weekly: 14000,
        monthly: 60000,
    },
    {
        name: '2012',
        daily: 3000,
        weekly: 21000,
        monthly: 90000,
    },
    {
        name: '2016',
        daily: 1000,
        weekly: 8000,
        monthly: 26500,
    },
    {
        name: '2020',
        daily: 2200,
        weekly: 8200,
        monthly: 27000,
    },
];

const todayIncome = 100;
const weekIncome = 1000;
const MonthIncome = 40000;
const YearIncome = 900000;

function IncomeChart() {
    return (
        <>

            <div className='bg-slate-300 h-28 w-full items-center flex flex-row gap-36 '>
                <TotalIncome children={todayIncome} labelText="Today's Income's" />
                <TotalIncome children={weekIncome} labelText="This Week's Income" />
                <TotalIncome children={MonthIncome} labelText="This Month's Income" />
                <TotalIncome children={YearIncome} labelText="This Year's Income" />



            </div>
            <ResponsiveContainer height={500} width={'100%'}>
                <LineChart
                    data={incomeData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="daily"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Line
                        type="monotone"
                        dataKey="weekly"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Line
                        type="monotone"
                        dataKey="monthly"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default IncomeChart;
