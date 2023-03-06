import { NavBar } from '~/components/navbar'
import { BsArrowReturnLeft, BsArrowRight } from 'react-icons/bs'
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineEnter,
} from 'react-icons/ai'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { Link } from '@remix-run/react'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

export default function Index() {
  return (
    <div>
      <div className="mx-auto px-5 min-h-screen max-w-3xl lg:max-w-7xl">
        <div className="flex flex-row">
          <div className="lg:w-1/2 lg:pt-10">
            <h1 className="text-4xl text-primary">
              Hello! Welcome to my home on the internet. This site is still
              work-in-progress and there's more to come!
            </h1>
          </div>
          <div
            id="terminal"
            className="w-1/2 ml-20 rounded-lg shadow-2xl divide-y divide-solid dark:bg-grey-800 hidden lg:block"
          >
            <div
              id="terminal-head"
              className="my-5 mx-4 flex items-center space-x-2"
            >
              <div className="w-3 h-3 bg-gray-200 border-2 rounded-full" />
              <div className="w-3 h-3 bg-gray-200 border-2 rounded-full" />
              <div className="w-3 h-3 bg-gray-200 border-2 rounded-full" />
            </div>
            <div id="terminal-body">
              <div
                id="terminal-body-hero-section"
                className="text-primary py-6 px-4"
              >
                <div className="">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Welcome to my site!')
                        .pauseFor(100)
                        .typeString('<br />')
                        .pauseFor(100)
                        .typeString("Let's get started...")
                        .callFunction((state) => {
                          // turn off animation
                          state.elements.cursor.style.animation = 'none'
                          // hide cursor
                          state.elements.cursor.style.display = 'none'
                        })
                        .start()
                    }}
                    options={{
                      delay: 60,
                    }}
                  />
                </div>
                <div className="flex my-6 justify-between">
                  <p className="italic">Select a category</p>
                  <ul className="space-x-2 items-center">
                    <li className="inline-block px-1 py-1 border rounded-md">
                      <AiOutlineArrowDown />
                    </li>
                    <li className="inline-block px-1 py-1 border rounded-md">
                      <AiOutlineArrowUp />
                    </li>
                    <li className="inline-block px-1 py-1 border rounded-md">
                      <BsArrowReturnLeft />
                    </li>
                  </ul>
                </div>
                <ul>
                  <li className="hover:animate-pulse-light hover:dark:animate-pulse-dark hover:dark:text-black rounded-md group">
                    <Link
                      to="/resume.pdf"
                      reloadDocument
                      className="flex items-center pl-4 pr-5 py-2"
                    >
                      <span className="w-5">1</span>
                      <span className="grow">Resume</span>
                      <HiOutlineArrowRight className="h-5 w-5 inline-block invisible group-hover:visible" />
                    </Link>
                  </li>
                  <li className="hover:animate-pulse-light hover:dark:animate-pulse-dark hover:dark:text-black rounded-md group">
                    <Link
                      to="/about"
                      reloadDocument
                      className="flex items-center mt-2 pl-4 pr-5 py-2"
                    >
                      <span className="w-5">2</span>
                      <span className="grow">About</span>
                      <HiOutlineArrowRight className="h-5 w-5 inline-block invisible group-hover:visible" />
                    </Link>
                  </li>
                  <li className="hover:animate-pulse-light hover:dark:animate-pulse-dark hover:dark:text-black rounded-md group">
                    <Link
                      to="/notes"
                      reloadDocument
                      className="flex items-center mt-2 pl-4 pr-5 py-2"
                    >
                      <span className="w-5">3</span>
                      <span className="grow">Notes</span>
                      <HiOutlineArrowRight className="h-5 w-5 inline-block invisible group-hover:visible" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
