export default function Home() {
  return (
    <>
      <h1>San Ramon Valley Science Olympiad</h1>
      <div className="flex">
        <div className="bg-yellow-500">
          <h2>Welcome to SRVSO!</h2>
          <div>Socials</div>
        </div>
        <div className="">
          <h2 className="">Science Olympiad</h2>
          <p>
            Science Olympiad provides students with the chance to explore the
            world of STEM in a competitive setting.The Olympiad’s curriculum is
            aligned with Common Core and Next generation science standards. It
            rewards students with vital life skills like organization,
            leadership, confidence, team work and much more. Science Olympiad
            prepares the young generation for success in future years of middle
            school, high school, and beyond. Work as a team to be rewarded for
            the pursuit in scientific achievement
          </p>
        </div>
      </div>
      <button type="button">Register</button>
    </>
  );
}
