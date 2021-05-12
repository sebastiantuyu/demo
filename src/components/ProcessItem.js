import "../styles/ProcessBar.css";

export default function ProcessItem(data) {
    return (
        <div className="pBarItem flex-column align-items-center">
            <div className={ data["active"] ? "pBarIcon activeItem": "pBarIcon" }></div>
                <div className="pBarName">
                <span>{ data["title"] }</span>
            </div>
        </div>
    );
}
