import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact section-padding bg-whitesmoke">
            <div className="container">
                <h2 className="section-title text-center">Need Assistance?</h2>
                <p className="para-text text-center">Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>

                <div className="contact-content">
                    <form>
                        <div className="form-elem form-elem--2">
                            <input type = "text" className="form-control" placeholder="Your Name" />
                            <input type = "text" className="form-control" placeholder="Your email" />
                        </div>
                        <div className="form-elem">
                            <input type = "text" className="form-control" placeholder="Your Title" />
                        </div>
                        <div className="form-elem">
                            <textarea className="form-control" placeholder="Your Comment" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form-submit--btn btn btn-blue">send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;