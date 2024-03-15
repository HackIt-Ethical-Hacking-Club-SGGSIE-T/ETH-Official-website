import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./srcs/text-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center  h-[20rem] w-full">
      <TextRevealCard
        text="&#34;You understand the system's vulnerabilities.&#34;"
        revealText="&#34;I navigate the code's complexities.&#34;"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Cybersecurity relies on ethical hackers as vigilant protectors
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
