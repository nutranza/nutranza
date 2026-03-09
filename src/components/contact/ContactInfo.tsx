import { Mail, Phone, MapPinned } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {/* Address Card */}
            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <MapPinned className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Location Address</h3>
                <p className="text-lg text-neutral-900 leading-relaxed">
                    361, Times Trade Center, Punagam, Surat, Gujarat, India - 395010
                </p>
            </div>

            {/* Phone Card */}
            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <Phone className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Phone Number</h3>
                <Link
                    href="tel:+918487036026"
                    className="block text-lg text-neutral-900 hover:text-primary transition-colors"
                >
                    +91 8487036026
                </Link>
            </div>

            {/* Email Card */}
            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <Mail className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Email Contact</h3>
                <Link
                    href="mailto:nutranzafoods@gmail.com"
                    className="block text-lg text-neutral-900 hover:text-primary transition-colors"
                >
                    nutranzafoods@gmail.com
                </Link>
            </div>
        </div>
    );
}
