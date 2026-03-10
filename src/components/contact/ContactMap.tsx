export default function ContactMap() {
    return (
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5904.924164462148!2d72.87228058840674!3d21.197341039255207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa274fb5939%3A0x16ad7b5d66afd844!2sTime%20Trade%20Center!5e0!3m2!1sen!2sin!4v1773114973438!5m2!1sen!2sin"
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
