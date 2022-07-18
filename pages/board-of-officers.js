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
          content="The board that makes SRVSO possible."
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
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Chair of the Board</p>
              <p className="font-medium text-gray-300">Alagu Subramanian</p>
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
          <AccordionContent>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Executive Director</p>
              <p className="font-medium text-gray-300">Arav Bhattacharya</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Associate Director</p>
              <p className="font-medium text-gray-300">Sundar Subramanian</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Finance</p>
              <p className="font-medium text-gray-300">Sundar Subramanian</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Outreach</p>
              <p className="font-medium text-gray-300">Matthew Wang</p>
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
          <AccordionContent>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Build Events</p>
              <p className="font-medium text-gray-300">Praveer Balaka</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Theory Events</p>
              <p className="font-medium text-gray-300">Akshay Kannan</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Instant Challenge</p>
              <p className="font-medium text-gray-300">Pranav Vudumula</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Administrative Secretary</p>
              <p className="font-medium text-gray-300">Pranav Hegde</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Technology</p>
              <p className="font-medium text-gray-300">Fatimah Hussain</p>
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
          <AccordionContent>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Build Events</p>
              <p className="font-medium text-gray-300">Praveer Balaka</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Ayan Bhatia</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Ansh Gandhi</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Auron Bhattacharya</p>
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
          <AccordionContent>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Theory Events</p>
              <p className="font-medium text-gray-300">Siddhanth Dala</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Arush Jain</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Megha Guntuku</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Ali Siddiqui</p>
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
          <AccordionContent>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Director of Instant Challenge</p>
              <p className="font-medium text-gray-300">Kiruthika Marikumaran</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Adhya Akki</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Adviti Aleti</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Aarav Manjunath</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Rimli Mitra</p>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <p className="text-gray-400">Event Head</p>
              <p className="font-medium text-gray-300">Swastik Patel</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
