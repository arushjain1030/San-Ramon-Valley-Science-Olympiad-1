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
      <div className="space-y-5">
        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Alagu Subramanian</b>
          </h3>
          <p>Chair of the Board</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/alagu.jpg" />
          <p className="p-5">
            {' '}
            Alagu is a college student at Baylor University. He is an aspiring
            medical researcher and physician with a passion for increasing the
            accessibility to hands-on education in K-12 instruction. Alagu has
            been with the SRVSO since its beginning as our founder and currently
            serves as the Chairman of our Board of Directors.{' '}
          </p>
        </div>

        <h2 className="pt-10"> Executive Sector </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Arav Bhattacharya</b>
          </h3>
          <p>Executive Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/arav.jpg" />
          <p className="p-5">
            {' '}
            Arav is a senior at Dougherty Valley High School. An aspiring
            mathematician, he is interested in enriching the quality of STEM
            education in hopes of helping students find the beauty in these
            subjects. Arav has been with SRVSO for 4 years and currently serves
            as the Executive Director.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Sundar Subramanian</b>
          </h3>
          <p>Associate Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/sundar.png" />
          <p className="p-5">
            {' '}
            Sundar is a sophomore at Dougherty Valley High School. He is
            interested in the Artificial Intelligence field with a passion for
            giving back to the community, and providing the same opportunities
            he was given as a child to today's youth. Sundar has been with the
            SRVSO for 5 years and currently serves as the Associate Director.{' '}
          </p>
        </div>

        <h2 className="pt-10"> Operational Sector </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Fatimah Hussain</b>
          </h3>
          <p>Webmaster</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/fatimah.jpeg" />
          <p className="p-5">
            {' '}
            Fatimah is the webmaster of SRVSO. She is in charge of building
            SRVSO's website and ensuring that the site's functionalities are
            great and the site is continuously updated as necessary. She also
            works alongside the communication team to ensure seamless
            communication from SRVSO to its participants. Outside of the tech
            world, Fatimah enjoys adding puzzles to her 750- 1000 piece jigsaw
            wall.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Pranav Hegde</b>
          </h3>
          <p>Communications Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/pranavh.jpg" />
          <p className="p-5">
            Pranav Hegde is a current senior at Dougherty Valley High School
            passionate about statistics and other fields of math. He enjoys
            spreading interests in STEM through his leadership in the Olympiad.
            He is a current officer of public outreach, and has also taken on
            the positions of Associative Secretary and build committee officer
            in the past few years.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Pranav Vudumula</b>
          </h3>
          <p>Logistics Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/pranavv.jpg" />
          <p className="p-5">
            Pranav is a Senior at Dougherty Valley High School. He is passionate
            about bringing STEM opportunities to all kids and plans to pursue
            careers in the CS field. Pranav has been with SRVSO for 3 years and
            is the Logistics Director.
          </p>
        </div>
        <h2 className="pt-10"> Build Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Praveer Balaka</b>
          </h3>
          <p>Build Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/praveer.jpg" />
          <p className="p-5">
            Praveer is a senior at Dougherty Valley High School. He is an
            aspiring neurosurgeon, and has a passion for introducing the younger
            generation to the world of STEM. Praveer is the current Director of
            Build Events, and this is his second year working with SRVSO.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Ayan Bhatia</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/ayan.jpg" />
          <p className="p-5">
            Ayan is a senior at Dougherty Valley High School. He is an aspiring
            engineering who loves to inspire a love of science in children at a
            young age. Ayan is currently on the Build Event Board and has been
            an SRVSO officer for one year.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Ansh Gandhi</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/ansh.png" />
          <p className="p-5">
            Ansh is a Junior at Dougherty Valley High School. He is an aspiring
            entrepreneur with a passion for business and improving the world.
            Ansh has been with SRVSO for a year and currently serves as a Build
            Team Officer.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Auron Bhattacharya</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/srvso-logo.png" />
          <p className="p-5">
            Auron is a first year member of the SRVSO in the build committee.
            Auron is excited to be working with the rest of the Science Olympiad
            team to get elementary-age kids interested in different fields of
            science.
          </p>
        </div>

        <h2 className="pt-10"> Theory Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Akshay Kannan</b>
          </h3>
          <p>Theory Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/akshay.jpg" />
          <p className="p-5">
            Akshay Kannan is a senior at Dougherty Valley High School. He is an
            aspiring computer programmer with a passion in Artificial
            Intelligence. He has been a part of SRVSO and joined it to provide
            his love of science to the kids of his community. He is currently
            the director of theory events
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Megha Guntuku</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/megha.jpg" />
          <p className="p-5">
            Megha is currently a junior at Dougherty Valley High School and
            hopes to work in the medical field in the future. She enjoys being a
            part of the SRVSO team as it allows her to take on an active role in
            preparing elementary school students for higher-level science
            classes. This is her first year at SRVSO, and she currently serves
            as a Theory Officer.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Arush Jain</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/arush.jpg" />
          <p className="p-5">
            Arush is a sophomore at Dougherty Valley High School. He is an
            aspiring software engineer with a passion for innovative technology.
            Arush has been with SRVSO for 1 year and currently serves as a
            Theory Event Officer.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Ali Siddiqui</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/ali.jpg" />
          <p className="p-5">DVSD Var Debate Team 3303S</p>
        </div>

        <h2 className="pt-10"> Instant Challenge Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Nikitha Bangalore</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/nikitha.jpg" />
          <p className="p-5">
            Nikitha is a junior at Dougherty Valley High School. She is
            currently exploring her options for possible careers, but is
            passionate about giving younger students exposure to STEM related
            activities. Nikitha has been with SRVSO for 1 year and currently
            serves as the Event Head of Instant Challenge.
          </p>
        </div>
        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Adviti Aleti</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/adviti.jpg" />
          <p className="p-5">
            Adviti Aleti is a junior. She is an aspiring medical researcher. Her
            passion is making STEM learning engaging and accessible to young
            students. Adviti has been with SRVSO for two years and currently
            serves as Event Head of Instant Challenge
          </p>
        </div>
      </div>
    </>
  );
}

