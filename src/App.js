import React from 'react';
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import ContentContainer from "./personality_quiz/ContentContainer.js";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import test from "./questions.json";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <Header />
        </header>
        <section>
          <article>
            <ContentContainer test={test} />
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
