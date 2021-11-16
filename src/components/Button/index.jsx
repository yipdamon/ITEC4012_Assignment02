import './styles.css';

export const Button = (props) => {

    const {isDisabled, action, type, text} = props;

    return(
        <button onClick={action} disabled={isDisabled} className={type}>
            {text}
        </button>
    )
}