import Head from 'next/head';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from '@components/Accordion';
import { FiChevronDown } from 'react-icons/fi';

export default function BoardOfOfficers() {
  return (
    <>
      <Head>
        <title>Board of Officers — SRVSO</title>
        <meta
          name="description"
          content="Meet the officer board that makes SRVSO 22-23 possible."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Officers</h2>
        <p className="text-lg">The board that makes SRVSO possible.</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Board of Directors</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <div className="flex-col flex-wrap justify-center m-auto">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/alagu.jpeg"
              />
              <p className="text-center text-gray-400 ">Advisory Board</p>
              <p className="font-medium text-center text-gray-300">
                Alagu Subramanian
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Executive Sector</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="flex justify-between">
            <div className="pl-20">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/arav.png"
              />
              <p className="text-gray-400">Executive Director</p>
              <p className="font-medium text-center text-gray-300">
                Arav Bhattacharya
              </p>
            </div>
            <div className="pr-20 text-center">
              <img
                className="m-auto"
                style={{ width: 120, height: 100 }}
                src="/images/officers/sundar.png"
              />
              <p className="text-gray-400text-center ">Associate Director</p>
              <p className="font-medium text-center text-gray-300">
                Sundar Subramanian
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Operational Sector</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="flex justify-between">
            <div className="">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/fatimah.png"
              />
              <p className="text-center text-gray-400">Webmaster</p>
              <p className="font-medium text-center text-gray-300">
                Fatimah Hussain
              </p>
            </div>
            <div className="text-center ">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/pranavv.jpg"
              />
              <p className="text-center text-gray-400 ">Logistics Officer</p>
              <p className="font-medium text-center text-gray-300">
                Pranav Vudumula
              </p>
            </div>
            <div className="text-center">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/pranavh.jpg"
              />
              <p className="text-gray-400text-center ">
                Communications Officer
              </p>
              <p className="font-medium text-center text-gray-300">
                Pranav Hegde
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Build Events Committee</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="flex justify-between">
            <div className="">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/praveer.jpg"
              />
              <p className="text-center text-gray-400">Build Events Head</p>
              <p className="font-medium text-center text-gray-300">
                Praveer Balaka
              </p>
            </div>
            <div className="text-center ">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/ayan.jpg"
              />
              <p className="text-center text-gray-400 ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Ayan Bhatia
              </p>
            </div>
            <div className="text-center">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/ansh.jpg"
              />
              <p className="text-gray-400text-center ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Ansh Gandhi
              </p>
            </div>
            <div className="text-center">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/auron.jpg"
              />
              <p className="text-center text-gray-400 ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Auron Bhattacharya
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Theory Events Committee</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="flex justify-between">
            <div className="">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/akshay.jpg"
              />
              <p className="text-center text-gray-400">Theory Events Head</p>
              <p className="font-medium text-center text-gray-300">
                Akshay Khannan
              </p>
            </div>
            <div className="text-center ">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/megha.jpeg"
              />
              <p className="text-center text-gray-400 ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Megha Guntuku
              </p>
            </div>
            <div className="text-center">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/arush.jpg"
              />
              <p className="text-gray-400text-center ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Arush Jain
              </p>
            </div>
            <div className="text-center">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/ali.jpg"
              />
              <p className="text-center text-gray-400 ">Event Officer</p>
              <p className="font-medium text-center text-gray-300">
                Ali Siddiqui
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionHeader>
            <AccordionTrigger>
              <span>Instant Challenge Committee</span>
              <FiChevronDown />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="flex justify-between">
            <div className="pl-20">
              <img
                className="m-auto"
                style={{ width: 100, height: 100 }}
                src="/images/officers/adviti.jpg"
              />
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-center text-gray-300">
                Adviti Aleti
              </p>
            </div>
            <div className="pr-20 text-center">
              <img
                className="m-auto"
                style={{ width: 120, height: 100 }}
                src="/images/officers/nikitha.jpg"
              />
              <p className="text-center text-gray-400 ">Event Head</p>
              <p className="font-medium text-center text-gray-300">
                Nikitha Bangalore
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
