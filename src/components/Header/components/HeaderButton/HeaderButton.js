import './HeaderButton.css';

const HeaderButton = (props)=> {
    return (
        <div className="HeaderButton" onClick={props.handleClick}>
            {
                (props.icon) 
                    ? <img src={props.icon} alt={props.title} /> 
                    : <h4>{props.title}</h4>
            }
            
        </div>
    )
}

export default HeaderButton;