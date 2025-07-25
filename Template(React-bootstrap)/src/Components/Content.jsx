
import { Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Content = () => {
    return (
        <div className="container">
            <section className="col-md-6 text-center text-md-start">
                <h2 className="fw-bold" >Hi,Hi,I'm John Doe.</h2>
                <p className="text-muted">A freelance Web developer from London. I convert custom web designs
                    to bootstrap templates.</p>
                <p className="text-muted">I make YouTube videos and write Blog.</p>
                <Button variant="primary" className="mt-3">I'm Available</Button>
                <div className=" d-flex align-items-center mt-4 fs-2 gap-3">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaGithub /></a>
                </div>
            </section>
        </div>
    )
}

export default Content
