import React from 'react';

interface WaveDividerProps extends React.SVGProps<SVGSVGElement> {
    topColor?: string;
    bottomColor?: string;
    height?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
    topColor = '#E8C642',
    bottomColor = '#EBE6DE',
    height = 'h-[100px] md:h-[200px]',
    className,
    ...props
}) => {
    return (
        <div
            className={`w-full overflow-hidden leading-0 ${className || ''}`}
            style={{ backgroundColor: topColor }}
        >
            <svg
                className={`relative block w-full ${height}`}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                aria-hidden="true"
                {...props}
            >
                <path
                    fill={bottomColor}
                    fillOpacity="1"
                    d="M0,320L40,288C80,256,160,192,240,165.3C320,139,400,149,480,170.7C560,192,640,224,720,218.7C800,213,880,171,960,176C1040,181,1120,235,1200,245.3C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default WaveDivider;
