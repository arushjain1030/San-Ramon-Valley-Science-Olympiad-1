import Head from 'next/head';
import { ImBook } from 'react-icons/im';

export default function TheoryEventResources() {
  return (
    <>
      <Head>
        <title>Theory Event Resources — SRVSO</title>
        <meta
          name="description"
          content="More details for each SRVSO 2022 theory event."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Theory Event Resources</h2>
        <p className="text-lg">
          More details for each SRVSO 2022 theory event.
        </p>
      </div>

      <div className="px-8 my-8 border border-gray-800 py-9">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="pb-0.5 text-lg font-medium text-gray-100">
              &#10031;
            </span>
          </div>
          <p className="text-gray-400">Theory Event Descriptions</p>
        </div>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Theory Event Descriptions"
            src="https://docs.google.com/document/d/1SVebmbxd1mizp9V3uD_UkIp2XkbWgKBeoFKZjjEIWNk"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1SVebmbxd1mizp9V3uD_UkIp2XkbWgKBeoFKZjjEIWNk"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>

      <div
        className="px-8 my-8 border border-gray-800 py-9"
        id="word-problem-wizardry"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">1</span>
          </div>
          <p className="text-gray-400">Word Problem Wizardry</p>
        </div>
        <p className="px-12">
          * Here is a practice test specifically created for the event.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Word Problem Wizardry"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdkGN7YknkOjwx7xlwHQEtqMkUUuqqFlzaLsSLjyRnohRSyKg/viewform"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkGN7YknkOjwx7xlwHQEtqMkUUuqqFlzaLsSLjyRnohRSyKg/viewform"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        <div className="flex items-center px-4 py-2 mt-12 text-blue-300 bg-blue-800 rounded-md gap-x-2">
          <ImBook className="w-6 h-6" />
          <p className="text-sm">
            Here are some other preparation resources:{' '}
            <a
              href="https://artofproblemsolving.com/wiki/index.php/2020_AMC_8_Problems"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 1,{' '}
            </a>
            <a
              href="https://artofproblemsolving.com/wiki/index.php/2018_AMC_8_Problems"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 2
            </a>
          </p>
        </div>
      </div>

      <div
        className="px-8 my-8 border border-gray-800 py-9"
        id="a-broader-world"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">2</span>
          </div>
          <p className="text-gray-400">A Broader World</p>
        </div>
        <p className="px-12">
          * Here is a practice test specifically created for the event.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="A Broader World"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeSNnlIJl9mpF5MVhoFUy0w7McVJHAalblN97rjNi0xKQy3Ew/viewform?usp=sf_link"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSNnlIJl9mpF5MVhoFUy0w7McVJHAalblN97rjNi0xKQy3Ew/viewform?usp=sf_link"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        <div className="flex items-center px-4 py-2 mt-12 text-blue-300 bg-blue-800 rounded-md gap-x-2">
          <ImBook className="w-6 h-6" />
          <p className="text-sm">
            Here are some other preparation resources:{' '}
            <a
              href="https://www.khanacademy.org/science/ap-college-environmental-science"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 1,{' '}
            </a>
            <a
              href="https://apcentral.collegeboard.org/courses/ap-environmental-science/exam/past-exam-questions"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 2
            </a>
          </p>
        </div>
      </div>

      <div className="px-8 my-8 border border-gray-800 py-9" id="dont-bug-me">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">3</span>
          </div>
          <p className="text-gray-400">Don't Bug Me</p>
        </div>
        <p className="px-12">
          * Here is a practice test specifically created for the event.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Don't Bug Me"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdydL90iGyjk5AmXKTAlodVfWb82R6n5t8Ms8nNu3TT9xAMqA/viewform"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdydL90iGyjk5AmXKTAlodVfWb82R6n5t8Ms8nNu3TT9xAMqA/viewform"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        <div className="flex items-center px-4 py-2 mt-12 text-blue-300 bg-blue-800 rounded-md gap-x-2">
          <ImBook className="w-6 h-6" />
          <p className="text-sm">
            Here are some other preparation resources:{' '}
            <a
              href="https://quizizz.com/admin/quiz/5d520869ce9737001dd73c69/insect-external-anatomy"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 1,{' '}
            </a>
            <a
              href="http://www.cotwcourses.net/manchester_gate/resources/dontbugme.htm"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 2,{' '}
            </a>
            <a
              href="http://fsc.fernbank.edu/PDF/ScienceOlympiad/dontbug-2020-tipsheet.pdf"
              target="_blank"
              className="font-medium text-blue-300 transition-colors hover:text-blue-200"
              rel="noopener noreferrer"
            >
              Resource 3
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
