import { Helmet } from "react-helmet-async";
import SearchField from "../SearchField/SearchField";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Campus Reserve | Home</title>
      </Helmet>
      <SearchField></SearchField>
    </div>
  );
};

export default Home;
