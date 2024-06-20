import classes from './about.module.css';

import CONTACTPIC from '../assets/imgs/edited/contact_pic.webp';
import ABOUTPIC from '../assets/imgs/edited/about_me.webp';

function AboutMe() {
  return (
    <>
      <section className={classes.aboutintrosection}>
        <div className={classes.aboutintrotext}>
          <h1 className={classes.aboutintroheading}>SHAVAUGHAN WATSON</h1>
          <h3 className={classes.aboutintrotitle}>
            Fullstack Developer/ Web Specialist
          </h3>
          <p className={classes.aboutintrodescription}>
            Driven by a deep passion for innovation and a flair for creativity,
            I specialize in turning ideas into inventive realities. With a
            strong blend of technical prowess and a creative mindset, Im
            committed to designing digital solutions that stand out and
            captivate.
          </p>
        </div>

        <div className={classes.aboutpic}>
          <img src={ABOUTPIC} className={classes.aboutimg} />
        </div>
      </section>

      <section className={classes.aboutinfosection}>
        <div className={classes.aboutinfopic}>
          <img src={CONTACTPIC} className={classes.aboutinfoimg} />
        </div>

        <div className={classes.aboutinfotext}>
          <h1 className={classes.aboutinfoheading}>WHAT I DO!</h1>

          <ul className={classes.aboutinfolist}>
            <li>
              <h3 className={classes.aboutinfosubheading}>
                Create full-stack mobile applications
              </h3>
              <p className={classes.aboutinfodescription}>
                In FullStack Development, I creatively leverage the MERN stack
                to architect innovative digital solutions. By employing modern
                design patterns and crafting robust data architectures, I
                transform ideas into dynamic applications that seamlessly blend
                imagination with technical excellence.
              </p>
            </li>
            <li>
              <h3 className={classes.aboutinfosubheading}>
                Design wireframes and prototypes
              </h3>
              <p className={classes.aboutinfodescription}>
                Passionate about innovation, I shape captivating user
                experiences using Figma. Through imaginative design and
                user-centric thinking, I create interfaces that engage and
                delight, ensuring every interaction is both visually appealing
                and intuitive.
              </p>
            </li>
            <li>
              <h3 className={classes.aboutinfosubheading}>
                Optimize content and utilize web anayltics
              </h3>
              <p className={classes.aboutinfodescription}>
                In Internet/Digital Marketing, I optimize multimedia content to
                captivate audiences. By harnessing Google Analytics for
                insights, I shape innovative campaigns that merge creativity
                with data-driven decisions, resulting in strategies that drive
                results and leave a lasting impact.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
