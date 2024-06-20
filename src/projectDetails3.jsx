import classes from './projectDetails3.module.css';

import PROJECTINFOPIC from './assets/imgs/edited/muse_pic_1.webp';
import PROJECTINFOPIC2 from './assets/imgs/edited/muse_pic_2.webp';
import PROJECTINFOPIC3 from './assets/imgs/edited/muse_pic_3.webp';
import { Link } from 'react-router-dom';

//TORONTO RAPTORSGEAR SHOP
function ProjectDetail3() {
  return (
    <>
      <section className={classes.projectintrosection3}>
        <div className={classes.projectintrotext3}>
          <h1 className={classes.projectintroheading3}>MUSE SHOP</h1>
          <p className={classes.projectintrodescription3}>
            MUSE Shop is dedicated to providing music artists with a
            comprehensive and accessible e-commerce solution that bridges the
            gap between creativity and commerce. We aim to empower artists to
            take full control of their brand, enhance their digital presence,
            and connect directly with their fans.
          </p>

          <Link to="https://www.figma.com/proto/1ry6GCjYetj7XQ0fepOd6U/MUSE-E-Commerce?node-id=11-164&t=6FzbBm5InMmqpf9A-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=11%3A164">
            <button className={classes.projectctabtn3}>
              View Web Prototype
            </button>
          </Link>
          <Link to="https://www.figma.com/proto/1ry6GCjYetj7XQ0fepOd6U/MUSE-E-Commerce?node-id=840-255&t=1VUP0yc3BajsFFEN-1&scaling=scale-down&page-id=840%3A254&starting-point-node-id=840%3A255">
            <button className={classes.projectctabtn3a}>
              View Mobile Prototype
            </button>
          </Link>
        </div>

        <div className={classes.projectinfopic3}></div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT CHALLENGE</h2>
          <p className={classes.projectinfodescription3}>
            Music artists often struggle to control their online presence and
            effectively manage their music and merchandise sales. Traditional
            platforms provide limited autonomy and customization, making it
            difficult for artists to present their brand authentically. There is
            also a significant challenge in amplifying their marketing efforts
            to reach a broader audience. Many artists find it daunting to
            navigate and utilize CMS and e-commerce platforms efficiently,
            leading to suboptimal engagement and revenue. Additionally,
            technical and financial constraints can hinder the development and
            maintenance of a robust online platform tailored to the unique needs
            of music artists.
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
            To address these challenges, we developed comprehensive e-commerce
            websites for music artists, leveraging CMS systems like WordPress
            and Shopify. These platforms allow artists to manage their song
            libraries and merchandise with ease, providing user-friendly tools
            for updating content and handling sales. The websites feature
            advanced marketing capabilities to enhance visibility and fan
            engagement, including customizable templates that reflect the
            artist’s brand. Interactive elements, such as direct fan
            communication channels and integrated social media links, were
            included to foster a closer connection with the audience. The CMS
            and e-commerce platforms are designed to be intuitive, ensuring even
            less tech-savvy artists can navigate and utilize them effectively.
          </p>
        </div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT RESULTS</h2>
          <p className={classes.projectinfodescription3}>
            Implementing these solutions resulted in artists gaining greater
            control over their digital presence, leading to more authentic and
            engaging online representations of their brand. There was a notable
            increase in traffic and sales on the artists websites, with fans
            appreciating the direct and seamless shopping experience. Enhanced
            marketing tools led to broader audience reach and increased fan
            engagement. Positive feedback from artists highlighted the usability
            and effectiveness of the CMS and e-commerce platforms. The
            initiative garnered recognition within the music industry for
            providing valuable support to artists, affirming the success
            criteria. Effective strategies and user-friendly designs overcame
            resistance and technical challenges, ensuring the platform’s ongoing
            success.
          </p>

          <p className={classes.projectinfodescription3}>
            In conclusion, the RaptorsGear e-commerce site addresses the
            challenge of providing Raptors fans with exclusive and authentic
            team gear. By utilizing the MERN stack and implementing robust
            security measures for authentication and CRUD functionalities, the
            platform delivers a secure and seamless shopping experience. The
            positive impact on user engagement, the enhanced variety of
            exclusive merchandise, and the overall ease of shopping online make
            RaptorsGear a definitive success in uniting fans and their love for
            the Toronto Raptors.
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
