import React, { useState } from 'react'
import getData from '../api/getData';
import { Modal, Divider } from 'antd';
import CustomProgressBar from '../components/CustomProgressBar';

import { HiOutlineChevronUp } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { LuEqual } from "react-icons/lu";
import moment from 'moment';


const Individual = () => {
	const initialData = getData();
	const [data,setData] = useState(initialData);

	const [scoreSort,setScoreSort] = useState('NA');
	const [dateSort,setDateSort] = useState('NA');

	const changeScoreSort = ()=>{
		if(scoreSort=='desc'){
			setScoreSort('asc');
			setData(prev => prev.sort((a,b)=>a.ai_generated_score-b.ai_generated_score))
		}
		if(scoreSort=='asc'){
			setScoreSort('NA');
			setData(initialData);
		}
		if(scoreSort=='NA'){
			setScoreSort('desc');
			setData(prev => prev.sort((a,b)=>b.ai_generated_score-a.ai_generated_score))
		}
	}

	const changeDateSort = ()=>{
		if(dateSort=='desc'){
			setDateSort('asc');
			setData(prev => prev.sort((a,b)=>moment(a.other_metadata.interview_date).toDate()-moment(b.other_metadata.interview_date).toDate()))
		}
		if(dateSort=='asc'){
			setDateSort('NA');
			setData(initialData);
		}
		if(dateSort=='NA'){
			setDateSort('desc');
			setData(prev => prev.sort((a,b)=>moment(b.other_metadata.interview_date).toDate()-moment(a.other_metadata.interview_date).toDate()))
		}
	}

	const filter1 = ()=>{
		setData(initialData);
		setData(prev=>prev.filter(entry=>(entry.ai_generated_score<=80)))
	}
	const filter2 = ()=>{
		setData(initialData);
		setData(prev=>prev.filter(entry=>(entry.ai_generated_score>80 && entry.ai_generated_score<=85)));
	}
	const filter3 = ()=>{
		setData(initialData);
		setData(prev=>prev.filter(entry=>(entry.ai_generated_score>85 && entry.ai_generated_score<=90)));
	}
	const filter4 = ()=>{
		setData(initialData);
		setData(prev=>prev.filter(entry=>(entry.ai_generated_score>90)));
	}


	const CandidateItem = ({entry}) => {
		const [isModalOpen, setIsModalOpen] = React.useState(false);
		const showModal = () => {
			setIsModalOpen(true);
		};
		const handleOk = () => {
			setIsModalOpen(false);
		};
		const handleCancel = () => {
			setIsModalOpen(false);
		};
		
		return (
			<>
			<div onClick={showModal} className='hover:bg-cyan-600 hover:scale-105 transition-all duration-200 px-4 py-3 flex flex-col gap-2 mb-4 rounded-xl bg-black cursor-pointer '>
				<div className='text-2xl font-bold'>{entry.candidate_name}</div>
				<div className='flex flex-col'>
					<div className='text-lg text-white/50'>Interview Score</div>
					<div>{entry.ai_generated_score}</div>
				</div>
			</div>
			<Modal 
			title={null} 
			open={isModalOpen} 
			onOk={handleOk} 
			onCancel={handleCancel}
			footer={null}
			centered 
			styles={{
    			content: {color:'white', backgroundColor:'black', border:'2px solid #545454'},
  			}}
>
				<div className='flex flex-col gap-y-6'>
					<div className='flex flex-col gap-0'>
						<h1 className='text-5xl'>{entry.candidate_name}</h1>
						<Divider className='bg-neutral-600'/>
					</div>

					<div className='flex flex-col gap-0'>
						<h2 className='text-xl font-bold'>Interiew Score: {entry.ai_generated_score}</h2>
						<CustomProgressBar progress={entry.ai_generated_score}/>
					</div>

					<div className='flex flex-col gap-y-3'>
						<h2 className='text-xl font-bold text-white'>Interview Info</h2>
					</div>
					<div className='flex flex-wrap items-center gap-x-8'>
						<div className='flex items-center gap-6'>
							<h2 className='text-md font-bold text-white'>Interviewer: </h2>
							<p className='text-md text-neutral-300'>{entry.other_metadata.interviewer}</p>
						</div>
						<div className='flex items-center gap-x-4'>
							<h2 className='text-md font-bold text-white'>Interview Round: </h2>
							<p className='text-md text-neutral-300'>{entry.other_metadata.interview_round}</p>
						</div>
						<div className='flex items-center gap-x-4'>
							<h2 className='text-md font-bold text-white'>Interview Date: </h2>
							<p className='text-md text-neutral-300'>{entry.other_metadata.interview_date}</p>
						</div>
						<div className='flex flex-col gap-x-4 mt-4'>
							<h2 className='text-md font-bold text-white'>Interview Question: </h2>
							<p className='text-md text-neutral-300'>{entry.interview_question}</p>
						</div>
						<div className='flex flex-col gap-x-4 mt-2'>
							<h2 className='text-md font-bold text-white'>Candidate Response: </h2>
							<p className='text-md text-neutral-300'>{entry.candidate_response}</p>
						</div>
					</div>


				</div>
			</Modal>
			</>
		)
	}

    return (
		<div className='pt-4 md:pt-14 pb-4 px-4 flex flex-col gap-4'>
			<div className='flex items-center gap-2 flex-wrap'>
				<div>Sort by: </div>
				<button onClick={changeScoreSort} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>
					<h1>Score</h1>
					{scoreSort=='desc' ? <IoIosArrowDown/> : (scoreSort=='asc' ? <HiOutlineChevronUp/> : <LuEqual/>)}
				</button>
				<button onClick={changeDateSort} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>
					<h1>Date</h1>
					{dateSort=='desc' ? <IoIosArrowDown/> : (dateSort=='asc' ? <HiOutlineChevronUp/> : <LuEqual/>)}
				</button>
			</div>
			<div className='flex sm:items-center gap-3'>
				<h1>Filter: </h1>
				<div className='flex flex-wrap items-center gap-2'>
					<button onClick={filter1} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>Score&lt;=80</button>
					<button onClick={filter2} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>80&lt;Score&lt;=85</button>
					<button onClick={filter3} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>85&lt;Score&lt;=90</button>
					<button onClick={filter4} className='px-2 py-1 rounded-lg border-2 border-neutral-500 flex items-center'>90&lt;Score</button>
					<button onClick={()=>setData(initialData)} className='px-2 py-1 rounded-lg bg-cyan-600 flex items-center'>Clear Filters</button>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3'>
				{data?.map(entry => 
					<CandidateItem key={entry.candidate_name} entry={entry}/>
				)}
			</div>
		</div>
	)
}

export default Individual;