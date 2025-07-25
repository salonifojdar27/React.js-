
import { Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Content = () => {
    return (

        <div className="container hero-section d-flex align-items-center justify-content-center">
            <div className="row w-100 align-items-center">
                {/* Left side - Text */}
                <div className="col-md-6 text-center text-md-start px-4">
                    <h2 className="fw-bold display-5">Hi, Hi, I'm John Doe.</h2>
                    <p className="text-muted">
                        A freelance Web developer from London. I convert custom web designs to Bootstrap templates.
                    </p>
                    <p className="text-muted">I make YouTube videos and write Blog.</p>
                    <Button variant="primary" className="mt-3 custom-btn">I'm Available</Button>
                    <div className="d-flex align-items-center mt-4 fs-5 gap-3 social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="col-md-6 text-center mt-5 mt-md-0">
                    <img src="https://t3.ftcdn.net/jpg/06/41/26/64/360_F_641266494_Qy6PJV3b9ZvuFPg7f5vGEFMMsynp4NWZ.jpg" alt="John Doe" className="img-fluid hero-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default Content
