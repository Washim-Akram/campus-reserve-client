import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Colleges = () => {
  const colleges = useLoaderData();

  return (
    <div className="container mx-auto my-20 md:my-40 p-5 md:p-10">
      <Helmet>
        <title>Campus Reserve | Colleges</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {colleges.map((college) => (
          <div
            key={college?._id}
            className="card card-compact w-full md:w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-60"
                src={college?.college_image}
                alt={college?.college_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-center">
                {college?.college_name}
              </h2>
              <h3 className="font-medium text-sm text-center border-b-2 border-indigo-600">
                Admission Dates
              </h3>
              <p className="text-center flex items-center justify-between mb-2">
                {college?.admission_dates.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </p>
              <h3 className="font-medium text-sm text-center border-b-2 border-indigo-600">
                Events
              </h3>
              <p className="text-center flex items-center justify-between  mb-2">
                {college?.events.map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </p>
              <h3 className="font-medium text-sm text-center border-b-2 border-indigo-600">
                Sports
              </h3>
              <p className="text-center flex items-center justify-between mb-2">
                {college?.sports.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </p>
              <p className="font-medium text-sm">
                Ratings: {college?.college_rating}
              </p>

              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
