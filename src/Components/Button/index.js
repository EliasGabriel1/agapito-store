

function Button(props) {
    return (
        <button className={props.class?props.class:""}>
            {props.text}     
        </button>
    )
}

export default Button