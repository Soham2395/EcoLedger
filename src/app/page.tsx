"use client"

import React from "react"
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card"
import { HoverEffect } from "../components/ui/card-hover-effect"
import { StickyScroll } from "../components/ui/sticky-scroll-reveal"
import { AnimatedTooltip } from "../components/ui/animated-tooltip"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"
import { FloatingNav } from "../components/ui/floating-navbar"
import { TracingBeam } from "../components/ui/tracing-beam"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { SparklesCore } from "../components/ui/sparkles"
import { BackgroundGradient } from "../components/ui/background-gradient"
import ParticlesComponent from "../components/ui/particles"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-dark-blue via-black to-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
                'Revolutionizing Renewable Energy with Blockchain',
                2000,
                'Empowering Green Energy Through Technology',
                2000,
                'Transforming the Future of Energy Certificates',
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
          className="flex flex-col md:flex-row gap-4 mb-8 mt-8"
        >
          <div className="backdrop-filter backdrop-blur-lg bg-gradient-to-r from-dark-blue via-black to-black rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-2">100+</h3>
            <p className="text-sm text-gray-300">Energy Providers</p>
          </div>
          <div className="bg-opacity-20 backdrop-filter backdrop-blur-lg bg-dark-blue rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">1M+</h3>
            <p className="text-sm text-gray-300">RECs Traded</p>
          </div>
          <div className="bg-opacity-20 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-black via-black to-dark-blue rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">50+</h3>
            <p className="text-sm text-gray-300">Countries</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4"
        >
          <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Get Started
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Transparent Ledger",
    description: "Every REC transaction is recorded on our public blockchain, ensuring complete transparency.",
    icon: "🔍",
    link: "#transparent-ledger",
  },
  {
    title: "Smart Contracts",
    description: "Automated verification and tokenization of energy production through smart contracts.",
    icon: "📜",
    link: "#smart-contracts",
  },
  {
    title: "Global REC Trading",
    description: "Access a worldwide market for buying and selling Renewable Energy Certificates.",
    icon: "🌍",
    link: "#global-rec-trading",
  },
  {
    title: "Fraud Prevention",
    description: "Immutable records and verification processes eliminate the risk of double-counting or fraud.",
    icon: "🛡️",
    link: "#fraud-prevention",
  },
]

const people = [
  {
    id: 1,
    name: "Soham Chakraborty",
    designation: "Project Manager",
    image: "",
  },
  {
    id: 2,
    name: "Priyam Aggarwal",
    designation: "UI Designer",
    image: "",
  },
  {
    id: 3,
    name: "Amandeep Singh",
    designation: "Blockchain Developer",
    image: "",
  },
  {
    id: 4,
    name: "Bama Charan",
    designation: "Backend Developer",
    image: "",
  },
]

const testimonials = [
  {
    quote: "EcoLedger has revolutionized how we manage our RECs. The transparency is unmatched.",
    name: "Sarah Johnson",
    title: "Sustainability Director, GreenCorp",
  },
  {
    quote: "The global trading platform opened up new markets for our renewable energy certificates.",
    name: "Michael Chang",
    title: "CEO, SunPower Solutions",
  },
  {
    quote: "Smart contracts have streamlined our entire REC verification process. It's a game-changer.",
    name: "Emma Rodriguez",
    title: "Operations Manager, WindWave Energy",
  },
  {
    quote: "The security features give us peace of mind when trading our renewable energy certificates.",
    name: "David Lee",
    title: "CTO, GreenTech Innovations",
  },
]

export default function EcoLedger() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-dark-blue via-black to-black text-white">
      <FloatingNav className="bg-dark-blue text-white"
        navItems={[
          { name: "Home", link: "#home" },
          { name: "Features", link: "#features" },
          { name: "Insights", link: "#insights" },
          { name: "Team", link: "#team" },
          { name: "Contact", link: "#contact" }
        ]}
      />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Features Section */}
      <div className="relative">
        <TracingBeam className="px-4">
          <section id="features" className="py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Why Choose EcoLedger?</h2>
              <HoverEffect items={features} />
            </div>
          </section>

          {/* REC Trading Insights */}
          <section id="insights" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">REC Trading Insights</h2>
              <StickyScroll
                content={[
                  {
                    title: "Total RECs Traded",
                    description: "Over 1,234,567 RECs have been traded on our platform, representing a significant portion of the global renewable energy market.",
                  },
                  {
                    title: "Active Traders",
                    description: "Our platform hosts 5,678 active traders from around the world, including energy producers, corporations, and individual investors.",
                  },
                  {
                    title: "Carbon Offset",
                    description: "The RECs traded on EcoLedger have contributed to offsetting 987,654 tons of carbon emissions, equivalent to planting millions of trees.",
                  },
                  {
                    title: "Market Growth",
                    description: "The REC market on our platform has shown a 200% year-over-year growth, indicating strong adoption of renewable energy solutions.",
                  },
                ]}
              />
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-gradient-to-r from-dark-blue via-black to-black">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
              <div className="flex flex-wrap justify-center gap-16">
                {people.map((person) => (
                  <AnimatedTooltip
                    key={person.id}
                    items={[{
                      id: person.id,
                      name: person.name,
                      designation: person.designation,
                      image: person.image,
                    }]}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-r from-dark-blue via-black to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-200"
                  >
                    Join the Green Revolution
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Start trading Renewable Energy Certificates on our secure blockchain platform today.
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
      <footer className="bg-gradient-to-r from-dark-blue via-black to-black py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">EcoLedger</h3>
            <p className="text-sm text-gray-400">Empowering a sustainable future through blockchain technology.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400">FAQs</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 EcoLedger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}