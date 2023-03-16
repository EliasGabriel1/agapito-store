import React from "react";
import Link from "../../../Link";

function index(props) {
    return (
        (props.block === "block1" ?
            (<div className="BlockLinks">
                <p className="text-off">Linea da atención nacional:</p>
                <p>01-8000-00000</p>
                <p className="text-off">Escribenos</p>
                <p>info@EliasGabe1.com.br</p>
                <p className="text-off">Whatsapp:</p>
                <p>(57) 3333333333</p>
                <p className="text-off">Oficinas en Marília:</p>
                <p>(604) 4444444</p>
            </div>)

            : props.block === "block2" ?
                (<div className="BlockLinks">
                    <Link class="links-footer" href="" text="Preguntas frecuentes" />
                    <Link class="links-footer" href="" text="Términos y condiciones" />
                    <Link class="links-footer" href="" text="Politica privacidad y tratamiento de datos" />
                    <Link class="links-footer" href="" text="Términos y condiciones de Promociones" />
                    <Link class="links-footer" href="" text="¿Cómo saber cuál es mi talla?" />
                </div>)

                : props.block === "block3" ?
                    (<div className="BlockLinks">
                        <Link class="links-footer" href="" text="Nuestra historia" />
                        <Link class="links-footer" href="" text="Contacto" />
                        <Link class="links-footer" href="" text="Nuestros catálogos" />
                        <Link class="links-footer" href="" text="Trabaja con nosotros" />
                        <Link class="links-footer" href="" text="Nuestra visión de impacto positivo" />
                    </div>)

                    : props.block === "block4" ?
                        (<div className="BlockLinks">
                            <img alt="" src="https://i.postimg.cc/V6JDpYst/image-44.png" width="100%" />
                            <a href="https://www.instagram.com/eliasgabe1/">    @EliasGabe1</a>
                        </div>)
                        : "")
    );
}

export default index;