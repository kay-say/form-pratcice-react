// import React from "react"
// import ReactDOM from "react-dom"


function App(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })
    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevState=>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    return(
        <form>
            <input 
                type="text"
                placeholder="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            {formData.firstName}<br/>

            <input 
                type="text"
                placeholder="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            {formData.lastName}<br/>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))