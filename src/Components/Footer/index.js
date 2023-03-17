import Copy from "./Copyright";
import LinksFooter from "./LinksFooter";
import FaixaCards from "./FaixaCards";
import "./footer.css"

function index() {
  return (
    <div className="container-footerLinks">
      <div className="container">
        <LinksFooter />
        <FaixaCards />
        <Copy />
      </div>
    </div>
  );
}

export default index;