function index(props) {
  var content = props.content
  return (
    <ul>
      {content.map((item,index) => {
        return (<li key={index} >
          <a href={item.url}>{item.name}</a>
        </li>)
      })}
    </ul>
  );
}

export default index;