import ContactMe from "../../components/contactPage/ContactMe";
import HeroContact from "../../components/contactPage/HeroContact";

export default function Contact() {
    return (
        <div>
            <HeroContact />
            <ContactMe />
            <div className="w-full max-w-8xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-gray-200 mb-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31726.62339616773!2d106.9004475!3d-6.286336599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1776916014618!5m2!1sid!2sid"
                    width="600"
                    className="w-full h-96"
                    height="450"
                    style={{ border: 0 }}
                    frameBorder="0"
                    tabIndex="0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
} 