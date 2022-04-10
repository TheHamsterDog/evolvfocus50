import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Testimonial = (props) => {
    return (<div className="testimonials-each">
        <img alt={props.name} src={props.src} className="testimonials-each-img"></img>
        <p className="testimonials-each-content">{props.content}</p>
        <h4 className="testimonials-each-author">{props.name}</h4>
    </div>)
}

let testimonials = [{
    name: "Philippe C, Singapore",
    content: "It is certainly a great investment. Helped me take my startup to new heights",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/xejo4.jpg"
},
{
    name: "Shekar D, India",
    content: "Oh boy! Eye-opener! If you not enrolling, you are missing something epic",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/7o0v4.jpg"
},
{
    name: "Martha G, USA",
    content: "After \"The Secret\" if there is a book/course that I recommend. It is this one!",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/h355r.jpg"
},
{
    name: "Richard B, USA",
    content: "It can easily give some of the bestsellers in the market run for their money!",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/2him2.jpg"
},
{
    name: "Jeffrey D, USA",
    content: "Insightful, relatable, and packed with actionable knowledge",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/cpcoz.jpg"
},
{
    name: "Lee Y, USA",
    content: "Have changed my relationship with myself. 5 Star!",
    src:"https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/yun3f.jpg"
},

]
const Testimonials = () => {
    return (<div className="testimonials">
        <div className="testimonials-container">
        <h1 className="testimonials-header">Testimonials</h1>
        <FormatQuoteIcon className="testimonials-icon" />
        <div className="testimonials-inner">
            {testimonials.map(a=>{
                return(<Testimonial {...a}/>)
            })}
        </div>
        </div>
      
    </div>)

}

export default Testimonials;