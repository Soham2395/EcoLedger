"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { FloatingNav } from "../components/ui/floating-navbar";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { SparklesCore } from "../components/ui/sparkles";
import { BackgroundGradient } from "../components/ui/background-gradient";
import ParticlesComponent from "../components/ui/particles";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BackgroundGradient className="absolute inset-0 opacity-20" />
      <ParticlesComponent />
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Image
            src="/image/logo.png"
            alt="EcoLedger"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              EcoLedger
            </span>
          </h1>
          <div className="h-20 md:h-16">
            <TypeAnimation
              sequence={[
                "Revolutionizing Renewable Energy with Blockchain",
                2000,
                "Empowering Green Energy Through Technology",
                2000,
                "Transforming the Future of Energy Certificates",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl text-gray-300"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-5 mb-8 mt-8"
        >
          <div className=" rounded-lg p-6 text-center bg-gradient-to-r from-black via-gray-900 to-black mybackground">
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              <CountUp start={0} end={100} duration={4} separator=" ">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>+</button>
                  </div>
                )}
              </CountUp>
            </h3>
            <p className="text-sm text-gray-300">Energy Providers</p>
          </div>
          <div className="rounded-lg p-6 text-center bg-gradient-to-r from-black via-gray-900 to-black mybackground">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              <CountUp start={0} end={1000} duration={4} separator=" ">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>+</button>
                  </div>
                )}
              </CountUp>
            </h3>
            <p className="text-sm text-gray-300">RECs Traded</p>
          </div>
          <div className="rounded-lg p-6 text-center bg-gradient-to-r from-black via-gray-900 to-black mybackground">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              <CountUp start={0} end={50} duration={4} separator=" ">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>+</button>
                  </div>
                )}
              </CountUp>
            </h3>
            <p className="text-sm text-gray-300">Countries</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4"
        >
          <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Transparent Ledger",
    description:
      "Every REC transaction is recorded on our public blockchain, ensuring complete transparency.",
    icon: "🔍",
    link: "#transparent-ledger",
  },
  {
    title: "Smart Contracts",
    description:
      "Automated verification and tokenization of energy production through smart contracts.",
    icon: "📜",
    link: "#smart-contracts",
  },
  {
    title: "Global REC Trading",
    description:
      "Access a worldwide market for buying and selling Renewable Energy Certificates.",
    icon: "🌍",
    link: "#global-rec-trading",
  },
  {
    title: "Fraud Prevention",
    description:
      "Immutable records and verification processes eliminate the risk of double-counting or fraud.",
    icon: "🛡️",
    link: "#fraud-prevention",
  },
];

const people = [
  {
    id: 1,
    name: "Soham Chakraborty",
    designation: "Project Manager",
    image: "/image/soham.jpeg",
    link: "https://www.linkedin.com/in/soham-chakraborty-108450255/",
  },
  {
    id: 2,
    name: "Priyam Aggarwal",
    designation: "Frontend Developer",
    image: "/image/priyam.jpg",
    link: "https://www.linkedin.com/in/priyamaggarwal/",
  },
  {
    id: 3,
    name: "Amandeep Singh",
    designation: "Blockchain Developer",
    image: "/image/amandeep.jpeg",
    link: "https://www.linkedin.com/in/amandeep-singh-linked-in/",
  },
  {
    id: 4,
    name: "Bama Charan",
    designation: "Backend Developer",
    image: "/image/bama.jpeg",
    link: "https://www.linkedin.com/in/bamacharanchhandogi/",
  },
];

const testimonials = [
  {
    quote:
      "EcoLedger has revolutionized how we manage our RECs. The transparency is unmatched.",
    name: "Sarah Johnson",
    title: "Sustainability Director, GreenCorp",
  },
  {
    quote:
      "The global trading platform opened up new markets for our renewable energy certificates.",
    name: "Michael Chang",
    title: "CEO, SunPower Solutions",
  },
  {
    quote:
      "Smart contracts have streamlined our entire REC verification process. It's a game-changer.",
    name: "Emma Rodriguez",
    title: "Operations Manager, WindWave Energy",
  },
  {
    quote:
      "The security features give us peace of mind when trading our renewable energy certificates.",
    name: "David Lee",
    title: "CTO, GreenTech Innovations",
  },
];

