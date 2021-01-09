let ListGroupItem = () => {
    return (
        <li>this is my list item</li>
    )
}

let ListGroup = () => {
    return(
        <div>
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        </div>
    )
}

ReactDOM.render(<ListGroup />, document.getElementById('root'))