import BlockLinks from "./BlockLinks";

function LinksFooter() {
    return (
        <div className="container-blocks">
            <div className="box-blocks">
                <div className="block1">
                    <h4>SERVICIO AL CLIENTE</h4>
                    <BlockLinks block="block1"/>
                </div >
                <div className="block2">
                    <h4>Información de interés</h4>
                    <BlockLinks block="block2"/>
                </div>
                <div className="block3">
                    <h4>Acerca de la marca</h4>
                    <BlockLinks block="block3"/>
                </div>
                <div className="block4">
                    <BlockLinks block="block4"/>
                </div>
            </div>
        </div>
    );
}

export default LinksFooter;