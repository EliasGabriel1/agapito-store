import Button from "../../../Button";
import Categoria from "../Categoria";
import Subcategoria from "../Subcategoria";

function Menu1(props) {
    var api = props.api;
    return (
        <div className="desktop">
            <div className="container">
                <div className="categoria">
                    <ul>
                        {
                            api.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Categoria content={item} nolink={true}/>
                                        <div className="subcategoria">
                                            <Subcategoria content={item.children} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Button text="promoção" class="promocao"/>
            </div>
        </div>
    );
}

export default Menu1;
