import './ShoppingList.css';
import ListItem from './components/item/ListItem';

const ShoppingList = (props)=>{
    return (
        <div className="ShoppingList">
            <ListItem/>
        </div>
    )
}

export default ShoppingList;

/*
    props va tener una arrar de objetos y cada objeto va a tener esta forma
    items [
        {
            id,
            description,
            cantidad,
            selected,
        }
    ]
*/