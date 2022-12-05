import React from "react"

export default function Header() {
    const [memes, setMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/1bij.jpg"
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemes(data.data.memes))
    }, [])

    function newMeme() {
        const meme = memes[Math.floor(Math.random()*memes.length)]
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: meme.url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <section className="container flex-column-center">
            <form>
                <div className="flex-center">
                    <div className="form-col">
                        <input type="text" name="topText" placeholder="Your text here" value={meme.topText} onChange={handleChange} />
                    </div>
                    <div className="form-col">
                        <input type="text" name="bottomText" placeholder="Your text here" value={meme.bottomText} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex-center">
                    <div className="form-col">
                        <input type="button" className="btn" value="Get a new meme image" onClick={newMeme} />
                    </div>
                </div>
            </form>
            <div className="meme">
                <span className="meme-text meme-text-top">{ meme.topText }</span>
                <span className="meme-text meme-text-bottom">{ meme.bottomText }</span>
                <img src={meme.imgUrl} className="meme-img" alt="meme" />
            </div>
        </section>
    )
}