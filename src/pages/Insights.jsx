import React, { useContext, useEffect } from 'react'
import analysis from '../api/analysis';
import CustomLineChart from '../components/CustomLineChart';
import CustomHorizontalBarChart from '../components/CustomHorizontalBarChart';
import CustomDoughnut from '../components/CustomDoughnut';

const Insights = () => {
	const {candidateCount,interviewRoundsData,top5CandidateData,bottom5CandidateData,performanceCategoryData} = analysis();
	return (
		<div className='pt-4 md:pt-14 pb-4 px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
			<div className='w-full p-4 rounded-xl bg-black h-[400px]'>
				<div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
					<h1 className='text-xl'>Total unique candidates <br/> appeared for Interviews</h1>
					<h2 className='text-9xl font-extrabold'>{candidateCount}</h2>
				</div>
			</div>
			<div className='p-4 rounded-xl bg-black h-[400px]'>
				<CustomHorizontalBarChart source={top5CandidateData} color={'#1fa215'} title="Top 5 Candidates" xlabel="Scores" ylabel="Candidates"/>
			</div>
			<div className='p-4 rounded-xl bg-black h-[400px]'>
				<CustomHorizontalBarChart source={bottom5CandidateData} color={'#ae0004'} title="Bottom 5 Candidates" xlabel="Scores" ylabel="Candidates"/>
			</div>
			<div className='p-4 rounded-xl bg-black h-[400px] sm:pr-4 md:pr-16 lg:pr-4 xl:pr-16'>
				<CustomDoughnut source={performanceCategoryData} title='Performance Categories'/>
			</div>
			<div className='lg:col-span-2 p-4 xl:px-24 rounded-xl flex items-center justify-center bg-black h-[300px]  md:h-[500px]'>
				<CustomLineChart source={interviewRoundsData} color={`#0891b2`} title='Candidate Count for a particular Interview Round'/>
			</div>
		</div>
	)
}

export default Insights;