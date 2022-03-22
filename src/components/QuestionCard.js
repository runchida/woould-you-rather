import { connect } from 'react-redux'

const QuestionCard = (props) => {
    console.log(props)
    return (
        <div>
            <p>{`${props.question.optionOne.text}`}</p>
        </div>

    );
}

export default connect()(QuestionCard);