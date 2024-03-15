// import Button from "../app/_components/design/Button";
// import Button from "./design/Button";
import Link from "next/link";
import Heading from "./design/Heading";
import Section from "./design/Section";
import Tagline from "./design/Tagline";
import { roadmap } from "../constants/index";
import { check2, grid, loading1 } from "../_assets";
import { Gradient } from "./design/Roadmap";

const AboutWork = () => {

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <h2 className="p-2 m-4 text-base font-bold">
                      {item.topTag}
                    </h2>
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[20rem] mt-8 mb-8 md:mb-20">
                      <Tagline>{new Date().toString()}</Tagline>

                      <div className="flex items-center px-4 py-1 rounded bg-n-1 text-n-8 ">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={10}
                          height={10}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <Link href={item.link} target='_blank'>
                        <img
                          className="w-full transition-transform duration-300 ease-in-out scale-100 hover:scale-90 focus:scale-90 hover:cursor-pointer"
                          src={item.imageUrl}
                          width={628}
                          height={426}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <h4 className="mb-4 h4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/">Our roadmap</Button>
        </div> */}
      </div>
    </Section>
  );
}

export default AboutWork
