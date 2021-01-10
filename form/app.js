let TextInput = () => {
    return(

        <div>
            <input type="text" style={{backgroundColor: "grey"}}>
            </input>
        </div>
    )
}

let YesNoRadio = () => {
    return(

        <span>
            <input type="radio" value="Yes" /> Yes
            <input type="radio" value="No" /> No
        </span>
    )
}

let SubmitButton = () => {
    return(

        <div>
            <button type="submit" style={{backgroundColor: "grey"}}>
                Submit
            </button>
        </div>
    )
}

let Form = () => {
    return(

        <form>
            <TextInput />
            <br />
            <TextInput />
            <br />
            <TextInput />
            <br /><br />
            <YesNoRadio />
            <br /><br />
            <YesNoRadio />
            <br /><br />
            <SubmitButton />
        </form>
    ) 
    
}


ReactDOM.render(<Form />, document.getElementById('root'))