const Contacts = () => {
    return (
        <section id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="6" required></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: your.email@example.com</p>
                    <p>Location: Your City, Country</p>
                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;