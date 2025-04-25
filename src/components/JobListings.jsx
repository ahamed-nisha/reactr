import { useState, useEffect } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default JobListings;
