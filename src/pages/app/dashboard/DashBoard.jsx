    import React from 'react'
import State from '../../../components/app/dashboard/State';
import { LineGraph } from '../../../components/app/dashboard/LineGraph';
import HorizontalBarChart from '../../../components/app/dashboard/HorizontalBarChart';

    export default function DashBoard() {
        return (
            <div className='space-y-5'>
                <State/>
                <LineGraph/>
                <HorizontalBarChart/>
            </div>
        );
    }