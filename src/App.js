import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import PageContent from "./personality_quiz/ContentContainer.js";
import questions from "./questions.json";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <Header />
        </header>
        <section>
          <article>
            <PageContent questions={questions} />
          </article>
          <article>

          </article>
        </section>
        <footer>
          <Footer publishDate={new Date("2021-06-29")} />
        </footer>
      </main>
    </div>
  );
}

export default App;
