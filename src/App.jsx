import Header from "./Header.jsx";
import Feature from "./Feature.jsx";
import { data } from "./contentData.jsx";

function App() {
  return (
    <>
      <Header />
      <section>
        {data.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </section>
    </>
  );
}

export default App;
