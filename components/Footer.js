import GradientCanvas from '@components/GradientCanvas';

export default function Footer() {
  return (
    <footer className="mt-32">
      <GradientCanvas />
      <div className="flex items-center justify-between max-w-5xl mx-auto my-8 text-xs">
        <p>&copy; 2022 San Ramon Valley Science Olympiad</p>
        <p>
          Developed by{' '}
          <a
            href="https://twitter.com/KuangAnthony"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 transition-colors hover:text-gray-300"
          >
            Anthony Kuang
          </a>
        </p>
      </div>
    </footer>
  );
}
