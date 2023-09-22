import './ListItem.css';

const ListItem = (props)=>{
    return (
        <div className="ListItem">
            <div className="descriptionContainer">
                <input type="checkbox" name="" id={props.id} checked={props.selected}/>
                <h4>{props.description}</h4>
            </div>
            <div className="quantityContainer">
                <h4>{props.quantity}</h4>
            </div>
        </div>
    );
}

export default ListItem;

/*
    porps= {
        id,
        description,
        quantity,
        selected,
    }
    */