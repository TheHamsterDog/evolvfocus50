import ArticleIcon from '@mui/icons-material/Article';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import OpenWithIcon from '@mui/icons-material/OpenWith';
const Learn = () => {
    const statements = [
        { Icon: OpenWithIcon, paragraph: "Understand why some people excel in life while others stay stuck " },
        { Icon: ArticleIcon, paragraph: "Know the triggers and root causes behind life defining behaviours and how to manipulate them to our advantage" },
        { Icon: CampaignIcon, paragraph: "Learn the Neuroscience behind human behaviour and how to hack it" },
        { Icon: ShowChartIcon, paragraph: "Uncover the 50 Enablers that impact 80-85% of your life’s quality" },
        { Icon: SettingsIcon, paragraph: "Discover how the brain process and accepts information that leads to changed behaviour." },
        { Icon: DesktopWindowsIcon, paragraph: "Tools that fast-track results" },
        { Icon: ArticleIcon, paragraph: "Learn how to 'rewire' the brain to spark real change " },
        { Icon:AssignmentTurnedInIcon , paragraph: "Learn how to 'rewire' the brain to spark real change " }

    ];
    return (
        <div className="learn">
            <div className="learn-inner">
                <h2 className="learn-header">What Will You Learn</h2>
                <div className="learn-container">
                    {statements.map(a => {
                        return (
                            <div className="learn-each">
                                <a.Icon className="learn-each-icon" />
                                <p>{a.paragraph}</p>
                            </div>)
                    })}
                </div>
            </div>
        </div>)
}

export default Learn;