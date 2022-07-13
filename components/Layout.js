import * as Dialog from '@radix-ui/react-dialog';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="px-6 py-1 text-sm text-center text-gray-200 transition-colors bg-green-900 cursor-pointer hover:text-gray-100 sm:text-xs">
            Important information about 2022 Olympiad &rarr;
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <Dialog.Content className="bg-gray-900 px-8 py-7 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full sm:scale-75 sm:w-[134%]">
            <Dialog.Title className="mb-4 text-2xl">
              Dear SRVSO Coaches
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-400">
              <p className="mb-4">
                Thank you for your continued involvement with the competition.
                Here is some important information about our 2022 Science
                Olympiad.
              </p>
              <ul className="mb-4 font-medium">
                <li>Date — 4/16/22</li>
                <li>Time — 6:45am to 6:00pm</li>
                <li>Location — Windemere Ranch Middle School</li>
              </ul>
              <p className="mb-4">
                A more detailed schedule has been released through email along
                with other important information.
              </p>
              <p className="mb-8">
                If you haven't completed the competition confirmation{' '}
                <a
                  href="https://forms.gle/QVvVtESzJC22R2YA8"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                  rel="noreferrer"
                >
                  Google Form
                </a>{' '}
                yet, please do so as soon as possible. The form will ask for
                secondary team contact information, in case we cannot contact
                the team coach.
              </p>

              <h4 className="mb-2">Frequently Asked Questions</h4>
              <p className="mb-4">
                The theory event will be a paper based exam. Teams will have to
                transport their build event submissions to the competition on
                the day of the competition. There is no build binder submission
                this year for the build event. Have more questions? Please visit
                the{' '}
                <a
                  href="/resources/faq"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  updated FAQ document
                </a>
                .
              </p>
              <p className="mb-8">
                New resource documents have been uploaded to this website
                including{' '}
                <a
                  href="/resources/build-event-resources"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  build event information
                </a>
                ,{' '}
                <a
                  href="/resources/theory-event-resources"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  theory event information
                </a>
                , and an{' '}
                <a
                  href="/resources/faq"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  updated FAQ document
                </a>
                .
              </p>
              <h4 className="mb-2">Contact</h4>
              <ul>
                <li>
                  Theory Events —{' '}
                  <a
                    href="mailto:siddhanthdala@gmail.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    siddhanthdala@gmail.com
                  </a>
                </li>
                <li>
                  Build Events —{' '}
                  <a
                    href="mailto:hsingh0531@gmail.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    hsingh0531@gmail.com
                  </a>
                </li>
                <li>
                  Instant Challenge —{' '}
                  <a
                    href="mailto:219295@students.srvusd.net"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    219295@students.srvusd.net
                  </a>
                </li>
                <li>
                  Payment —{' '}
                  <a
                    href="mailto:sundarthegreatest@gmail.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    sundarthegreatest@gmail.com
                  </a>
                </li>
                <li>
                  Pressing concerns —{' '}
                  <a
                    href="tel:+9253892675"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    925-389-2675
                  </a>
                </li>
              </ul>
            </Dialog.Description>
            <Dialog.Close className="mt-10 text-red-500 transition-colors hover:text-red-400">
              Close this message
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}
      <Header />
      <div className="container flex-1">{children}</div>
      <Footer />
    </main>
  );
}
