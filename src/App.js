import React from 'react';
import { ReactComponent as IconLinkedin } from './assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import { ReactComponent as IconHashnode } from './assets/icons/hashnode.svg';
import { ReactComponent as IconYoutube } from './assets/icons/youtube.svg';
import { ReactComponent as IconTelegram } from './assets/icons/telegram.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Lokesh Kumar</a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon</h1>
            <p>Website coming soon. Please check back to know more. Shoot me an email if you're curious.</p>
          </div>
          <a href="mailto:lokeshkumar636@yahoo.com">
            <div className="cta">Send me an email</div>
          </a>
          <hr />
          <div className="social">
            <a href="https://github.com/codeTIT4N" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-kumar-nalot-0baa691b9" title="Linkedin" target="_blank" rel="noopener noreferrer">
              <IconLinkedin className="icon" />
            </a>
            <a href="https://blog.lokeshkr.com" title="Hashnode" target="_blank" rel="noopener noreferrer">
              <IconHashnode className="icon" />
            </a>
            <a href="https://t.me/lokesshk" title="Telegram" target="_blank" rel="noopener noreferrer">
              <IconTelegram className="icon" />
            </a>
            <a href="https://twitter.com/lokeshtweets_" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCVWq-83WQElIoIN6NGdCXLw" title="Youtube" target="_blank" rel="noopener noreferrer">
              <IconYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;