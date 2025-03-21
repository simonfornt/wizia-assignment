import React from 'react'
import arro from "../assets/arro.png";
import sping from "../assets/sping.png";
import wand from "../assets/wand.png";

function Features() {
    const features = [  // Fixed variable name spelling (was 'feactures')
        {
            icon: wand,
            title: "You are in Control",
            des: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
            icon: sping,
            title: "Infinitely Scalable",
            des: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
            icon: arro,
            title: "Incredibly Flexible",
            des: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
        },
    ];

    return (
        <div className='bg-[#00222d] py-10 px-0 md:px-16 flex flex-col md:flex-row gap-6 justify-center items-center'>
            {features.map((feature, index) => (
                <div key={index} className='p-6 w-full mx-10   px-10 md:w-1/3 text-white bg-[#00222d] rounded-lg shadow-lg'> 
                    <div className='text-cyan-400 text-3xl mb-4'><img src={feature.icon} alt={feature.title} /></div>
                    <h3 className='text-xl font-monster font-[600]  mb-2'>{feature.title}</h3>
                    <p className='text-gray-300 font-monster font-[300]'>{feature.des}</p>
                </div>
            ))}
        </div>
    );
}

export default Features;