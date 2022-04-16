const SpecialBonuses = () => {
    const special = [{
        img: "https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/27012022/iy3sk.jpg",
        title: 'Quick Action Bonus #1: How to Live Stress- Free: Ebook worth $99',
        content: 'Are You Feeling Stressed, Overwhelmed, and  Full Of Anxiety? You’re Not Alone. But You Can Stop It…And Learn To Live A Stress-Free Life with this course'
    },
    {
        img: "https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/27012022/05pqk.jpg",
        title: 'Quick Action Bonus #2: Controlling Your Anger – Video Modules worth $247',
        content: 'Anger might be destroying your professional and personal relationships. Grab this anger management and anger relief course to live a more fulfilling life.'
    },
    {
        img: "https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/27012022/6hnsx.jpg",
        title: 'Quick Action Bonus #3: Mindfulness – Video Modules worth $389',
        content: 'Learn How to Relax and Improve Your Body, Mind, and Spirit Through Mindfulness'
    },
    {
        img: "https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/27012022/rramq.jpg",
        title: 'Quick Action Bonus #4: How to stop worrying what other people think of You – Video Modules worth $149',
        content: 'It’s About Time For You To Stop Worrying About What Other People Think Of You!'
    },
    {
        img: "https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/27012022/0el43.jpg",
        title: 'Quick Action Bonus #5: Overcoming Anxiety – Video Modules worth $247',
        content: 'Over 19.5% of the population suffer from Anxiety disorders. This impacts your day-to-day life and well-being. Learn to overcome anxiety and live a fuller life.'
    },
    {
        img: 'https://knorish-cdn.azureedge.net/public/9cb5ac81-fe17-42f1-bfa2-8c63f72fc9fb/builder/01022022/wc0jt.jpg',
        title: 'Quick Action Bonus #6: Breaking Bad Habits – Video Modules worth $347',
        content: 'It’s about time for you to Break Bad Habits that are drowning you and build good ones! It time to feel liberated.'

    }
    ]
    return (<div className="special">
        <h2 className="special-header">
            Special Bonuses Worth <u>$1500</u> for Taking Action
        </h2>
        {special.map(a => {
            return <div className="special-each"><img alt={a.title} src={a.img} /><div className="special-each-content">
                <h3 className="special-each-content-title">{a.title}</h3>
                <p className="special-each-content-content">{a.content}</p>
            </div></div>
        })}
    </div>)
}

export default SpecialBonuses;