export default function EcoLedger() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatingNav
        className="bg-dark-blue text-white" // Ensure this color is set correctly
        navItems={[
          { name: "Home", link: "#home" },
          { name: "Features", link: "#features" },
          { name: "Insights", link: "#insights" },
          { name: "Team", link: "#team" },
          { name: "Contact", link: "#contact" },
        ]}
      />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Features Section */}
      <div className="relative">
        <TracingBeam className="px-4">
          <section
            id="features"
            className=" p-5 my-20 bg-gradient-to-r from-black via-gray-900 to-black mybackground"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  EcoLedger?
                </span>
              </h2>
              <HoverEffect items={features} />
            </div>
          </section>

          {/* REC Trading Insights */}
          <div id="how"></div>
          <br />
          <br />
          <section className="p-5 my-20 bg-gradient-to-r from-black via-gray-900 to-black mybackground">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  REC
                </span>{" "}
                Trading Insights
              </h2>
              <StickyScroll
                content={[
                  {
                    title: "Total RECs Traded",
                    description:
                      "Over 1,234,567 RECs have been traded on our platform, representing a significant portion of the global renewable energy market.",
                  },
                  {
                    title: "Active Traders",
                    description:
                      "Our platform hosts 5,678 active traders from around the world, including energy producers, corporations, and individual investors.",
                  },
                  {
                    title: "Carbon Offset",
                    description:
                      "The RECs traded on EcoLedger have contributed to offsetting 987,654 tons of carbon emissions, equivalent to planting millions of trees.",
                  },
                  {
                    title: "Market Growth",
                    description:
                      "The REC market on our platform has shown a 200% year-over-year growth, indicating strong adoption of renewable energy solutions.",
                  },
                ]}
              />
              <div id="testimonials"></div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black mybackground">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Users
                </span>{" "}
                Say
              </h2>
              <InfiniteMovingCards
                items={testimonials}
                direction="right" // Change direction as needed
                speed="normal" // Set speed: 'fast', 'normal', or 'slow'
                pauseOnHover={true} // Set to true to pause on hover
                
              />
            </div>
          </section>
          <div id="about"></div>
          <br></br>
          <br></br>
          <br></br>
          {/* Team Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12">
                Meet Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Team
                </span>
              </h2>
              <div className="flex flex-wrap justify-center gap-10 scale-150">
                {people.map((person) => (
                  <a
                    key={person.id}
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedTooltip
                      items={[
                        {
                          id: person.id,
                          name: person.name,
                          designation: person.designation,
                          image: person.image,
                        },
                      ]}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="join" className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <CardContainer className="inter-var text-center ">
                <CardBody className="bg-gradient-to-r from-black via-gray-900 to-black mybackground relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xlb mx-auto font-bold text-neutral-200"
                  >
                    Join the Green Revolution
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Start trading Renewable Energy Certificates on our secure
                    blockchain platform today.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4 p-4">
                    <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 w-full">
                      Get Started
                    </Button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>
        </TracingBeam>
      </div>

      {/* Footer */}
      <footer className="mx-auto my-20 flex flex-col justify-center items-center">
        <div className="p-10 max-w-9xl mx-auto flex flex-wrap justify-center items-center gap-10 bg-gradient-to-r from-black via-gray-900 to-black mybackground">
          <Image
            src="/image/logo.png"
            alt="EcoLedger"
            width={200}
            height={200}
          />
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                EcoLedger
              </span>
            </h3>
            <p className="text-sm text-gray-400">
              Empowering a sustainable future through blockchain technology.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="flex flex-col  text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-green-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-green-400">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                {/* LinkedIn Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                {/* Twitter Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 EcoLedger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