// {/* <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Board of Directors</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent>
//             <div className="flex-col flex-wrap justify-center m-auto">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/alagu.jpeg"
//               />
//               <p className="text-center text-gray-400 ">Advisory Board</p>
//               <p className="font-medium text-center text-gray-300">
//                 Alagu Subramanian
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Executive Sector</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent className="flex justify-between">
//             <div className="pl-20">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/arav.png"
//               />
//               <p className="text-gray-400">Executive Director</p>
//               <p className="font-medium text-center text-gray-300">
//                 Arav Bhattacharya
//               </p>
//             </div>
//             <div className="pr-20 text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 120, height: 100 }}
//                 src="/images/officers/sundar.png"
//               />
//               <p className="text-gray-400text-center ">Associate Director</p>
//               <p className="font-medium text-center text-gray-300">
//                 Sundar Subramanian
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Operational Sector</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent className="flex justify-between">
//             <div className="">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/fatimah.png"
//               />
//               <p className="text-center text-gray-400">Webmaster</p>
//               <p className="font-medium text-center text-gray-300">
//                 Fatimah Hussain
//               </p>
//             </div>
//             <div className="text-center ">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/pranavv.jpg"
//               />
//               <p className="text-center text-gray-400 ">Logistics Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Pranav Vudumula
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/pranavh.jpg"
//               />
//               <p className="text-gray-400text-center ">
//                 Communications Officer
//               </p>
//               <p className="font-medium text-center text-gray-300">
//                 Pranav Hegde
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-4">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Build Events Committee</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent className="flex justify-between">
//             <div className="">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/praveer.jpg"
//               />
//               <p className="text-center text-gray-400">Build Events Head</p>
//               <p className="font-medium text-center text-gray-300">
//                 Praveer Balaka
//               </p>
//             </div>
//             <div className="text-center ">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/ayan.jpg"
//               />
//               <p className="text-center text-gray-400 ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Ayan Bhatia
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/ansh.jpg"
//               />
//               <p className="text-gray-400text-center ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Ansh Gandhi
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/auron.jpg"
//               />
//               <p className="text-center text-gray-400 ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Auron Bhattacharya
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-5">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Theory Events Committee</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent className="flex justify-between">
//             <div className="">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/akshay.jpg"
//               />
//               <p className="text-center text-gray-400">Theory Events Head</p>
//               <p className="font-medium text-center text-gray-300">
//                 Akshay Khannan
//               </p>
//             </div>
//             <div className="text-center ">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/megha.jpeg"
//               />
//               <p className="text-center text-gray-400 ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Megha Guntuku
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/arush.jpg"
//               />
//               <p className="text-gray-400text-center ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Arush Jain
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/ali.jpg"
//               />
//               <p className="text-center text-gray-400 ">Event Officer</p>
//               <p className="font-medium text-center text-gray-300">
//                 Ali Siddiqui
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-6">
//           <AccordionHeader>
//             <AccordionTrigger>
//               <span>Instant Challenge Committee</span>
//               <FiChevronDown />
//             </AccordionTrigger>
//           </AccordionHeader>
//           <AccordionContent className="flex justify-between">
//             <div className="pl-20">
//               <img
//                 className="m-auto"
//                 style={{ width: 100, height: 100 }}
//                 src="/images/officers/adviti.jpg"
//               />
//               <p className="text-gray-400">Event Head</p>
//               <p className="font-medium text-center text-gray-300">
//                 Adviti Aleti
//               </p>
//             </div>
//             <div className="pr-20 text-center">
//               <img
//                 className="m-auto"
//                 style={{ width: 120, height: 100 }}
//                 src="/images/officers/nikitha.jpg"
//               />
//               <p className="text-center text-gray-400 ">Event Head</p>
//               <p className="font-medium text-center text-gray-300">
//                 Nikitha Bangalore
//               </p>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion> */}
