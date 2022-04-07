import { Link } from "react-router-dom";

const QuestionCard = (props) => {
    return (
        <div className='q-overview'>
            <Link to={`questions/${props.question.id}`}>
                <p>{`${props.question.optionOne.text}`}</p>
                <p>OR</p>
                <p>{`${props.question.optionTwo.text}`}</p>
            </Link>
        </div>

    );
}

export default QuestionCard;