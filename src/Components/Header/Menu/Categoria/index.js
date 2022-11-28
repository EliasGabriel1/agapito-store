function index(props) {
    var content = props.content
    return (
      props.nolink===true? <a className="name-categoria" href={content.url}>{content.name}</a>:<div className="name-categoria">{content.name}</div>
    );
  }
  
  export default index;
  