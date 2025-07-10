import { useState } from "react"

function Usercard() {
    const [flag, setflag] = useState(true)
    return (
        <div className="container">
            <img src="https://i.pinimg.com/originals/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg" alt="" className="img" />
            <h1>Chrisse</h1>
            <p className="address">4018 Sachs Trail</p>
            <h2 className="posts">Posts</h2>
            <h2 className="followers">Followers</h2>
            <p className="postsdata">1841</p>
            <p className="followersdata">66868</p>
            <button onClick={() => setflag(!flag)}>{flag ? "Follow" : "Following"}</button>
        </div>
    )
}

export default Usercard