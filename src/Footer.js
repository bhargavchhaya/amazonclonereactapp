import React from "react";
import './Footer.css';

function Footer() {
    return(
        <div className="footerarea">
            <div className="footerarea__top">
                <a>Back to Top</a>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>Link1</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Link1</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Link1</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Link1</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;