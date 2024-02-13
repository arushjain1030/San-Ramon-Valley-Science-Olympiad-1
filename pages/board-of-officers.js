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
            <b>Sundar Subramanian</b>
          </h3>
          <p>Executive Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/sundar.png" />
          <p className="p-5">
            {' '}
            Sundar is a junior at Dougherty Valley High School. He is interested
            in the Artificial Intelligence field with a passion for giving back
            to the community, and providing the same opportunities he was given
            as a child to today's youth. Sundar has been with the SRVSO for 6
            years and currently serves as the Executive Director.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Arush Jain</b>
          </h3>
          <p>Associate Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/arush.jpg" />
          <p className="p-5">
            {' '}
            Arush is a junior at Dougherty Valley High School. He is an aspiring
            software engineer with a passion for innovative technology. Arush
            has been with SRVSO for 3 years and currently serves as an Associate
            Director.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Nikitha Bangalore</b>
          </h3>
          <p>Associate Director</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/nikitha.png" />
          <p className="p-5">
            {' '}
            Nikitha is a senior at Dougherty Valley High School. She is
            currently exploring her options for possible careers, but is
            passionate about giving younger students exposure to STEM related
            activities. Nikitha has been with SRVSO for 2 years and currently
            serves as the Associate Director.{' '}
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Ansh Gandhi</b>
          </h3>
          <p>Logistics Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/ansh.png" />
          <p className="p-5">
            {' '}
            Ansh is a senior at Dougherty Valley High School. An aspiring
            entrepreneur, he is interested in helping show students the beauty
            of science. Ansh has been with SRVSO for 2 years and currently
            serves as the Logistics Head{' '}
          </p>
        </div>

        <h2 className="pt-10"> Build Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Auron Bhattacharya</b>
          </h3>
          <p>Build Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/auron.png" />
          <p className="p-5">
            Auron is a freshman at Dougherty Valley High School. He is excited
            for his second year as a member of the SRVSO and he joined it to
            provide his love of science to the kids of the community. He is
            currently the Build Events Head.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Vedanth Dala</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/vedanth.png" />
          <p className="p-5">
            Vedanth is a sophomore at Dougherty Valley High School. He aspires
            to be a physicist, and he loves spreading his passion for science to
            younger students. This is Vedanth's first year at SRVSO, where he is
            currently a member of the Build Event Board.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Neha Subramani</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/neha.png" />
          <p className="p-5">
            Neha is a sophomore at Dougherty Valley High School. She plans to
            work as a software engineer in the future and is excited to help
            SRVSO provide enriching STEM opportunities to kids. Neha is
            currently a Build Event Officer, and this is her first year with
            SRVSO.
          </p>
        </div>

        <h2 className="pt-10"> Theory Events Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Megha Guntuku</b>
          </h3>
          <p>Theory Events Head</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/megha.png" />
          <p className="p-5">
            Megha is a senior at Dougherty Valley High School and hopes to work
            in the dental field in the future. She is passionate about preparing
            young students for higher level STEM classes. This is her second
            year with SRVSO, and she currently serves as the Theory Head.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Supreetha Jammalamadaka</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/supreetha.png" />
          <p className="p-5">
            Supreetha is a Junior at Dougherty Valley High School who is working
            towards going into the Computer Science field. She is excited to
            help young kids discover their passion, and hopes to inspire their
            future works. This is her first year at SRVSO, and her current
            position is Theory Officer.
          </p>
        </div>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Sanjana Rao</b>
          </h3>
          <p>Event Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/sanjana.png" />
          <p className="p-5">
            Sanjana is a senior at Dougherty Valley High School. She is
            passionate about Math and Biology and hopes to pursue a career in
            research. This is her first year with SRVSO and she currently serves
            as a Theory Event Officer.
          </p>
        </div>

        <h2 className="pt-10"> Instant Challenge Committee </h2>

        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Chhavi Bidhuri</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/chhavi.png" />
          <p className="p-5">
            Chhavi is a sophomore at Dougherty Valley High School. An aspiring
            marine biologist, her goal is to help support the spread of careers
            in STEM for young, aspiring students. This is Chhavi's first year
            with SRVSO and she currently is an Instant Challenge officer.
          </p>
        </div>
        <div className="p-2 text-white rounded bg-lime-800">
          <h3>
            {' '}
            <b>Caden Chang</b>
          </h3>
          <p>Instant Challenge Officer</p>
        </div>

        <div className="flex items-center text-white">
          <img className="h-40 mt-4" src="/images/officers/caden.png" />
          <p className="p-5">
            Caden Chang is a senior at Dougherty Valley High School. He is an
            aspiring aerospace engineer with an interest in helping the
            community develop an interest in STEM subjects. This is Caden's
            first year as an officer for the Science Olympiad.
          </p>
        </div>
      </div>
    </>
  );
}
