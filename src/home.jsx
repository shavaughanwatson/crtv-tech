import { Link } from 'react-router-dom';

import classes from './home.module.css';
import INTROPIC from './assets/imgs/edited/intro_pic_2.webp';
import PROJECTIMG1 from './assets/imgs/edited/work_img_1.webp';
import PROJECTIMG2 from './assets/imgs/edited/work_img_2.webp';
import PROJECTIMG3 from './assets/imgs/edited/work_img_4.webp';
import PROJECTIMG4 from './assets/imgs/edited/work_img_9.png';
import CONTACTPIC from './assets/imgs/edited/contact_pic.webp';
import SERVICEIMG1 from './assets/imgs/edited/code-2-svgrepo-com.svg';
import SERVICEIMG2 from './assets/imgs/edited/talking-chat-svgrepo-com.svg';
import SERVICEIMG3 from './assets/imgs/edited/gear-player-multimedia-svgrepo-com.svg';
import ABOUTPIC from './assets/imgs/edited/profile_pic.webp';
import ABOUTPIC2 from './assets/imgs/edited/profile_pic-1.webp';
import ABOUTPIC3 from './assets/imgs/edited/profile_pic-2.webp';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home() {
  const fadeImages = [
    {
      url: ABOUTPIC,
    },
    {
      url: ABOUTPIC2,
    },
    {
      url: ABOUTPIC3,
    },
  ];

  const serviceList = [
    {
      id: 1,
      image: SERVICEIMG1,
      title: 'Mobile/Web Development',
      description:
        'Custom mobile/web application development tailored to your specific needs, integrating cutting-edge technologies to enhance user experiences.',
    },
    {
      id: 2,
      image: SERVICEIMG2,
      title: 'Tech Consultanting',
      description:
        'Expert tech consulting to refine your ideas and implement them efficiently for your online business/platform.',
    },
    {
      id: 3,
      image: SERVICEIMG3,
      title: 'Tech Support',
      description:
        'Online maitenance for your custom mobile/web application providing long-term service optimizing your digital platform ',
    },
  ];

  const ProjectLinks = [
    { id: 1, src: PROJECTIMG1, path: '/fithub' },
    { id: 2, src: PROJECTIMG2, path: '/digiadgenda' },
    { id: 3, src: PROJECTIMG3, path: '/museshop' },
    { id: 4, src: PROJECTIMG4, path: '/rockarthub' },
  ];

  return (
    <>
      <section className={classes.introsection}>
        <div className={classes.introtext}>
          <h1 className={classes.introheading}>
            Transforming Creative Ideas into Technological Realities
          </h1>
          <p className={classes.introdescription}>
            Many creative individuals and business consultants struggle to bring
            their innovative ideas to life using technology. They often face
            challenges in finding the right tools and expertise to turn their
            concepts into functional solutions.
          </p>
          <div className={classes.ctabtns}></div>
        </div>

        <div className={classes.intropic}>
          <img src={INTROPIC} className={classes.introimg} />
        </div>
      </section>

      <section className={classes.aboutintrosection}>
        <div className={classes.aboutpic}>
          <div className={classes.slideshow}>
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div key={index}>
                  <img className={classes.fadeImage} src={fadeImage.url} />
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <div className={classes.aboutintrotext}>
          <h1 className={classes.aboutintroheading}>About Us</h1>
          <h3 className={classes.aboutintrotitle}>
            Turning Ideas into reality.
          </h3>
          <p className={classes.aboutintrodescription}>
            CRTV is dedicated to bridging the gap between creativity and
            technology. Our team of experts is passionate about helping
            creatives and business consultants bring their ideas to life. With
            our innovative solutions, you can turn your dreams into reality.
          </p>
        </div>
      </section>

      <section className={classes.servicesection}>
        <h2 className={classes.servicetitle}>Services</h2>
        <p className={classes.servicedescrip}>
          At CRTV, we specialize in turning your creative visions into reality.
          Our services include:
        </p>
        <ul className={classes.serviceList}>
          {serviceList.map(service => (
            <li key={service.id} className={classes.service}>
              <img src={service.image} className={classes.serviceimg} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.projectsection}>
        <h2 className={classes.projecttitle}>Apps I created</h2>
        <p className={classes.projectdescrp}>
          Explore our portfolio to see how weve helped businesses like yours
          transform their ideas into successful digital solutions. View our past
          projects and discover the possibilities for your own venture.
        </p>
        <ul className={classes.projectLinks}>
          {ProjectLinks.map(project => (
            <li key={project.id} className={classes.project}>
              <Link to={project.path}>
                <img src={project.src} className={classes.projectimg} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.contactsection}>
        <div className={classes.contactpic}>
          <img src={CONTACTPIC} className={classes.contactimg} />
        </div>

        <div className={classes.contacttext}>
          <h1 className={classes.contactheading}>Lets Connect!</h1>
          <p className={classes.contactdescription}>
            For visionary business owners seeking to transform their innovative
            app ideas into reality. Get in touch today, and lets make your app
            concept shine.
          </p>
          <button className={classes.contactbutton}>
            <a
              className={classes.email}
              href="https://calendly.com/shavjw/intro-call"
            >
              Contact Me!
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
