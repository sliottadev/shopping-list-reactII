import './Header.css';
import delete_icn from '../../assets/icons/delete.png';
import open_icn from '../../assets/icons/open.png';
import save_icn from '../../assets/icons/save.png';
import share_icn from '../../assets/icons/share.png';
import HeaderButton from './components/HeaderButton/HeaderButton';

const Header = () =>{
    return (
        <div className='Header'>
            <div className="titleContainer">
                <h4>Grocery List</h4>
            </div>
            <div className="buttonContainer">
                <HeaderButton icon={save_icn} title='Guardar' handleClick={null}/>
                <HeaderButton icon={open_icn} title='Abrir' handleClick={null}/>
                <HeaderButton icon={share_icn} title='Compartir' handleClick={null}/>
                <HeaderButton icon={delete_icn} title='eliminar' handleClick={null}/>
            </div>
        </div>
    );
}

export default Header;
