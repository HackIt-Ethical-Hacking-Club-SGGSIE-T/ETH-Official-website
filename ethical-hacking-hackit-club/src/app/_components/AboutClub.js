import { teamHierarchy } from "../constants/index";
import Heading from "../_components/design/Heading";
import Section from "../_components/design/Section";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { GradientLight } from "../_components/design/Benefits";
import ClipPath from "../_assets/svg/ClipPath";
import { ThreeDCardDemo } from "./threeDCard";

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="sm:block md:max-w-md lg:max-w-2xl md:block lg:hidden"
                    title="Cybersecurity is a shared responsibility. Stop. Think. Connect"
                />

                {/* Visible when it goes to desktop view only */}
                <div className="hidden lg:block">
                    <TextRevealCardPreview />
                </div>

                <div className="font-bold text-[20px] md:p-4 md:text-[30px] lg:text-[40px] mt-8">
                    | &#34;Have a Look Into Our Team Hierarchy&#34;
                </div>
                <div className="flex flex-wrap gap-10">
                    {teamHierarchy.map((item) => (
                        <div
                        className="block relative mx-auto p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[25rem]"
                        key={item.id}
                        >
                        <ThreeDCardDemo title={item.title} description={item.text} imageLink={item.imageLink} />
                            {/* <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="mb-5 h5">{item.title}</h5>
                                <p className="mb-6 body-2 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-1">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div> */}

                            {item.light && <GradientLight />}

                            {/* <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                            </div> */}


                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
