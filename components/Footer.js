import GradientCanvas from '@components/GradientCanvas';

export default function Footer() {
  return (
    <footer className="mt-32">
      <GradientCanvas />
      <div className="flex items-center justify-between max-w-5xl px-6 mx-auto my-8 text-xs sm:flex-col sm:gap-y-3 sm:mt-12">
        <p>&copy; 2022 San Ramon Valley Science Olympiad</p>
        <p>
          Open source on{' '}
          <a
            href="https://github.com/KuangAnthony/srvso"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 transition-colors hover:text-gray-300"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
