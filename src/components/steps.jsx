const Steps = () => {
    let steps = [
        [["Step", "1"], "Learn 50 enablers commonly found in self-made billionaires, icons & high achievers which impact 80-85% of your success and happiness"],
        [["Step", "2"], "Install the same enablers & strengthen them with the help of our tools "],
        [["Step", "3"], "Learn why they were not working in your favor before and how to leverage them to your advantage"],
        [["Step", "4"], "Remove mental, emotional & behavioural blocks which are a hurdle in growth with our easy to use tools"],
        [["Step", "5"], "Implement the learnings in your life with practice"],
        [["Step", "6"], "Experience the change in the way you think, choose, act & react"],
   
    ]
    return (
        <div className="steps">
            <h2 className="steps-header">How it Works</h2>
            <div className="steps-container">
                {steps.map(step=>{
                    return(<div className="steps-container-each">
                        <h4 className="steps-container-each-header">{step[0][0]} <span className="steps-container-each-header-number">{step[0][1]}</span></h4>
                        <p className="steps-container-each-paragraph">{step[1]}</p>
                    </div>)
                })}
            </div>
        </div>)
}

export default Steps;