import { Review } from "@/data/reviews";
import { Quote } from "lucide-react";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="w-[300px] md:w-[350px] shrink-0 h-full">
            <div className="bg-[#FFEFEB] rounded-2xl p-6 md:p-8 border border-neutral-100 h-full flex flex-col justify-between transition-all duration-300">

                {/* Content Top */}
                <div>
                    {/* Quote Icon */}
                    <div className="mb-4 text-amber-500/20">
                        <Quote className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                    </div>

                    {/* Review Text */}
                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-medium mb-6 line-clamp-4">
                        &quot;{review.text}&quot;
                    </p>
                </div>

                {/* User Profile */}
                <div className="pt-6 border-t border-neutral-50">
                    <div>
                        <h4 className="font-bold text-neutral-900 text-sm md:text-base leading-tight">
                            {review.name}
                        </h4>
                        {review.role && (
                            <p className="text-neutral-400 text-xs md:text-sm font-medium mt-0.5">
                                {review.role}
                            </p>
                        )}
                        {/* Star Rating - Compact */}
                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-3.5 h-3.5 ${index < review.rating ? "text-amber-400 fill-current" : "text-gray-200 fill-current"
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
