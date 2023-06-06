
import React from 'react';
import './Home.css';
import a from './d.jpg';

const Home = () => (
  <div style={styles.container} className="landing-page">
    <header style={styles.header} className="header">
      <div style={styles.logoContainer} className="logo-container">
        <h1 style={styles.logo} className="logo">
          {/* <span style={styles.logoText}>MEDUIM</span>  */}
          {<img style={styles.logoImage} src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="Medium Logo" />}
        </h1>
        <hr style={styles.line} />
      </div>
      <nav style={styles.navigation} className="navigation">
        {/* Add navigation links here */}
      </nav>
      <div style={styles.ctaButtons} className="cta-buttons">
        <a href="/login" style={styles.ctaButton} className="cta-button">Log In</a>
        <a href="/register" style={styles.ctaButton} className="cta-button">Sign Up</a>
      </div>
    </header>

<section style={styles.banner} className="banner">
  <div style={styles.bannerContent} className="banner-content">
    <div style={styles.bannerTextContainer}>
      <h2 style={styles.bannerText}>
        Stay Curious.
        <br />
        <span style={styles.subText}>
          Discover stories, thinking, and expertise from writers on any topic
        </span>
        <div style={styles.gettingStartedButtonContainer}>
    <button style={styles.gettingStartedButton} className="getting-started-button">Start Reading</button>
  </div>
      </h2>
    
    </div>
    <div style={styles.bannerImageContainer}>
      <img style={styles.bannerImage} src={a} alt="Banner Image" />
    </div>
  </div>
</section>

    <main style={styles.mainContent} className="main-content">
      <section style={styles.trendingSection} className="trending-section">
        {/* <h2 style={styles.sectionTitle} className="section-title">Trending on Medium</h2>
        {/* Add trending content here */}
      </section>
      <section style={styles.discoverSection} className="discover-section">
      </section>
    </main>
    <div className='trending'>
          <div className='trend1'>
            {/* <img src={stat} className='trend'></img>&nbsp;&nbsp;&nbsp;&nbsp; */}
            <p>Trending on Medium</p>
          </div>
          <div className='trend2main'>
          <div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>01</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Linda Caroll in Middle-Pause</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>No One Really Tells You The Hardest Part Of Getting Older</p>
            <br/>
            <p style={{color:'#808c97'}}>May 29  &nbsp;&nbsp;&nbsp; 7 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>02</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Markham Heid in THE NUANCE</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>Why Midlife Is Going to Be Especially Hard On Millennials</p>
            <br/>
            <p style={{color:'#808c97'}}>May 30  &nbsp;&nbsp;&nbsp; 5 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>03</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Netflix Technology Blog in Netflix TechBlog</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>Ensuring the Successful Launch of Ads on Netflix</p>
            <br/>
            <p style={{color:'#808c97'}}>Jun 2  &nbsp;&nbsp;&nbsp; 5 min read</p>
          </div><br/>
          <div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>04</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Steve Yegge</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>A good day with Jeff</p>
            <br/>
            <p style={{color:'#808c97'}}>May 28  &nbsp;&nbsp;&nbsp; 6 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>05</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Nick Wignall</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>4 Secrets of Emotionally Stable People</p>
            <br/>
            <p style={{color:'#808c97'}}>May 27  &nbsp;&nbsp;&nbsp; 8 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>06</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Allen Helton in Better Programming</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>ChatGPT Changed How I Write Software</p>
            <br/>
            <p style={{color:'#808c97'}}>Jun 1  &nbsp;&nbsp;&nbsp; 8 min read</p>
          </div>
          </div>
        </div>

    <footer style={styles.footer} className="footer">
      <p style={styles.footerText} className="footer-text">&copy; 2023 Medium. All rights reserved.</p>
    </footer>
  </div>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    color: '#333',
  },
  header: {
    backgroundColor: '#ffc017',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.04)',
    borderBottom: '2px solid black',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '50px',
    width: '180px',
  },
  line: {
    height: '1px',
    width: '100%',
    background: '#ffc017',
    border: 'none',
    margin: '0',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
  },
  ctaButtons: {
    display: 'flex',
    alignItems: 'center',
    
  },
  ctaButton: {
    marginLeft: '10px',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
   
  },
  banner: {
    backgroundColor: '#ffc017',
    height: '500px',
    textAlign: 'left',
    padding: '40px',
    marginBottom: '20px',
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align image to the right side
    flexDirection: 'row',
    height: '100%',
  },
  bannerTextContainer: {
    flex: '1',
  },
  
  bannerText: {
    fontSize: '100px',
    fontWeight: '600',
    color: 'black',
    lineHeight: '1.2',
    fontFamily: 'Medium',
    marginBottom: '300px',
  },
  // -------------------------------
  subText: {
    fontSize: '40px',
    fontWeight: 'normal',
    color: 'black',
    marginTop: '10px',
    display: 'block',
  },
  gettingStartedButtonContainer: {
    display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
  borderRadius:'3'
  },
  gettingStartedButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
  bannerImageContainer: {
    marginLeft: '20px', // Add some spacing to the left
    height: '100%',
    flex: '0 0 auto',
  },
  bannerImage: {
    height: '100%',
    width: 'auto',
    objectFit: 'cover',
  },
  mainContent: {
    padding: '20px',
  },
  trendingSection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  discoverSection: {
    marginBottom: '40px',
  },
  discoverContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  footer: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  },
  footerText: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Home;
