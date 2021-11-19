import './styles.css';

export const Button = (props) => {

    const {isDisabled, action, type, text} = props;

    return(
        // Button component for users to click
        <button onClick={action} disabled={isDisabled} className={type}>
            {text}
        </button>
    )
}