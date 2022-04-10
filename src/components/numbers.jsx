import DoneIcon from '@mui/icons-material/Done';
const Numb = () => {
    const statements = [["10,000+", "Flourishing Learners in USA, UK, Australia, Middle East & APAC region"], ["99%", "Reported significant change in belief system towards life goals from Day1"], ["95%", "Experienced a dramatic shift in multiple aspects of life after just 3 months of following the FOCUS 50 process "]];
    return (
        <div className="numbers">
            <div className="numbers-inner">
                <h2 className="numbers-header">Focus 50 by the Numbers</h2>
                <div className="numbers-container">
                    {statements.map(a => {
                        return (
                            <div className="numbers-container-each">
                                <DoneIcon className="numbers-container-each-icon" />
                                <div className="numbers-container-each-inner">
                                    <h2>{a[0]}</h2>
                                    <p>{a[1]}</p>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>)
}

export default Numb;