import { HiCalendar, HiFlag, HiLocationMarker } from "react-icons/hi";

import { Metadata } from "next";
import Link from "next/link";

import PageTitle from "@/src/components/ui/Page/PageTitle";
import SectionHeader from "@/src/components/ui/Page/SectionHeader";

export const metadata: Metadata = {
  title: "About me"
}

export default function AboutPage() {
  return (
    <div className="w-fit space-y-4">
      <PageTitle titleText="The man behind the mask" />
      <p>This isn’t a full autobiography or anything — just a look at the kind of stuff I like to explore, build, and occasionally overthink. Mostly driven by curiosity and a habit of going deep when something grabs my attention.</p>
      <SectionHeader headerText="The Highlights" />
      <div className="py-4 px-4 lg:px-6">
        <ol className="relative border-s border-gray-600">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Being Born
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> December 1992
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Nea Artaki, Greece
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
              I don’t remember much about this milestone. The next 18 years were mostly filled with football, friends, and school. I was such a
              child back then. I broke the occasional computer to see what’s inside, played MMORPGs on dial-up internet, and somehow managed to go into university.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Move to Athens
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> September 2010
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Athens, Greece
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
              This is where my real life starts, this is when I found myself. I moved to Athens to study <strong>Sports Science and Physical Education</strong> in the <strong>University of Athens</strong>, since I was obsessed with <strong>football</strong>. In my three years in Athens I got actively engaged in political praxis, translating theory into direct action and community involvement. Toward the end of my time in Athens, I accidentally fell in love with <strong>physics</strong> — a classic case of one thing leading to several unsolved problems.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Life-changing decision #1: Go abroad to study Physics
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> September 2013
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Manchester, UK
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
            Moving abroad to study physics felt like a big decision at the time — and to be fair, it was. Between learning how to make tea properly and deciphering quantum mechanics, I somehow found my footing. By my second year, I was already getting involved in real research, which probably says more about how obsessed I was than how prepared I felt.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              The best year of my life
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> September 2016
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Durham, UK
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
            The best year of my life was the one I spent doing my master’s in <strong>particle physics</strong> in the <strong>University of Durham</strong> — though it didn’t start out that way. I was easily the least prepared student in the room, constantly trying to catch up and make sense of everything around me. But something clicked along the way. We covered <strong>quantum field theory</strong>, <strong>general relativity</strong>, and even <strong>string theory</strong> — the kind of material that feels impossible until, suddenly, it doesn’t. My thesis was on the <Link href="https://iopscience.iop.org/article/10.1088/1751-8113/42/50/504008/pdf" target="_blank">AdS/CFT correspondence and holographic entanglement entropy</Link>, which was as fascinating as it was mind-bending. By the end of it, I’d finished at the top of the class and even picked up an award, which still feels slightly surreal. It was the hardest I’d ever worked, and the most alive I’d ever felt.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Life-changing decision #2: Return to Greece and become a full-time
              programmer
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> September 2019
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Athens, Greece
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
              After my master’s, I started a <strong>PhD</strong> in <strong>Quantum Nanoplasmonics</strong> at the <strong>University of Birmingham</strong> and made it through the first year. But somewhere along the way, I realized my heart wasn’t in it. I still loved physics, but academia no longer felt like the right path — the pace was slow, the impact felt distant. At the same time, I was already working as a developer on the side, and that work felt sharp, fast, and full of possibility. So I made the switch, moved back to Greece, and went all in.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Covid 19: A blur
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> January 2020
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Athens, Greece
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
              Like for most people, those years flew by in a strange mix of uncertainty and routine. For me, they were defined by nonstop work — long hours, new challenges, and the kind of tunnel vision that comes with building things under pressure. I’ve now been working professionally as a developer for about eight years, and while I’ve learned a lot, I’ve also been thinking more seriously about what comes next. The next big decision — hopefully the most impactful one yet — feels like it’s just around the corner.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
              <HiFlag className="text-sm text-green-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              Focus on Open-Source
            </h3>
            <time className="flex items-center gap-2 mb-2 text-sm font-normal leading-none text-green-600">
              <div className="flex items-center gap-1">
                <HiCalendar /> January 2025
              </div>
              <div className="flex items-center gap-1">
                <HiLocationMarker /> Athens, Greece
              </div>
            </time>
            <p className="mb-4 text-base font-normal text-gray-300">
              After years of building things behind closed doors, I’ve decided my next chapter belongs to the open internet. I want to solve real problems — the kind that matter to developers, to technology, and maybe even to society. Open source is where I can do that while leaving a mark that others can build on. Whether it’s tools, infrastructure, or ideas, I want my work to be visible, useful, and out in the wild. That’s where I’m headed: public by default, driven by curiosity, and focused on impact.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
