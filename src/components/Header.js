import trollFace from "../images/Troll Face.png"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex-center">
                    <img src={trollFace} className="header-logo" />
                    <h3>Meme Generator</h3>
                </div>
            </div>
        </header>
    )
}