import './header.css';
import ParticlesBackground from '../Particles/ParticlesBackground';


import WhatsAppIcon from '../../assets/whatsapp.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import GmailIcon from '../../assets/gmail.svg';
import profileImage from '../../assets/profile-5.png';

const Header = () => {
    const wrapLetters = (word) => word.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
    ));
    return (
        <div className="header-section">
                  <ParticlesBackground />

            <div className="header-content">
                <p className="open-to-work">
                    {`#openToWork`.split('').map((char, index) => (
                        <span key={index} className="bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                            {char}
                        </span>
                    ))}
                </p>

                <h1 data-text='Jonatha Fabricio' className='name'>Jonatha Fabricio</h1>

                <h2 className="dev">{wrapLetters('Front-End Developer')}</h2>

                <div className="social-links">
                    <a href="https://wa.me/5581997164192" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsAppIcon} alt="WhatsApp" className="social-icon whatsapp" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonatha-fabricio" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="social-icon linkedin" />
                    </a>
                    <a href="mailto:contato.jonathafabricio@gmail.com">
                        <img src={GmailIcon} alt="Gmail" className="social-icon gmail" />
                    </a>
                </div>

            </div>
            <div className="profile-image">
                <img src={profileImage} alt="Jonatha Fabricio" />
            </div>
        </div>
    );
}

export default Header;