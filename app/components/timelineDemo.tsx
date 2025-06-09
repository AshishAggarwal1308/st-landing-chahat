import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <p className="text-green-500 dark:text-green-500 text-xl md:text-4xl font-bold mb-8">Making Losses by Blindly Following Tips</p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "I initially jumped into the Stoc market by blindly following tips from an institution. Without understanding the reasoning behind their recommendations, I bought Stocs based on their advice. Unfortunately, I started seeing losses because I didn’t have the knowledge to assess the risks or understand the strategies behind the moves."
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "I was frustrated and knew I needed to take a different approach. That’s when I started looking for a platform that could help me understand the Stoc market better."
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step1.png"
                            alt="img"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step2.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <p className="text-green-500 dark:text-green-500 text-xl md:text-4xl font-bold mb-8">Discovering the Platform</p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "I came across a platform that promised to help me understand the Stoc market better and avoid random tips from institutions. Their educational resources were beginner-friendly, and they even provided daily Stoc insights with explanations. I decided to give it a shot."
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "The platform not only provided daily Stoc tips but also explained the logic behind them, empowering me to make more informed decisions. It felt different from just following tips blindly."
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step3.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step4.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <p className="text-green-500 dark:text-green-500 text-xl md:text-4xl font-bold mb-8">Subscribing and Gaining Knowledge</p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "After using the platform for a while, I decided to subscribe. The tips became more tailored to my interests and the reasoning behind them helped me understand why certain Stocs were recommended. I began learning not just about the market but also about managing risk."
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        "I also took part in discussions and learned from other members. The platform’s focus on education helped me shift from blindly following tips to making informed decisions based on knowledge."
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step5.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://stoctips-images.s3.ap-south-1.amazonaws.com/step6.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        }];

    return <Timeline data={data} />;
}
