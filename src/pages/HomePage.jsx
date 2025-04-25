import Hero from "../components/Hero";
import Cards from "../components/Cards";
import JobListings from "../components/JobListings";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Developer"
        subtitle="Whether you're breaking in or trading up: your skills deserve the right stage."
        caption="React to that."
      />
      <Cards />
      <JobListings isHome={true} />
      <ViewAll />
    </>
  );
};
export default HomePage;
