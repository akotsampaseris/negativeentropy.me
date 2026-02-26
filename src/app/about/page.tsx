import { HiCalendar, HiLocationMarker, HiFlag } from "react-icons/hi";
import { Metadata } from "next";
import { GreenLink } from "@/src/components/ui/GreenLink/GreenLink";
import { FrequentlyAskedQuestions } from "@/src/components/features/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

export const metadata: Metadata = {
    title: "About me",
    description: "Theoretical physicist, software engineer, and hard determinist. The story behind negativeentropy.me.",
};

const timelineItems = [
    {
        title: "Being Born",
        date: "December 1992",
        location: "Nea Artaki, Greece",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                I don't remember much about this milestone. The next 18 years were mostly filled with football, friends, and school. I was such a child back then. I broke the
                occasional computer to see what's inside, played MMORPGs on dial-up internet, and somehow managed to go into university.
            </p>
        ),
    },
    {
        title: "Move to Athens",
        date: "September 2010",
        location: "Athens, Greece",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                This is where my real life starts, this is when I found myself. I moved to Athens to study{" "}
                <strong className="text-gray-100 font-semibold">Sports Science and Physical Education</strong> in the{" "}
                <strong className="text-gray-100 font-semibold">University of Athens</strong>, since I was obsessed with{" "}
                <strong className="text-gray-100 font-semibold">football</strong>. In my three years in Athens I got actively engaged in political praxis, translating theory into
                direct action and community involvement. Toward the end of my time in Athens, I accidentally fell in love with{" "}
                <strong className="text-gray-100 font-semibold">physics</strong> — a classic case of one thing leading to several unsolved problems.
            </p>
        ),
    },
    {
        title: "Life-changing decision #1: Go abroad to study Physics",
        date: "September 2013",
        location: "Manchester, UK",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                Moving abroad to study physics felt like a big decision at the time — and to be fair, it was. Between learning how to make tea properly and deciphering{" "}
                <strong className="text-gray-100 font-semibold">quantum mechanics</strong>, I somehow found a rhythm. By my second year, I was already getting involved in{" "}
                <strong className="text-gray-100 font-semibold">professional research</strong> with two of my professors, which probably says more about how obsessed I was than how
                prepared I felt.
            </p>
        ),
    },
    {
        title: "The best year of my life",
        date: "September 2016",
        location: "Durham, UK",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                The best year of my life was the one I spent doing my master's in <strong className="text-gray-100 font-semibold">particle physics</strong> at the{" "}
                <strong className="text-gray-100 font-semibold">University of Durham</strong> — though it didn't start out that way. I was easily the least prepared student in the
                room, constantly trying to catch up. But something clicked along the way. We covered <strong className="text-gray-100 font-semibold">quantum field theory</strong>,{" "}
                <strong className="text-gray-100 font-semibold">general relativity</strong>, and even <strong className="text-gray-100 font-semibold">string theory</strong>. My
                thesis was on the{" "}
                <GreenLink href="https://iopscience.iop.org/article/10.1088/1751-8113/42/50/504008/pdf" target="_blank" rel="noopener noreferrer">
                    AdS/CFT correspondence and holographic entanglement entropy
                </GreenLink>
                , which was as fascinating as it was mind-bending. I finished at the top of the class and picked up an award — it was the hardest I'd ever worked, and the most
                alive I'd ever felt.
            </p>
        ),
    },
    {
        title: "Life-changing decision #2: Return to Greece and become a full-time programmer",
        date: "September 2019",
        location: "Athens, Greece",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                After my master's, I started a <strong className="text-gray-100 font-semibold">PhD in Quantum Plasmonics</strong> at the{" "}
                <strong className="text-gray-100 font-semibold">University of Birmingham</strong> and made it through the first year. But somewhere along the way, I realized my
                heart wasn't in it. I still loved physics, but academia no longer felt like the right path. At the same time, I was already working as a developer on the side, and
                that work felt sharp, fast, and full of possibility. So I made the switch, moved back to Greece, and went all in.
            </p>
        ),
    },
    {
        title: "Covid 19: A blur",
        date: "January 2020",
        location: "Athens, Greece",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                Like for most people, those years flew by in a strange mix of uncertainty and routine. For me, they were defined by nonstop work — long hours, new challenges, and
                the kind of tunnel vision that comes with building things under pressure. I've now been working professionally as a developer for about eight years, and while I've
                learned a lot, I've also been thinking more seriously about what comes next.
            </p>
        ),
    },
    {
        title: "Focus on Open-Source",
        date: "January 2025",
        location: "Athens, Greece",
        content: (
            <p className="text-sm leading-relaxed text-gray-400 max-w-xl">
                After years of building things behind closed doors, I've decided my next chapter belongs to the{" "}
                <strong className="text-gray-100 font-semibold">open internet</strong>. I want to solve real problems — the kind that matter to developers, to technology, and maybe
                even to society. <strong className="text-gray-100 font-semibold">Open source</strong> is where I can do that while leaving a mark that others can build on. Public
                by default, driven by curiosity, focused on impact.
            </p>
        ),
    },
];

export default function AboutPage() {
    return (
        <div className="w-full max-w-2xl space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-white">The man behind the mask</h1>
                <p className="text-sm leading-relaxed font-mono max-w-xl" style={{ color: "#9ca3af" }}>
                    This isn't a full autobiography, just a look at the kind of stuff I like to explore, build, and occasionally overthink. Mostly driven by curiosity and a habit
                    of going deep when something grabs my attention.
                </p>
                <div className="h-px w-24" style={{ background: "linear-gradient(to right, #4ade80, transparent)" }} />
            </div>

            {/* Timeline */}
            <div className="space-y-4">
                {/* Section header */}
                <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold tracking-[0.2em] uppercase" style={{ color: "#4ade80" }}>
                        The Highlights
                    </h3>
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />
                </div>

                {/* Timeline items */}
                <div className="relative ml-1">
                    {/* Vertical line */}
                    <div className="absolute left-[3px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, #4ade8055, #4ade8011)" }} />

                    <div className="space-y-10">
                        {timelineItems.map((item, i) => (
                            <div key={i} className="group relative flex gap-6 pl-8">
                                {/* Node */}
                                <div
                                    className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125"
                                    style={{
                                        backgroundColor: "#4ade80",
                                        boxShadow: "0 0 6px #4ade8066",
                                    }}
                                />

                                {/* Content */}
                                <div className="flex-1 space-y-2">
                                    {/* Title */}
                                    <h5 className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors duration-200">{item.title}</h5>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#4ade8066" }}>
                                            <HiCalendar className="text-xs" />
                                            {item.date}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#4ade8066" }}>
                                            <HiLocationMarker className="text-xs" />
                                            {item.location}
                                        </div>
                                    </div>

                                    {/* Body */}
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-4 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />
                    <h4 className="text-base font-semibold tracking-[0.2em] uppercase" style={{ color: "#4ade80" }}>
                        Frequently Asked Questions
                    </h4>
                    <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #4ade8033, transparent)" }} />
                </div>
                <FrequentlyAskedQuestions />
            </div>
        </div>
    );
}
