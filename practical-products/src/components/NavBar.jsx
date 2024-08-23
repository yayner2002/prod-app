import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  // use the authcontext and destructure the user, logout from it here
  const { user, logout } = useContext(AuthContext);
  const styles = {
    header: {
      backgroundColor: "#3B82F6", // Tailwind's blue-500
      padding: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
    },
    nav: {
      display: "flex",
      gap: "16px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
      cursor: "pointer",
    },
  };
  return (
    <>
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          {" "}
          Practical Products
        </Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/add-products" style={styles.link}>
            Add Products
          </Link>
          {user ? (
            <button onClick={logout} style={styles.link}>
              Logout
            </button>
          ) : (
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          )}

          {/* // instead of always showing the login link, show the logout button if there is  a logged in user  */}
        </nav>
      </header>
    </>
  );
}

export default NavBar;
