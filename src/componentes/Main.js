import React, { Component } from 'react';
// importando css del componenete
import '../App.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Main extends Component {
  render() {
    return (
      <main className="biography">
        <p>
          <strong>Grace Brewster Murray Hopper</strong> (
        <a href="https://en.wikipedia.org/wiki/Given_name#Name_at_birth" target="blank">née</a>
          <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American
        <a href="https://en.wikipedia.org/wiki/Computer_scientist"
            target="blank">computer scientist</a> and
        <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="blank">United States Navy </a>
          <a href="https://en.wikipedia.org/wiki/Rear_admiral_(United_States)" target="blank">rear admiral</a>.[1]
        <mark>One of the first programmers of the
        <a href="https://en.wikipedia.org/wiki/Harvard_Mark_I" target="blank">Harvard Mark I</a> computer</mark>, she was a pioneer of computer programming who invented one of the first
         <a href="https://en.wikipedia.org/wiki/Compiler">compiler</a> related tools. She popularized the idea of machine-independent programming languages, which led to the
        development of
        <a href="https://en.wikipedia.org/wiki/COBOL" target="blank">COBOL</a>, an early
        <a href="https://en.wikipedia.org/wiki/High-level_programming_language" target="blank">high-level programming language</a> still in use today.
      </p>
        <p>
          Hopper had attempted to enlist in the Navy during
        <a href="https://en.wikipedia.org/wiki/World_War_II" target="blank">A-0 System</a> programming language.[2][3][4][5]
      </p>
        <p>
          In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some
          of the first compiled languages like
        <a href="https://en.wikipedia.org/wiki/FLOW-MATIC" target="blank">FLOW-MATIC</a>. In 1959, she participated in the
        <a href="https://en.wikipedia.org/wiki/CODASYL">CODASYL</a> consortium, which consulted Hopper to guide them in creating a machine-independent programming language.
          This led to the
        <a href="https://en.wikipedia.org/wiki/COBOL" target="blank">COBOL</a> language, which was inspired by her idea of a language being based on English words. In 1966, she retired
          from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found
          work as a consultant for the
        <a href="https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" target="blank">Digital Equipment Corporation</a>, sharing her computing experiences.
      </p>
        <p>
          Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy
        <a href="https://en.wikipedia.org/wiki/Arleigh_Burke-class_destroyer" target="blank">
            <em>Arleigh Burke</em>-class</a> guided-issile destroyer
        <a href="https://en.wikipedia.org/wiki/USS_Hopper" target="blank">USS
          <em>Hopper</em>
          </a> was named for her, as was the
        <a href="https://en.wikipedia.org/wiki/Cray_XE6" target="blank">Cray XE6</a> "Hopper" supercomputer at
        <a href="https://en.wikipedia.org/wiki/NERSC" target="blank">NERSC</a>.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In
          1991, she received the
        <a href="https://en.wikipedia.org/wiki/National_Medal_of_Technology_and_Innovation" target="blank">National Medal of Technology</a>. On November 22, 2016, she was posthumously awarded the
        <a href="https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom"
            target="blank">Presidential Medal of Freedom</a> by President
        <a href="https://en.wikipedia.org/wiki/Barack_Obama" target="blank">Barack Obama</a>.[9]
      </p>
        <h3>Career</h3>
        <ol>
          <li>World War II</li>
          <li>UNIVAC</li>
          <li>COBOL</li>
          <li>Standars</li>
        </ol>
        <h2>Phrases</h2>
        <blockquote cite="http://www.azquotes.com/author/6894-Grace_Hopper">
          Humans are allergic to change. They love to say, "We've always done it this way." I try to fight that. That's why I have
          a clock on my wall that runs counter-clockwise
      </blockquote>
        <a href="html/information.html" target="blank">See More</a>
      </main>
    );
  }
}
export default Main;
