import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <div className="p-10 rounded-2xl shadow-sm border border-gray-200 h-fit sticky top-24">
            <div className="mb-8">
                <h2 className="text-3xl text-secondary font-bold mb-2">
                    Contact Information
                </h2>
                <p className="text-lg text-neutral-900">
                    Get in touch with us through any of the following methods.
                </p>
            </div>

            <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                        <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900">Address</h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            123 Business Street, Suite 100
                            <br />
                            City, State 12345
                        </p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                        <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900">Email</h3>
                        <Link
                            href="mailto:contact@nutranza.com"
                            className="text-sm text-secondary hover:underline hover:underline-offset-4 transition-all duration-200"
                        >
                            contact@nutranza.com
                        </Link>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                        <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900">Phone</h3>
                        <Link
                            href="tel:+15551234567"
                            className="text-sm text-secondary hover:underline hover:underline-offset-4 transition-all duration-200"
                        >
                            +1 (555) 123-4567
                        </Link>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                        <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900">Business Hours</h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            Monday - Friday: 9:00 AM - 5:00 PM
                            <br />
                            Saturday - Sunday: Closed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
