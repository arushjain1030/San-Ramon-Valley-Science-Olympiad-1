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
            Alagu is an MPhil Candidate and Churchill Scholar at the University
            of Cambridge, an incoming MD Candidate at Duke University School of
            Medicine, and an alumni of Baylor University. He is a medical
            researcher and aspiring physician with a passion for increasing the
            accessibility to hands-on education in K-12 instruction. Alagu has
            been with the SRVSO since its beginning as our founder and currently
            serves as the Chairman of our Board of Directors.{' '}
          </p>
        </div>

        <h2 className="pt-10"> Executive Sector </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Sundar Subramanian</b>
          </h3>
          <p>Co-Executive Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/sundar.png" />
          <p className="p-5">
            {' '}
            Sundar is a senior at Dougherty Valley High School. He is interested
            in the field of Electrical Engineering with a passion for giving
            back to the community, and providing the same opportunities he was
            given as a child to today's youth. Sundar has been with the SRVSO
            for 7 years and currently serves as a Co-Executive Director. In the
            past, he has served as Director of Finance, Associate Director, and
            Executive Director.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Arush Jain</b>
          </h3>
          <p>Co-Executive Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/arush.jpg" />
          <p className="p-5">
            {' '}
            Arush is a senior at Dougherty Valley High School and an aspiring
            software engineer. He is passionate about spreading STEM education
            to future generations. Arush has been involved with SRVSO for four
            years and currently serves as the Co-Executive Director. In the
            past, he has served as an Associate Director and a Theory Event
            Officer.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Vedanth Dala</b>
          </h3>
          <p>Associate Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/vedanth.jpg" />
          <p className="p-5">
            {' '}
            Vedanth is a junior at Dougherty Valley High School. He aspires to
            be a physicist, and he loves spreading his passion for science to
            younger students. This is Vedanth's second year at SRVSO, where he
            is currently an Associate Director. In the past, he has served as a
            Build Event Officer.{' '}
          </p>
        </div>

        <h2 className="pt-10"> Build Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Neha Subramani</b>
          </h3>
          <p>Build Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/neha.jpg" />
          <p className="p-5">
            Neha is a junior at Dougherty Valley High School. She plans to work
            as a software engineer in the future and is excited to help SRVSO
            provide enriching STEM opportunities to kids. Neha is currently the
            Build Event Head Officer, and this is her second year with SRVSO. In
            the past, she has served as a Build Event Officer and an Intern.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Harshidh Ramkumar</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/harshidh.jpg" />
          <p className="p-5">
            Harshidh is a Junior at Dougherty Valley High School. He has an
            interest in Business and is specifically trying to go into Finance.
            Harshidh has been a part of the SRVSO for 2 years and is currently
            an Officer for the Build Department. In the past, he has served as
            an intern.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Srivatsa Yanamandra</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/srivatsa.jpg" />
          <p className="p-5">
            Srivatsa is a sophomore at Dougherty Valley High School. He is an
            aspiring computer scientist with a passion for bettering the
            community through science. This is Srivatsa’s first year with SRVSO
            and is currently an officer for the Build Events Committee. In the
            past, he has served as an intern.
          </p>
        </div>

        <h2 className="pt-10"> Theory Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Supreetha Jammalamadaka</b>
          </h3>
          <p>Theory Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/supreetha.png" />
          <p className="p-5">
            Supreetha is a Senior at Dougherty Valley High School who is working
            towards going into the Computer Science field. She is excited to
            help young kids discover their passion, and hopes to inspire their
            future works. This is her second year at SRVSO, and her current
            position is Theory Officer. In the past, she has served as a Theory
            Event Officer and a Intern.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Aashi Mehta</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/aashi.png" />
          <p className="p-5">
            Aashi is a senior at Dougherty Valley High School. She wants to work
            in the biomedical engineering field, stemming from her passion for
            biology. This is Aashi’s second year being a part of SRVSO. She
            currently serves as a Theory Officer, and she enjoys helping younger
            minds establish their interest in science at an early age. In the
            past, she has served as an Intern.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Sophia Jacob</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/sophia.png" />
          <p className="p-5">
            Sophia is a sophomore at Dougherty Valley High School. She is
            looking to go into the STEM field and hopes to introduce others to
            the field as well. This is her first year at SRVSO, and she
            currently serves as a Theory Officer. In the past, she has served as
            an Intern.
          </p>
        </div>

        <h2 className="pt-10"> Instant Challenge Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Chhavi Bidhuri</b>
          </h3>
          <p>Instant Challenge Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/chhavi.png" />
          <p className="p-5">
            Chhavi is a junior at Dougherty Valley High School. She plans to
            pursue molecular and cellular biology in the future and her goal is
            to help support the spread of careers in STEM for young, aspiring
            students. This is Chhavi’s second year with SRVSO and she currently
            serves as the Instant Challenge Head. In the past, she has served as
            an Instant Challenge Officer and an Intern.
          </p>
        </div>
        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Rishab Guntuku</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/rishab.jpeg" />
          <p className="p-5">
            Rishab is a sophomore at Dougherty Valley High School. He is an
            aspiring mechanical engineer passionate about giving younger STEM
            students more learning opportunities. Rishab has been with the SRVSO
            for a year and is currently an IC Officer. In the past, he has
            served as an Intern.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Jaden Wu</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/jaden.jpg" />
          <p className="p-5">
            Jaden is a senior at Dougherty Valley High School who is inspiring
            in the field of data science. His goal is to help guide kids to find
            their passion within STEM. He is currently a instant challenge
            officer and is in his first year at SRVSO. In the past, he has
            served as an Intern.
          </p>
        </div>
      </div>
    </>
  );
}
