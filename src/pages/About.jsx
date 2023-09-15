import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import CountUp, { useCountUp } from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAbout, getMainInfo, getTeam } from "redux/slices/aboutSlice";
import { useState } from "react";

export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam());
    dispatch(getAbout());
    dispatch(getMainInfo())

  }, []);

  const mainInfo  = useSelector((state) => state?.about?.mainInfo)
  const About = useSelector((state) => state?.about?.about?.results);
  const Team = useSelector((state) => state?.about?.team?.results);
  const [ceo, setCeo] = useState({});
  useEffect(() => {
    Team && setCeo(Team?.find((i) => i?.position?.includes("CEO")));
  }, [Team]);
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <h1 style={{fontSize:'5rem'}}>
          About <span>CASTUS</span>
        </h1>
      }
    >
      <div>
        {/* about-area */}
        <section className="inner-about-area pb-100">
          <div className="container">
              {About?.map((item,index) => (
            <div className={index % 2 !== 0 ? "row flex-row-reverse align-items-center mb-5" : "row align-items-center mb-5"} key={item?.id}>
                <div className="col-lg-6">
                  <img style={{width:'100%',objectFit:'cover',height:'350px',borderRadius:'15px'}} src="https://images.unsplash.com/photo-1559825477-6f38d6332bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9jZWFuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="castus" />
                </div>
                <div className="col-lg-6" >
                  <div className="inner-about-content">
                    <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                      {item?.title}
                    </h2>
                    <div className="content-bottom">
                      <p>{item?.description}</p>
                    </div>
                  </div>
                </div>
            </div>
              ))}
          </div>
          <div className="container">
             
            <div className="row align-items-center mb-5  pt-5">
             
                <div className="col-lg-12" >
                  <div className="inner-about-content">
                  <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                      Why Us?
                    </h2>
               
                    <div className="content-bottom">
                      <p className="w-100"> {mainInfo?.why_us}</p>
                    </div>
                   
                  </div>
                </div>
            </div>
          
          </div>
        </section>
        {/* about-area-end */}
        {/* team-area */}
        <section className="team-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-four text-center mb-60">
                  <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                    Castus Members
                  </h2>
                </div>
              </div>
          
            {ceo && (
              <div className="team-item col-md-6 m-auto mb-5">
                <div className="team-thumb">
                  <img src={ceo?.image} alt="" />
                  <div className="team-hidden-content">
                    <h4 className="title">{ceo?.name}</h4>

                    <p>{ceo?.about}</p>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-info">
                    <h4 className="title"> {ceo?.name}</h4>
                    <span> {ceo?.position}</span>
                  </div>
                  <div className="team-social">
                    <ul className="list-wrap">
                      <li>
                        <Link to={ceo?.twitter}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    
                      <li>
                        <Link to={ceo?.linkedin}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
               
                    </ul>
                  </div>
                </div>
              </div>
            )}
              <div className="row justify-content-center">
            {Team?.map((member) => (
                <div className="col-lg-4 col-md-6 col-sm-10 my-3" style={{display:member?.position?.includes("CEO") ? 'none' : 'block'}}>
                {!member?.position?.includes("CEO") && (
                    <div className="team-item-two h-100" >
                      <div className="team-thumb-two">
                        <img  style={{objectFit:'cover',height:'350px'}} src={member?.image} alt={member?.name} />
                      </div>
                      <div className="team-content-two">
                        <div className="team-info">
                          <h4 className="title">{member?.name}</h4>
                          <span>{member?.position}</span>
                        </div>
                        <div className="team-social">
                          <ul className="list-wrap">
                            <li>
                              <Link to={member?.twitter}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                       
                            <li>
                              <Link to={member?.linkedin}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                       
                          </ul>
                        </div>
                      </div>
                    </div>
                )}
                </div>
            ))}
              </div>
          </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* counter-area */}
        {/* <section className="counter-area-three pb-160">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="counter-content">
                  <div className="section-title-four mb-40">
                    <h2 className="title wow fadeInLeft" data-wow-delay=".2s">
                      AI can write content just like humans can
                    </h2>
                  </div>
                  <p>
                    By using Natural Language Processing (NLP) techniques, AI
                    can understand the context, tone, and intent of a given
                    piece of content, and produce written output that's relevant
                    and engaging. This technology is especially useful for
                    generating large volumes of content quickly and accurately,
                    which can save businesses a significant amount of time and
                    resources.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="counter-item-wrap-three">
                  <ul className="list-wrap">
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={1}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Our Top Clients</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={50}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Social Media Platforms</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={4}
                            suffix="K"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Powerful AI Tools</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={10}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Our Readers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* counter-area-end */}
      </div>
    </Layout>
  );
}
