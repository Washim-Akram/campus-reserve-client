import { Helmet } from "react-helmet-async";
import College from "../College/College";
import SearchField from "../SearchField/SearchField";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Campus Reserve | Home</title>
      </Helmet>
      <SearchField></SearchField>
      <College></College>
    </div>
  );
};

export default Home;
