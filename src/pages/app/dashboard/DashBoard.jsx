    import React, { useEffect, useState } from 'react'
import State from '../../../components/app/dashboard/State';
import { LineGraph } from '../../../components/app/dashboard/LineGraph';
import HorizontalBarChart from '../../../components/app/dashboard/HorizontalBarChart';
import axios from '../../../axios';

    export default function DashBoard() {
        const [state, setState] = useState([]);
        const [lineGraphData, setLineGraphData] = useState([]);
        const [horizontalData, setHorizontalData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [startDate, setStartDate] = useState('');
        const [endDate, setEndDate] = useState('');
        const getStates = async () => {
            try {   
            setLoading(true);
            const response = await axios.get('/admin/dashboard');
            setState(response.data?.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const getLineGraphData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/admin/dashboard/usergraph?startDate=${startDate}&endDate=${endDate}`);
            setLineGraphData(response.data?.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }
    const getHorizontalData =async ()=>{
        try {
            setLoading(true);
            const response = await axios.get(`/admin/dashboard/livegraph?startDate=01-01-2025&endDate=12-06-2025`);
            setHorizontalData(response?.data?.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
        useEffect(() => {
            getStates();
            getLineGraphData();
            getHorizontalData();
                }, [startDate, endDate]);
                console.log(horizontalData,"horizontalData")
        return (
            <div className='space-y-5'>
                <State state={state} />
                <LineGraph lineGraphData={lineGraphData} setStartDate={setStartDate} setEndDate={setEndDate}  />
                <HorizontalBarChart horizontalData={horizontalData}/>
            </div>
        );
    } 