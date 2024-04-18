import React from 'react'
import getData from '../api/getData';
import { Modal, Divider } from 'antd';
import CustomProgressBar from '../components/CustomProgressBar';

const Individual = () => {
    const data = getData();

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
		<div className='pt-4 md:pt-14 pb-4 px-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
				{data?.map(entry => 
					<CandidateItem key={entry.candidate_name} entry={entry}/>
				)}
			</div>
		</div>
	)
}

export default Individual;