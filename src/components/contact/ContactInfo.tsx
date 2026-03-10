import { Mail, Phone, MapPinned } from "lucide-react";
import Link from "next/link";
import {
    CONTACT_ADDRESS_DISPLAY,
    CONTACT_EMAIL_ADDRESS,
    CONTACT_EMAIL_MAILTO_URL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_PHONE_TEL_URL,
} from "@/lib/contact";

export default function ContactInfo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <MapPinned className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Location Address</h3>
                <p className="text-lg text-neutral-900 leading-relaxed">
                    {CONTACT_ADDRESS_DISPLAY}
                </p>
            </div>

            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <Phone className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Phone Number</h3>
                <Link
                    href={CONTACT_PHONE_TEL_URL}
                    className="block text-lg text-neutral-900 hover:text-primary transition-colors"
                >
                    {CONTACT_PHONE_DISPLAY}
                </Link>
            </div>

            <div className="bg-primary/10 lg:p-12 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center">
                    <Mail className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Email Contact</h3>
                <Link
                    href={CONTACT_EMAIL_MAILTO_URL}
                    className="block text-lg text-neutral-900 hover:text-primary transition-colors"
                >
                    {CONTACT_EMAIL_ADDRESS}
                </Link>
            </div>
        </div>
    );
}
