import Categoria from "../../Categoria";
import Subcategoria from "../../Subcategoria";

function ContentMenu2(props) {
    var api = props.api;
    const handleClick = event => {
        event.currentTarget.classList.toggle('subcategoria-open');
    };

    return (
        <div className="container">
            <div className="categoria">
                <ul>
                    {
                        api.map((item, index) => {
                            return (
                                <li key={index} onClick={handleClick} className="subcategoria-mobile">
                                    <Categoria content={item} nolink={false} />
                                    <div className="subcategoria">
                                        <Categoria className="categoria-in-subcategoria" content={item} nolink={true} />
                                        <Subcategoria content={item.children} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ContentMenu2;
