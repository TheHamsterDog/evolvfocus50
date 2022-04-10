const Different = (props) => {
    return (<div className="different-children">
        <div className="different-children-title">
            <props.Icon className="different-children-icon"/>
            {props.title}
        </div>
        <p className="different-children-paragraph">
            {props.children}
        </p>
    </div>)
}

export default Different;