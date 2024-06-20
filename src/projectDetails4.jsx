import classes from './projectDetails4.module.css';
import PROJECTINFOPIC from './assets/imgs/edited/about_us_pic.webp';
import PROJECTINFOPIC2 from './assets/imgs/edited/about_me_pic.webp';
import PROJECTINFOPIC3 from './assets/imgs/edited/work_item_2.webp';
import { Link } from 'react-router-dom';

function ProjectDetail3() {
  return (
    <>
      <section className={classes.projectintrosection3}>
        <div className={classes.projectintrotext3}>
          <h1 className={classes.projectintroheading3}>ROCK ART HUB</h1>
          <p className={classes.projectintrodescription3}>
            Rock Arts Hub is a revolutionary platform that celebrates the beauty
            and complexity of our planet through the harmonious integration of
            geoscience and art.
          </p>

          <Link to="https://rockarthub.netlify.app">
            <button className={classes.projectctabtn4}>
              View Landing Page
            </button>
          </Link>
          <Link to="https://github.com/shavjw/rock-art-hub">
            <button className={classes.projectctabtn4a}> GITHUB </button>
          </Link>
        </div>

        <div className={classes.projectinfopic3}></div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT CHALLENGE</h2>
          <p className={classes.projectinfodescription3}>
            Rock Arts Hub faced challenges in facilitating collaboration between
            geoscientists and artists, who often work in separate silos.
            Communicating complex geoscientific concepts to a broad audience was
            difficult through traditional means. There was limited public
            engagement with geoscience due to its perceived complexity.
            Sustaining long-term interest among participants and overcoming
            resistance from traditionalists in both fields posed additional
            hurdles. Technical and financial constraints in developing and
            maintaining the online platform, as well as securing sufficient
            funding for outreach programs, added to the challenges.
          </p>
        </div>

        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC} className={classes.projectinfoimg3} />
        </div>
      </section>

      <section className={classes.projectinfosection3}>
        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC2} className={classes.projectinfoimg13} />
        </div>

        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT SOLUTIONS</h2>
          <p className={classes.projectinfodescription3}>
            Rock Arts Hub developed an online platform showcasing
            geoscience-inspired artworks with filters and detailed descriptions
            to enhance understanding. A collaborative space was created for
            geoscientists and artists to connect and work on projects, supported
            by communication and file-sharing tools. A dedicated section offers
            articles, videos, and interactive learning tools to explain
            geoscience through art, catering to various audiences. Workshops,
            seminars, and exhibitions were organized to encourage dialogue and
            engagement, alongside outreach programs for the wider community.
            Networking opportunities were provided to promote interdisciplinary
            collaboration.
          </p>
        </div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT RESULTS</h2>
          <p className={classes.projectinfodescription3}>
            Since its launch, RaptorsGear has revolutionized the way Toronto
            Raptors fans engage with team merchandise. The user experience has
            become more immersive and engaging, as fans can easily browse and
            select from an array of exclusive products. The streamlined
            navigation, secure checkout process, and integrated product
            management have drastically improved the online shopping journey.
            Fans can confidently explore new arrivals, update their selections,
            and securely complete transactions. As a result, the RaptorsGear
            e-commerce site not only meets fans expectations but exceeds them,
            creating an online hub where team spirit is celebrated through
            high-quality merchandise.
          </p>

          <p className={classes.projectinfodescription3}>
            These solutions led to better communication and understanding of
            geoscientific concepts through art, increasing public engagement and
            scientific literacy. Successful collaborations between geoscientists
            and artists resulted in innovative discoveries, with positive
            feedback demonstrating the platforms impact. Public participation in
            workshops and exhibitions grew, and educational resources reached a
            diverse audience. The platform received recognition and support from
            academic institutions and cultural organizations. Sustained interest
            and engagement from both communities met the success criteria, and
            effective strategies overcame resistance and addressed technical and
            financial challenges, ensuring the platforms success.
          </p>
        </div>

        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC3} className={classes.projectinfoimg3} />
        </div>
      </section>
    </>
  );
}

export default ProjectDetail3;
