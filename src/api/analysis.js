import getData from './getData';

const analysis = () => {
    const data = getData();
    const candidateCount = data.length;
    

    // extracting top 5 candidates
    const revSorted = data.sort((a,b)=>b.ai_generated_score - a.ai_generated_score);
    const top5Candidates = revSorted.slice(0,5);
    const top5CandidateData = new Map();
    top5Candidates.forEach(entry=>{
        top5CandidateData.set(entry.candidate_name,entry.ai_generated_score);
    })

    // extracting bottom 5 candidates
    const sorted = data.sort((a,b)=> a.ai_generated_score - b.ai_generated_score);
    const bottom5Candidates = sorted.slice(0,5);
    const bottom5CandidateData = new Map();
    bottom5Candidates.forEach(entry=>{
        bottom5CandidateData.set(entry.candidate_name,entry.ai_generated_score);
    })

    // extracting interview data
    let interviewRoundsData = new Map();
    data.forEach(entry => {
        if(interviewRoundsData.has(entry.other_metadata.interview_round)){
            let currVal = interviewRoundsData.get(entry.other_metadata.interview_round);
            interviewRoundsData.set(entry.other_metadata.interview_round,currVal+1);
        }else{
            interviewRoundsData.set(entry.other_metadata.interview_round,1);
        }
    })
    const temp = Array.from(interviewRoundsData).sort((a,b)=>a[0]-b[0])
    interviewRoundsData = new Map(temp);

    let performanceCategoryData = new Map();
    performanceCategoryData.set('Average (Score<=80)',0);
    performanceCategoryData.set('Good (80<Score<=90)',0);
    performanceCategoryData.set('Excellent (Score>90)',0);
    data.forEach(entry=>{
        if(entry.ai_generated_score<=80){
            let currVal = performanceCategoryData.get('Average (Score<=80)');
            performanceCategoryData.set('Average (Score<=80)',currVal+1);
        }else if(entry.ai_generated_score>80 && entry.ai_generated_score<=91){
            let currVal = performanceCategoryData.get('Good (80<Score<=90)');
            performanceCategoryData.set('Good (80<Score<=90)',currVal+1);
        }else{
            let currVal = performanceCategoryData.get('Excellent (Score>90)');
            performanceCategoryData.set('Excellent (Score>90)',currVal+1);
        }
    })

    // returning all extracted data
    return {
        candidateCount,
        top5CandidateData,
        bottom5CandidateData,
        interviewRoundsData,
        performanceCategoryData,
    }
}

export default analysis;