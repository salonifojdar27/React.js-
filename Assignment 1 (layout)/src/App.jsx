import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {
  return (
    <div className="Container" style={{ height: "700px", width: "100%", backgroundColor: "rgb(150, 102, 153)" }}>
      <div className="header" style={{ height: "486px", width: "60%", margin: "auto", backgroundColor: "white", position: "relative", top: "18%" }}>
        <Header />
        <hr />
        <div className="img">
          <img src="https://www.phoolwala.com/images/product-webp/15-white-roses-flowers-bouq.webp" alt="" style={{ height: "255px", width: "40%", position: "relative", top: "38px", marginLeft: "5%" }} />
        </div>
        <div className="content">
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>



  )

}

export default App
