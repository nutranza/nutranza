import { Calculator } from 'lucide-react';

export default function LogisticsEstimator() {
    return (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-sm mb-3 text-neutral-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Logistics Estimator
            </h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-900">
                    <span>Pallet Count (Approx)</span>
                    <span className="font-bold">~42 Cases</span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-neutral-900 italic">Estimate based on standard Euro Pallet.</p>
            </div>
        </div>
    );
}
