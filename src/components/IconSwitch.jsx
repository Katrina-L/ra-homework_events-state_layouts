export default function IconSwitch( {icon, onSwitch} ) {
    return (
        <div className="icon">
            <button className="icon-btn material-icons" onClick={onSwitch}>
                {icon}
            </button> 
        </div>
        
    )
}
