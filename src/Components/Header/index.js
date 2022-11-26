
function Index() {
    fetch("./api/Menu.json", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json()).then(res => console.log(res))
    return (
        <div>
            <h1>
                Header
            </h1>
        </div>
    );
}

export default Index;




// import React, { useState, useEffect } from “react”;
// const MyApp = ( ) => {
// const [users, setUsers] = useState( []);
// useEffect( () => {
// fetch(‘ ./users. json’,{
// headers: {
// Accept: “application/ison”
// }
// }). then(res => res. json( ))
// .then(res => setUsers(res.data))
// 子,[1);
// return <Div />;
// }
// export default MyApp;