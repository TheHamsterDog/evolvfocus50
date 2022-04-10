import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DifferentComponents from './differentComponents';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Different = () => {
    return (
        <div className="different">
            <div className="different-inner">
                <h1 className="different-header">Why Focus 50 is Different</h1>
                <div className="different-container">
                    <DifferentComponents Icon={FavoriteBorderIcon} title=" Curated by Experts">Focus 50 isn't a theory. It's a <u>proven method</u> that  practicing Psychologist & Behavioural Experts created</DifferentComponents>
                    <DifferentComponents Icon={CameraAltOutlinedIcon} title="Backed by Science">Focus 50 is supported by the latest research in Neuroscience & Positive Psychology. It's a vetted process you can trust</DifferentComponents>
                    <DifferentComponents Icon={NoteAltOutlinedIcon} title="Created For the Modern World">Focus 50 is designed for modern-day factors & challenges. Get up-to-date actionable information</DifferentComponents>
                    <DifferentComponents Icon={SendOutlinedIcon} title="Long Term results">Focus 50 doesn't give you quick motivation that fades. It sets the stage for the rest of your life by positively changing how you see yourself, the world, and your desires</DifferentComponents>
                 
                </div>
            </div>
        </div>)
}

export default Different;