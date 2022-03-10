import { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { FiMenu, FiPlus } from 'react-icons/fi';

export default function Header() {
  const DialogRoot = forwardRef((props, forwardedRef) => {
    const { className, ...itemProps } = props;
    return (
      <Dialog.Root {...itemProps} ref={forwardedRef} className={className} />
    );
  });

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between w-full max-w-5xl px-4 py-4 mx-auto bg-black bg-opacity-10 mb-14 backdrop-saturate-150 backdrop-blur-md lg:hidden">
        <Link href="/">
          <a>
            <figure className="relative w-12 h-12 mr-20">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </a>
        </Link>
        <ul className="flex justify-between text-sm gap-x-5">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/registration">
              <a>Registration</a>
            </Link>
          </li>
          <li>
            <HoverCard.Root openDelay={100} closeDelay={300}>
              <HoverCard.Trigger>
                <span className="cursor-default">Resources</span>
              </HoverCard.Trigger>
              <HoverCard.Content className="px-6 py-2 mt-3 bg-black border border-gray-800 rounded-md bg-opacity-95 backdrop-blur-xl">
                <HoverCard.Arrow className="relative text-gray-700 fill-current" />
                <ul>
                  <li className="py-2">
                    <Link href="/resources/theory-event-resources">
                      <a className="text-sm">Theory Event Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/build-event-resources">
                      <a className="text-sm">Build Event Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/instant-challenge-resources">
                      <a className="text-sm">Instant Challenge Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/coaches">
                      <a className="text-sm">Coaches</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/faq">
                      <a className="text-sm">FAQ</a>
                    </Link>
                  </li>
                </ul>
              </HoverCard.Content>
            </HoverCard.Root>
          </li>
          <li>
            <Link href="/meeting-presentation-slides">
              <a>Meeting Presentation Slides</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/board-of-officers">
              <a>Board of Officers</a>
            </Link>
          </li>
        </ul>
      </header>

      {/* On small devices, show a hamburger menu */}
      <header className="sticky top-0 z-10 items-center justify-between hidden w-full max-w-5xl py-3 mx-auto bg-black bg-opacity-50 px-7 mb-14 backdrop-saturate-150 backdrop-blur-md lg:flex">
        <Link href="/">
          <a>
            <figure className="relative w-10 h-10">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </a>
        </Link>
        <DialogRoot>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="grid px-3 py-2 text-gray-300 transition-colors bg-gray-800 rounded-full place-items-center hover:text-gray-100"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 grid overflow-y-auto bg-black bg-opacity-95 place-items-center">
              <Dialog.Content>
                <ul className="flex flex-col">
                  <li className="border-b border-gray-900">
                    <Link href="/">
                      <a className="menu-link">Home</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-900">
                    <Link href="/events">
                      <a className="menu-link">Events</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-900">
                    <Link href="/registration">
                      <a className="menu-link">Registration</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-900">
                    <Accordion.Root type="single" collapsible>
                      <Accordion.Item value="item-1">
                        <Accordion.Trigger className="flex items-center justify-between w-full text-left menu-link">
                          <p className="mr-96 sm:mr-64 xs:mr-0">Resources</p>
                          <FiPlus className="w-6 h-6" />
                        </Accordion.Trigger>
                        <Accordion.Content className="mb-6 ml-20 xs:ml-16">
                          <Link href="/resources/theory-event-resources">
                            <a className="block pb-3 text-sm">
                              Theory Event Resources
                            </a>
                          </Link>
                          <Link href="/resources/build-event-resources">
                            <a className="block pb-3 text-sm">
                              Build Event Resources
                            </a>
                          </Link>
                          <Link href="/resources/instant-challenge-resources">
                            <a className="block pb-3 text-sm">
                              Instant Challenge Resources
                            </a>
                          </Link>
                          <Link href="/resources/coaches">
                            <a className="block pb-3 text-sm">Coaches</a>
                          </Link>
                          <Link href="/resources/faq">
                            <a className="block pb-3 text-sm">FAQ</a>
                          </Link>
                        </Accordion.Content>
                      </Accordion.Item>
                    </Accordion.Root>
                  </li>
                  <li className="border-b border-gray-900">
                    <Link href="/meeting-presentation-slides">
                      <a className="menu-link">Meeting Presentation Slides</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-900">
                    <Link href="/contact">
                      <a className="menu-link">Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/board-of-officers">
                      <a className="menu-link">Board of Officers</a>
                    </Link>
                  </li>
                </ul>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </DialogRoot>
      </header>
    </>
  );
}
