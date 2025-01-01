import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import Navbar from "./Navbar";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import Image from "next/image";
import ShimmerButton from "./ui/shimmer-button";
import Features from "./Services";
import Footer from "./Footer";

export function AnimatedGridPatternDemo() {
    return (
        <>
            <Navbar />
            <div className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-3 py-32">
                <div className="flex flex-col max-w-7xl items-center justify-center text-center">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-purple-400 to-orange-400 text-transparent bg-clip-text">
                        Empowering Brands Through Creativity <br /> and Innovation
                    </h1>

                    {/* Bio */}
                    <p className="mt-4 text-lg md:text-xl font-medium text-gray-500 bg-clip-text">
                        We specialize in crafting innovative media campaigns that bring your brand to <br />
                        life and connect you with your audience.
                    </p>

                    <div className="z-10 mt-10 flex items-center justify-center">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm  px-6 font-medium leading-none tracking-tight text-white dark:from-white to-orange-500 lg:text-lg">
                                Get Started
                            </span>
                        </ShimmerButton>
                    </div>

                    {/* Image */}
                    <NeonGradientCard className="flex items-center justify-center mt-10 p-0"> {/* Removed padding */}
                        <Image
                            src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg"
                            alt="Creative Media"
                            width={1100} // Set the desired width
                            height={400} // Set the desired height
                            className="rounded-lg m-0 p-0 shadow-lg" // Optional styling
                        />
                    </NeonGradientCard>

                </div>

                <AnimatedGridPattern
                    numSquares={300}
                    maxOpacity={0.3}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>

            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background">
                <Features />
                <AnimatedGridPattern
                    numSquares={300}
                    maxOpacity={0.3}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>

            <Footer/>
        </>
    );
}
