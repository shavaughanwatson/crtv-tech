import classes from './projectDetails.module.css';
import { Link } from 'react-router-dom';
import PROJECTINFOPIC from './assets/imgs/edited/project_info_pic.webp';
import PROJECTINFOPIC2 from './assets/imgs/edited/intro_pic_1.webp';
import PROJECTINFOPIC3 from './assets/imgs/edited/project_info_pic3.webp';

//FITHUB PROJECT PAGE
function ProjectDetail() {
  return (
    <>
      <section className={classes.projectintrosection}>
        <div className={classes.projectintrotext}>
          <h1 className={classes.projectintroheading}>FITHUB</h1>
          <p className={classes.projectintrodescription}>
            FITHUB is your streamlined path to better health. With personalized
            exercise plans and nutrition guidance, this app integrates
            cutting-edge technology to provide tailored solutions. Say goodbye
            to online confusion FITHUB simplifies your fitness and nutrition,
            ensuring a healthier lifestyle at your fingertips.
          </p>
          <Link to="https://fithubapp.netlify.app">
            <button className={classes.projectctabtn}> View App</button>
          </Link>
          <Link to="https://github.com/shavjw/fithub">
            <button className={classes.projectctabtn}> GITHUB</button>
          </Link>
        </div>

        <div className={classes.projectinfopic}></div>
      </section>

      <section className={`${classes.projectinfosection} ${classes.reverse}`}>
        <div className={classes.projectinfotext}>
          <h2 className={classes.projectinfoheading}>CLIENT CHALLENGE</h2>
          <p className={classes.projectinfodescription}>
            The quest for the right exercise and nutrition plan is a labyrinth
            of confusion. The sheer volume of information available online
            overwhelms individuals seeking tailored solutions for their health
            goals. The lack of a centralized platform exacerbates the situation,
            making the search for reliable content an arduous task. FITHUB, an
            innovative app, was born from the desire to simplify this process
            and empower users on their fitness journeys.
          </p>
        </div>

        <div className={classes.projectinfopic}>
          <img src={PROJECTINFOPIC} className={classes.projectinfoimg} />
        </div>
      </section>

      <section className={classes.projectinfosection}>
        <div className={classes.projectinfopic}>
          <img src={PROJECTINFOPIC2} className={classes.projectinfoimg} />
        </div>
        <div className={classes.projectinfotext}>
          <h2 className={classes.projectinfoheading}>CLIENT SOLUTION</h2>
          <p className={classes.projectinfodescription}>
            FITHUB harnessed the power of the MERN (MongoDB, Express.js, React,
            Node.js) stack along with third-party integrations to reshape the
            landscape of fitness and nutrition discovery. By tapping into
            authoritative databases, the app curates a user-specific directory
            of workouts, meal plans, and nutritional insights. This eliminates
            the need for users to wade through a sea of options. FITHUBs
            user-centric interface and intuitive design enhance the experience,
            allowing seamless navigation through a wealth of resources.
          </p>
        </div>
      </section>

      <section className={`${classes.projectinfosection} ${classes.reverse}`}>
        <div className={classes.projectinfotext}>
          <h2 className={classes.projectinfoheading}>CLIENT RESULT</h2>
          <p className={classes.projectinfodescription}>
            Since its inception, FITHUB has catalyzed transformative changes in
            users fitness and nutrition journeys. The apps streamlined search
            empowers individuals to effortlessly discover personalized exercise
            routines and meal plans, leading to greater adherence to healthier
            lifestyles. Tailored content drives higher motivation and
            engagement, resulting in noticeable physical improvements and
            enhanced mental well-being. FITHUBs triumph is evident not only in
            user feedback but also in tangible, positive outcomes that
            underscore its efficacy.
          </p>
          <p className={classes.projectinfodescription}>
            In conclusion, FITHUB leverages the MERN stack and third-party
            integrations to tackle the complexities of finding suitable exercise
            and nutrition content. This approach revolutionizes the way users
            craft their workout regimens and meal plans, ultimately making
            fitness journeys more accessible, enjoyable, and triumphant.
          </p>
        </div>

        <div className={classes.projectinfopic}>
          <img src={PROJECTINFOPIC3} className={classes.projectinfoimg} />
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
