let Header = () => {
    return(
        <div id="header">
            <h1 style={{color: "green"}}>Jason's Blog Header</h1>
        </div>
    )
}

let Article = () => {
    return(
        <div>
            <h2>This is a sub-header of my article</h2>
                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah <br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah<br />
                    blah blah blah blah blah blah blah blah blah blah blah blah blah
                </p>
        </div>
    )
}

let Footer = () => {
    return(
        <div id="footer">
            <h2>Thank you for reading my blog!</h2>
            <p>If you'd like to contact me more about my blog
                <a href="mailto:not-really@email.com" style={{color: "green"}}> email </a>
                me here!
                </p>
        </div>
    )
}

let Blog = () => {
    return(
        <div>
        <Header />
        <Article />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Blog />, document.getElementById('root'))