import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
const About = () => {
  const { user } = useContext(AuthContext)
  return (
    <section>
      <h1>About Practical Products.</h1>
      <p>
       you are logged in as { user?.email}
      </p>
    </section>
  );
};

export default About;
