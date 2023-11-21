import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div id="main">
      <div id="navbar" className={styles.navbar}>
        <div style={{ position: "relative" }}>
          <img style={{ position: "absolute", top: 0, left: 10 }} id="pslogo" src="rygbdocs.svg" width="260" height="35" />
        </div>
      </div>
      <div style={{ width: "99%", display: "grid", gridTemplateColumns: "300px auto", margin: "auto", marginTop: "60px", marginBottom: "10px" }}>
        <div id="sidenavbar" className={styles.leftPanel}>
          <h3>DOCUMENTS</h3>
          <button className={styles.dsbutton} style={{marginTop: "5px"}}>RYGB Privacy Policy</button>
        </div>
        <div id="content" style={{ width: "60%", margin: "auto" }} className={styles.content}>
          <div id="pp">
            <h1 className={styles.header}>RYGB Privacy Policy</h1>
            <p className={styles.subheader}>Last Updated 11/21/2023</p>
            <p className={styles.subheader}>Applies to your RYGB Account, &quot;My RYGB Account&quot; Dashboard</p>
            <div className={styles.divider} style={{ marginBottom: "20px" }}></div>
            <div style={{ textAlign: "center" }}>
              <h1 className={styles.tapeHeader}>TLDR</h1>
              <h3 className={styles.pointHeader}>Info Collected:</h3>
              <p>We collect basic info for account creation and convienience, excluding sensitive data and payment details.</p>
              <h3>Collection Methods:</h3>
              <p>Your data is directly provided by you; no third-party services are involved.</p>
              <h3>Using your data:</h3>
              <p>We use the data to create and secure your RYGB Account, offering a faster and convienient experience.</p>
              <h3>Storage and Security:</h3>
              <p>Your data is stored on Mongo DB Atlas, secured with IP and CORS restrictions.</p>
              <h3>Data Sharing:</h3>
              <p>We never share your data with third parties.</p>
              <h3>Cookies:</h3>
              <p>Cookies are used to keep you signed in; opting out may affect account access.</p>
              <h3>User Rights:</h3>
              <p>Manage your personal information through the &quot;My RYGB Account&quot; dashboard.</p>
              <h3>Compliance:</h3>
              <p>GDPR and CCPA compliant; users can delete all data with one click.</p>
              <h3>Contact Us:</h3>
              <p>410-596-6619 or mmredblock6@gmail.com</p>
              <h3>We&apos;ll inform you of any changes to this policy when you access our services.</h3>
            </div>
            <div className={styles.divider}></div>
            <p className={styles.sectPara} style={{padding: "0px", marginTop: '20px'}}>This Privacy Policy explains how RYGB (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information. By using our services, you agree to the terms outlined in this policy. Don&apos;t worry, it won&apos;t be too long.</p>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>1</div>
              <h1 className={styles.sectHeader}>Info we collect</h1>
            </div>
            <div className={styles.sectPara}>We collect your <p style={{ fontWeight: "bold", display: "inline" }}>Name, Phone Number, Email Address, Hashed Password (for account security), Birthday (to verify age and send birthday wishes), Shipping Information (optional; if provided during signup or checkout)</p> to enhance your experience using RYGB services. We don&apos;t collect sensitive information, and we never collect or save payment details.</div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>2</div>
              <h1 className={styles.sectHeader}>How we collect your data</h1>
            </div>
            <div className={styles.sectPara}>We collect your information directly from you when you provide it to us. No third-party services collect data on our behalf.</div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>3</div>
              <h1 className={styles.sectHeader}>Using your data</h1>
            </div>
            <div className={styles.sectPara}>We use your data to:
              <ul style={{ fontWeight: 'bold' }}>
                <li>Create and secure your RYGB Account</li>
                <li>Provide a fast and convinient experience using our services</li>
                <li>Autofill shipping information at checkout</li>
              </ul>
            </div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>4</div>
              <h1 className={styles.sectHeader}>Data Storange and Security</h1>
            </div>
            <div className={styles.sectPara}>Learn more about how your data is stored and secured.
              <ul style={{ fontWeight: 'bold' }}>
                <li>Data is stored in MongoDB Atlas, a cloud database hosting platform.</li>
                <li>The database is IP-locked to ensure only our authorized access.</li>
                <li>The API accessing the database is locked with CORS, permitting requests only from our &quot;rygb.tech&quot; domain.</li>
              </ul>
            </div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>5</div>
              <h1 className={styles.sectHeader}>Data Sharing</h1>
            </div>
            <div className={styles.sectPara}>We do not share your data with third parties.</div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>6</div>
              <h1 className={styles.sectHeader}>Cookies</h1>
            </div>
            <div className={styles.sectPara}>Cookies are used to keep you signed into your RYGB Account. You can choose not to use cookies by not signing in to your account.</div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>7</div>
              <h1 className={styles.sectHeader}>User Rights</h1>
            </div>
            <div className={styles.sectPara}>You can access, update, or delete your personal information through your &quot;My RYGB Account&quot; dashboard at <a href="https://accounts.rygb.tech/dash" style={{ color: "orange" }}>https://accounts.rygb.tech/dash</a></div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>8</div>
              <h1 className={styles.sectHeader}>Compliance</h1>
            </div>
            <div className={styles.sectPara}>We are GDPR and CCPA compliant. Users can delete all of their collected data with one click.</div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>9</div>
              <h1 className={styles.sectHeader}>Contact Us</h1>
            </div>
            <div className={styles.sectPara}>For questions or concerns contact us here:
              <ul style={{fontWeight: "bold"}}>
                <li>Phone: 410-596-6619</li>
                <li>Email: mmredblock6@gmail.com</li>
              </ul>
            </div>
            <div className={styles.sectdivider}></div>
            <div className={styles.sectHeaderContainer}>
              <div className={styles.sectCircle}>10</div>
              <h1 className={styles.sectHeader}>Notification of Changes</h1>
            </div>
            <div className={styles.sectPara}>We&apos;ll let you know if this page changes when you try to access one of our services.</div>
            <h1 className={styles.tapeHeader} style={{width: "250px", marginTop: "40px", transform: "rotate(-3deg)"}}>THAT&apos;S IT!</h1>



          </div>
        </div>
      </div>

    </div>
  )
}
