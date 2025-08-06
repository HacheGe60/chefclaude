/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./Header.jsx";
import Main from "./Main.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}