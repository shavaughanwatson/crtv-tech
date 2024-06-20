import classes from './projectDetails2.module.css';
import { Link } from 'react-router-dom';
import PROJECTINFOPIC from './assets/imgs/edited/digiagenda_info_pic.webp';
import PROJECTINFOPIC2 from './assets/imgs/edited/intro_pic_2.webp';
import PROJECTINFOPIC3 from './assets/imgs/edited/digiagenda_info_pic2.webp';

//DIGIAGENDA PROJECT DETAILS
function ProjectDetail2() {
  return (
    <>
      <section className={classes.projectintrosection2}>
        <div className={classes.projectintrotext2}>
          <h1 className={classes.projectintroheading2}>DIGIADGENDA</h1>
          <p className={classes.projectintrodescription2}>
            DIGIADGENDA is an app to reclaim control over your daily agenda.
            Seamlessly merging work and personal commitments, this intuitive
            tool simplifies task management while preserving your mental
            well-being. Powered by cutting-edge technology, DIGIADGENDA offers
            secure scheduling, reminder integration, and seamless multi-device
            access. Say goodbye to overwhelming schedules DIGIADGENDA empowers
            you to strike a harmonious balance between productivity and
            serenity.
          </p>
          <Link to="https://digi-agenda.netlify.app">
            <button className={classes.projectctabtn2}> View App</button>
          </Link>
          <Link to="https://github.com/shavjw/DigiAgenda">
            <button className={classes.projectctabtn2}> GITHUB</button>
          </Link>
        </div>

        <div className={classes.projectinfopic2}></div>
      </section>

      <section className={`${classes.projectinfosection2} ${classes.reverse}`}>
        <div className={classes.projectinfotext2}>
          <h2 className={classes.projectinfoheading2}>CLIENT CHALLENGE</h2>
          <p className={classes.projectinfodescription2}>
            In the midst of todays rapid pace and numerous responsibilities,
            managing tasks across professional and personal domains has become a
            source of overwhelming stress for many individuals. Striking a
            balance between work, life, and personal growth often takes a toll
            on mental health. Recognizing this challenge, the DIGIADGENDA app
            was conceived as a solution to streamline scheduling and task
            management, aiming to alleviate the mental strain associated with
            maintaining a busy agenda.
          </p>
        </div>

        <div className={classes.projectinfopic2}>
          <img src={PROJECTINFOPIC} className={classes.projectinfoimg12} />
        </div>
      </section>

      <section className={classes.projectinfosection2}>
        <div className={classes.projectinfopic2}>
          <img src={PROJECTINFOPIC2} className={classes.projectinfoimg2} />
        </div>

        <div className={classes.projectinfotext2}>
          <h2 className={classes.projectinfoheading2}>CLIENT SOLUTION</h2>
          <p className={classes.projectinfodescription2}>
            DIGIADGENDA harnessed the power of the MERN (MongoDB, Express.js,
            React, Node.js) stack, adopting the MVC (Model-View-Controller)
            architecture for a robust foundation. The apps authentication system
            ensures data security while delivering a personalized experience. To
            address task management complexities, DIGIADGENDA seamlessly
            integrated third-party calendar libraries and APIs. This empowered
            users to seamlessly synchronize their schedules, set reminders, and
            access tasks across various devices. The app incorporated
            comprehensive CRUD (Create, Read, Update, Delete) functionalities,
            allowing users to seamlessly organize tasks and adapt to shifting
            priorities.
          </p>
        </div>
      </section>

      <section className={`${classes.projectinfosection2} ${classes.reverse}`}>
        <div className={classes.projectinfotext2}>
          <h2 className={classes.projectinfoheading2}>CLIENT RESULTS</h2>
          <p className={classes.projectinfodescription2}>
            Since its launch, DIGIADGENDA has revolutionized users approach to
            task management, yielding significant improvements in productivity
            and mental well-being. By centralizing schedules and tasks, users
            experience reduced stress and gain better control over their
            commitments. The integrated calendar and reminder features ensure
            that critical tasks are never overlooked, leading to heightened
            efficiency. Users testimonials reflect an increased sense of
            accomplishment and reduced mental strain as they navigate through
            professional and personal responsibilities. DIGIADGENDA has not only
            streamlined users daily lives but has also positively influenced
            their overall mental health, harmonizing productivity and
            well-being.
          </p>

          <p className={classes.projectinfodescription2}>
            In conclusion, DIGIADGENDA effectively tackles the challenge of
            managing overwhelming task loads across various aspects of life. By
            leveraging the MERN stack and the MVC architecture, combined with
            third-party integrations and robust CRUD functionalities, the app
            offers an empowering and seamless experience. The notable
            enhancements in users productivity and mental well-being underscore
            DIGIADGENDAs success in redefining modern task management.
          </p>
        </div>

        <div className={classes.projectinfopic2}>
          <img src={PROJECTINFOPIC3} className={classes.projectinfoimg12} />
        </div>
      </section>
    </>
  );
}

export default ProjectDetail2;
