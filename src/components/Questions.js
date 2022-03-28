import { connect } from 'react-redux'
import QuestionCard from './QuestionCard';

const Questions = (props) => {
    console.log(props)
    return (
        <div className='questions'>
            <p>{`${props.status} Questions`}</p>
            {
                props.questions.map((question) => {
                    return <QuestionCard question={question}></QuestionCard>
                }) 
            }
        </div>

    );
}

function mapStateToProps({ authedUser}, { status, questions }) {
    
    return { authedUser, questions, status }
}

export default connect(mapStateToProps)(Questions);