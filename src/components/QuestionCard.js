const QuestionCard = (props) => {
    return (
        <div className='q-overview'>
            <p>{`${props.question.optionOne.text}`}</p>
            <p>OR</p>
            <p>{`${props.question.optionTwo.text}`}</p>
        </div>

    );
}

export default QuestionCard;