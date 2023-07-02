import React, { useState } from 'react'
import "./Loginform.css";


const Loginform = () => {

    const [array, setArray] = useState([]);
    const [inputdata, setInputdata] = useState({ name: "", email: "", text: "" });
    const [index, setIndex] = useState()
    const [togglesubmit, setTogglesubmit] = useState(false)

    let { name, email, text } = inputdata;

    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }

    function addinputdata() {
        if (name === "" && email === "" && text === "") {
            alert("Enter the name and text")
        } else {
        }
        setArray([...array, { name, email, text }])
        // console.log('inputdata::: ', inputdata);
        setInputdata({ name: "", email: "", text: "" })
    }

    function deletedata(i) {
        console.log(i, "hello how are you");
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }

    function updatedata(i) {
        let { name, email, text } = array[i]
        setInputdata({ name, email, text })
        setTogglesubmit(true)
        setIndex(i)
    }

    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, { name, email, text })
        setArray(total)
        setTogglesubmit(false)
        setInputdata({ name: "", email: "", text: "" })
    }

    return (
        <>
            <div className='main'>


                <div className="container">
                    <h2 className="login-title">Log in</h2>

                    <form className="login-form">
                        <div>
                            <label for="name">Name </label>
                            <input id="name" type="text" value={ inputdata.name || "" } placeholder="Enter name" name="name" onChange={ data } />
                        </div>
                        <div>
                            <label for="email">Email </label>
                            <input id="email" type="email" value={ inputdata.email || "" } placeholder="Enter email" name="email" onChange={ data } required />
                        </div>
                        <div>
                            <label for="password">Password </label>
                            <input id="password" type="text" value={ inputdata.text || "" } placeholder="Enter password" name="text" onChange={ data } required />
                        </div>
                        <button className="btn btn--form" style={ { marginTop: "20px" } } type="submit" value="Log in" onClick={ !togglesubmit ? addinputdata : updateinfo }>
                            Log in
                        </button>
                    </form>
                </div>

                <div className='table' >
                    <table border='1' cellSpacing={ 0.5 }>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                array && array.map((item, i) => {
                                    return (
                                        <tr key={ i }>
                                            <td>{ item.name }</td>
                                            <td>{ item.email }</td>
                                            <td>{ item.text }</td>
                                            <td><button onClick={ () => updatedata(i) }>Update</button></td>
                                            <td><button onClick={ () => deletedata(i) }>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Loginform