import Desktop from './Desktop';
import Mobile from './Mobile';
import { useWindowSize } from "../../../Hooks/useWindowSize";

function Menu(props) {
  const window = useWindowSize();
  return (
    <div className='container menu' data-testid="menu">
      {window.width > 900 ? <Desktop api={props.api} /> : <Mobile api={props.api} />}
    </div>
  );
}

export default Menu;
