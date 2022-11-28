import Desktop from './Desktop';
import Mobile from './Mobile';
import {useWindowSize} from "../../../Hooks/useWindowSize";

function App(props) {
  const window = useWindowSize();
  return (
    <div className='container'>
    {window.width>900?<Desktop api={props.api}/>:<Mobile api={props.api} />}
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fuga natus minus beatae veritatis totam voluptas vero? Obcaecati mollitia quaerat error eaque animi explicabo. Numquam quas error voluptatum harum optio?
    </div>
    </div>
  );
}

export default App;
