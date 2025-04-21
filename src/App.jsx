import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import JobListings from "./components/JobListings";
import ViewAll from "./components/ViewAll";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Become a React Developer"
        subtitle="Whether you're breaking in or trading up: your skills deserve the right stage."
        caption="React to that."
      />
      <Cards />
      <JobListings />
      <ViewAll />

      <script src="js/main.js"></script>
    </>
  );
};
export default App;
