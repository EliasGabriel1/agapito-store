import Button from "../../../Button";
import Categoria from "../Categoria";
import Subcategoria from "../Subcategoria";
import { useNavigate } from "react-router-dom";
import Minicart from "../../../MiniCart";

function Menu1(props) {
    var api = props.api;

    const navigate = useNavigate();
    return (
        <div className="desktop">
            <div className="container">
                <div className="categoria">
                    <ul>
                        {
                            api.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Categoria content={item} nolink={true} />
                                        <div className="subcategoria">
                                            <Subcategoria content={item.children} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="content-product">
                    <Button onclick={()=> navigate("/colecao")} text="promoção" class="promocao" />
                    <Minicart />
                </div>
            </div>
        </div>
    );
}

export default Menu1;
