export default function ContactMap() {
    return (
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1834241680516!2d-74.00845318459495!3d40.71391517933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f1212879f7%3A0xc4aed01ab78e0ea5!2s201%20Front%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sin!4v1689531548677!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
