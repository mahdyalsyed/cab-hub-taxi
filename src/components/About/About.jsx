"use client";
import React from "react";
import BgImage from "../../assets/girl.jpg";
import BannerCard from "./BannerCard";
import { SlStar } from "react-icons/sl";

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    // width: "100vw",
};

const About = () => {
    return (
        <div style={bgStyle}>
            <div className="text-white bg-black/80 min-h-[530px] flex items-center py-10">
                <div className="container">
                    {/* header title section */}
                    <div className="space-y-3 text-center py-14">
                        <p
                            data-aos="fade-up"
                            className="text-primary text-2xl font-semibold">
                            WE DO BEST
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="text-3xl font-bold">
                            THAN YOU WISH
                        </h1>
                    </div>

                    {/* Card Section */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "lorem ipsum dolor sit amet consectetur adipisicing elit."
                                }
                                icon={<SlStar />}
                            />
                            <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "lorem ipsum dolor sit amet consectetur adipisicing elit."
                                }
                                icon={<SlStar />}
                            />
                        </div>
                        <div className="space-y-8">
                            <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "lorem ipsum dolor sit amet consectetur adipisicing elit."
                                }
                                icon={<SlStar />}
                            />
                            <BannerCard
                                title={"Fast Booking"}
                                description={
                                    "lorem ipsum dolor sit amet consectetur adipisicing elit."
                                }
                                icon={<SlStar />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
