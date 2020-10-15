import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-2xl font-bold mt-8 mb-5">
        Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done
        anything at all.
      </h1>

      <p className="my-5">
        Bender, quit destroying the universe! Yeah, I do that with my stupidness. I never loved you. Moving along…
        Belligerent and numerous.
      </p>

      <button className="text-white font-bold bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded">
        Party with Slurm!
      </button>

      <p className="my-5">
        And then the battle's not so bad? You've killed me! Oh, you've killed me! Five hours? Aw, man! <strong> Couldn't
        you just get me the death penalty?</strong> <em>Daylight and everything.</em> She also liked to shut up!
      </p>

      <h2 className="text-xl font-bold mt-8 mb-5">Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!</h2>
      <p className="my-5">
        Incidentally, you have a dime up your nose. Yeah, I do that with my stupidness. I suppose I could part with 'one'
        and still be feared… You know, I was God once. And yet you haven't said what I told you to say! How can any of us
        trust you?
      </p>

      <ol className="list-decimal list-inside my-5 pl-2">
        <li>With gusto.</li>
        <li>Soon enough.</li>
        <li>Hello Morbo, how's the family?</li>
      </ol>

      <h3 className="text-lg font-bold mt-8 mb-5">Oh God, what have I done?</h3>

      <p className="my-5">
        Yeah, lots of people did. Why would I want to know that? I suppose I could part with 'one' and still be feared…
        Hey! I'm a porno-dealing monster, what do I care what you think? Oh, how awful. Did he at least die painlessly? …To
        shreds, you say. Well, how is his wife holding up? …To shreds, you say.
      </p>

      <ul className="list-disc list-inside my-5 pl-2">
        <li>You lived before you met me?!</li>
        <li>Throw her in the brig.</li>
        <li>No! I want to live! There are still too many things I don't own!</li>
      </ul>
    </div>
  );
}

export default App;
