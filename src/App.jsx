import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import JobListings from "./components/JobListings";

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

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>

      <script src="js/main.js"></script>
    </>
  );
};
export default App;
