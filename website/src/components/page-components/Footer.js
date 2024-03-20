import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <a href="https://www.csun.edu" target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + "/images/img-AboutUs/CSUNlogo.png"}
                alt="CSUN Logo"
                className="img-fluid"
                style={{ maxWidth: '150px', height: 'auto' }}
              />
            </a>
          </div>
          <div className="col-md-8">
            <small>
              <a href="https://www.facebook.com/calstatenorthridge" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com/csunorthridge" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.linkedin.com/school/california-state-university-northridge/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.instagram.com/csun_edu/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.csun.edu/~xjiang/SeniorDesign/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Back to Course Page
              </a>
            </small>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <small>
              &copy; {new Date().getFullYear()} California State University, Northridge
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;