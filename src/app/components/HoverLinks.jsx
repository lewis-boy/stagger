"use client"
import React from "react"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

export const HoverLinks = () => {
  return (
    <section className="overflow-x-hidden bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="./images/omocat_pokemon.jpg"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="./images/omori_mirror.jpg"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="./images/scarf-omori.jpg"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="./images/omori.jpg"
          href="#"
        />
      </div>
    </section>
  )
}

const Link = ({ heading, subheading, imgSrc, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="whileHover"
      href={href}
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: {
              x: 0,
            },
            whileHover: {
              x: -16,
            },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 md:text-6xl group-hover:text-neutral-50"
        >
          {heading.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    x: 0,
                  },
                  whileHover: {
                    x: 16,
                  },
                }}
                transition={{
                  type: "spring",
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            )
          })}
        </motion.span>
        <span className="relative z-10 mt-2 block text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      {/* TODO: Add img here */}

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "backInOut",
        }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  )
}
