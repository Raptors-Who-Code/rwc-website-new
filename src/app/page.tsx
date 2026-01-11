"use client";

export default function Home() {
    return (
        <>
            <Hero />
            <LanguagesWeUse />
            {/* <EventsPreview /> */}
            <JobsPreview />
            <FAQ />
        </>
    );
}

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, MoveRight, Users } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = ["curious", "ambitious", "creative", "collaborative", "relentless"];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles.length]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:pt-40 items-center justify-center flex-col">
                    <div>
                        <Button variant="secondary" size="sm" className="gap-4">
                            Meet the Raptors <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="flex gap-4 flex-col text-center">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span className="text-spektr-cyan-50">Raptors Who Code are</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[4rem] md:h-[5rem]">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: -100 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : {
                                                      y: titleNumber > index ? -150 : 150,
                                                      opacity: 0,
                                                  }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mt-4">
                            Whether you're a beginner or seasoned dev, Raptors Who Code is your
                            space to explore programming, attend events, build projects, and grow
                            together in tech.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2">
                            <Users className="w-5 h-5" />
                            Join the Community
                        </Button>
                        
                         <Button asChild size="lg" variant="outline" className="gap-2"> 
                            <a href="/events">
                                <CalendarDays className="w-5 h-5" />
                                Explore Events Test
                            </a>

                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

function LanguagesWeUse() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const languages = [
        { name: "Python", logo: "/assets/languages/python.png" },
        { name: "JavaScript", logo: "/assets/languages/javascript.png" },
        { name: "C++", logo: "/assets/languages/cpp.png" },
        { name: "Java", logo: "/assets/languages/java.png" },
        { name: "HTML", logo: "/assets/languages/html.png" },
        { name: "CSS", logo: "/assets/languages/css.png" },
        { name: "TypeScript", logo: "/assets/languages/typescript.png" },
        { name: "C#", logo: "/assets/languages/csharp.png" },
        { name: "PostgreSQL", logo: "/assets/languages/postgresql.png" },
        { name: "React", logo: "/assets/languages/react.png" },
    ];

    useEffect(() => {
        if (!api) return;

        const timeout = setTimeout(() => {
            const next =
                api.selectedScrollSnap() + 1 === api.scrollSnapList().length
                    ? 0
                    : api.selectedScrollSnap() + 1;

            api.scrollTo(next);
            setCurrent(next);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [api, current]);

    return (
        <div className="w-full pb-20 lg:pb-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {languages.map((lang, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 sm:basis-1/4 lg:basis-1/8"
                                >
                                    <div className="flex flex-col items-center justify-center p-4 aspect-square bg-background rounded-lg border overflow-hidden relative">
                                        {/* Image container with overlay */}
                                        <div className="relative w-[50px] h-[50px]">
                                            <Image
                                                src={lang.logo}
                                                alt={lang.name}
                                                fill
                                                className="object-contain z-0"
                                            />
                                            <div className="absolute inset-0 bg-black/10 z-10 rounded" />
                                        </div>

                                        {/* <span className="mt-3 text-sm text-muted-foreground">
                                            {lang.name}
                                        </span> */}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

import JobsPreview from "@/components/building/JobsPreview";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PhoneCall } from "lucide-react";

function FAQ() {
    return (
        <div className="w-full py-20 lg:py-30">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div className="flex gap-10 flex-col">
                        <div className="flex gap-12 flex-col">
                            <div>
                                <Badge variant="outline">FAQ</Badge>
                            </div>
                            <div className="flex gap-10 flex-col">
                                <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl text-left font-normal">
                                    Curious about Raptors Who Code?
                                </h4>
                                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                                    We’re Montgomery College’s computer science club, open to all
                                    students interested in tech — whether you're just getting
                                    started or already building your own apps.
                                </p>
                            </div>
                            <div>
                                <Button className="gap-3" variant="outline">
                                    Have more questions? Reach out
                                    <PhoneCall className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: "Who can join the club?",
                                answer: "Anyone at Montgomery College with an interest in tech, programming, or digital creativity! No experience required.",
                            },
                            {
                                question: "Do I need to know how to code?",
                                answer: "Not at all. We welcome beginners! Many of our events are beginner-friendly and designed to help you learn.",
                            },
                            {
                                question: "What kind of events do you host?",
                                answer: "Hackathons, workshops, study groups, project nights, guest speakers, and more!",
                            },
                            {
                                question: "When and where do you meet?",
                                answer: "We meet weekly on campus or in Discord. Check the Events page or our Discord for up-to-date info.",
                            },
                            {
                                question: "Is there a membership fee?",
                                answer: "Nope! Raptors Who Code is completely free to join and participate in.",
                            },
                            {
                                question: "Can I get help on my projects or homework?",
                                answer: "Yes! We often host co-working/study sessions and you can always ask in our Discord for help.",
                            },
                            {
                                question: "How do I stay updated?",
                                answer: "Follow us on Discord, check the Events page, or subscribe to our newsletter (coming soon).",
                            },
                            {
                                question: "Can I help run the club?",
                                answer: "Absolutely. We're always looking for volunteers and officers who want to get involved.",
                            },
                        ].map((item, index) => (
                            <AccordionItem key={index} value={"item-" + index} className="text-lg">
                                <AccordionTrigger className="text-lg">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-lg text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

// function JobsPreview() {
//     return <div>Jobs</div>;
// }

// function EventsPreview() {
//     return <div>Events</div>;
// }
