"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("scrolled-down-section4");
      if (section) {
        const { top } = section.getBoundingClientRect();
        const isVisible = top >= 0 && top <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      id="scrolled-down-section4"
      className="flex justify-between py-5 mx-5 sm:px-8 xl:px-16">
      <div>
        <Link className="mr-auto" href="/#">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}>
            <h1 className="text-xl font-semibold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-bl from-primary ">
              Mamuka
            </h1>
          </motion.div>
        </Link>
      </div>
      <nav>
        <menu className="flex gap-5">
          <li>
            <Link href="https://github.com/mamuka111" target="blank">
              <Button variant={"outline"} size="icon">
                <Github className="h-5 w-5 font-light text-primary"></Github>
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/mamuka-avsajanishvili-47ab6b269/"
              target="blank">
              <Button variant={"outline"} size="icon">
                <Linkedin className="h-5 w-5 font-light text-primary"></Linkedin>
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/mamuka_avsajanishvili/"
              target="blank">
              <Button variant={"outline"} size="icon">
                <Instagram className="h-5 w-5 font-light text-primary"></Instagram>
              </Button>
            </Link>
          </li>
          <li>
            <ModeToggle></ModeToggle>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
