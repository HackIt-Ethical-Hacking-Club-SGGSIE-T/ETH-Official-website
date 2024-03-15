'use client';
import { useEffect, useState } from 'react';

const ScanningComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [accessGranted, setAccessGranted] = useState(false);
//   const [text, setText] = useState([
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "BACKDOOR FOUND (23.45.23.12.00000000)",
//     "BACKDOOR FOUND (13.66.23.12.00110000)",
//     "BACKDOOR FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "SCAN: __ 0100.0000.0554.0080ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
//     "SCAN: __ 0020.0000.0553.0080",
//     "SCAN: __ 0001.0000.0554.0550",
//     "SCAN: __ 0012.0000.0553.0030",
//     "SCAN: __ 0100.0000.0554.0080",
//     "SCAN: __ 0020.0000.0553.0080"
//   ]);

const [text, setText] = useState(['456789ABCDEFGHIJKLMN456789ABCDEFGHIJKLMNOPQRSTUVWXOPQRSTUVWX','XYZabcdefghijklmnopqrstuvwxyz' ])

  useEffect(() => {
    const intervalId = setInterval(updateScreen, 200);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (accessGranted) {
      const timeoutId = setTimeout(() => {
        setTextIndex(0);
        setAccessGranted(false);
        setText([...text.slice(1), text[0]]);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [accessGranted, text]);

  const updateScreen = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
  };

  return (
    <>
      <div className="msg">{accessGranted ? 'ACCESS GRANTED' : 'Scanning'}</div>
      <div id="console">
        <p>{text[textIndex]}</p>
        <p>{text[textIndex]}</p>
        <p>{text[textIndex]}</p>
      </div>

      <style jsx>{`
        body {
          padding: 5vh 5vw;
          background: black !important;
          min-height: 450px;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }

        #console p {
          font-family: monospace;
          font-weight: bold;
          margin: 0;
          padding: 0;
          line-height: 1;
          color: limegreen;
          text-shadow: 0px 0px 10px limegreen;
        }

        .msg {
          font-family: monospace;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 5vh;
          padding-top: 5vh;
          background: red;
          box-shadow: 0 0 30px red;
          text-shadow: 0 0 20px white;
          color: white;
          padding: 20px;
          position: absolute;
          left: 50%;
          margin-left: -10vw;
          top: 50%;
          margin-top: -5vh;
          text-align: center;
          min-width: 200px;
          animation-name: blink;
          animation-duration: 0.6s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: linear;
        }

        @keyframes blink {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ScanningComponent;
