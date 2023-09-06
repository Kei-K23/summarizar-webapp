import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full bg-gradient-to-br from-sky-200 via-blue-300 to-blue-500  text-transparent  min-h-screen py-4 px-8">
      <Navbar />
      <main>
        <Hero />
        <Form />
      </main>
    </div>
  );
};

export default App;
