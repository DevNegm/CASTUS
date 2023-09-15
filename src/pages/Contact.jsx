import Layout from "components/layout/Layout";
import Preloader from "components/preloader/Preloader";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainInfo } from "redux/slices/aboutSlice";
import { postContact } from "redux/slices/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state?.contact?.contact);
  const mainInfo = useSelector((state) => state?.about?.mainInfo);
  const loading = useSelector((state) => state?.contact?.loading);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });
  const [done, setDone] = useState(false);
  const [notValid, setNotValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postContact({
        first_name: data?.first_name,
        last_name: data?.last_name,
        email: data?.email,
        phone_number: data?.phone_number,
        subject: data?.subject,
        message: data?.message,
      })
    ).then(() =>
      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      })
    );
  };
  useEffect(() => {
    contact && !loading && setDone(true);
  }, [contact, loading]);
  useEffect(() => {
    if (
      data?.first_name?.length > 0 &&
      data?.last_name?.length > 0 &&
      data?.email?.length > 0 &&
      data?.phone_number?.length > 0 &&
      data?.subject?.length > 0 &&
      data?.message?.length > 0
    ) {
      setNotValid(false);
    }
  }, [data]);
  useEffect(() => {
    dispatch(getMainInfo())
  }, []);
console.log(mainInfo)
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          {" "}
          Get in <span>Touch</span>{" "}
        </>
      }
    >
      <div>
        <section className="contact-area pb-140">
          <div className="container">
            <div className="contact-info-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <h2 className="title">Visit Us Daily</h2>
                      <p>
                      East Ham,   <br /> England
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-phone-volume" />
                    </div>
                    <div className="content">
                      <h2 className="title">Contact Us</h2>
                      <span>{mainInfo?.whatsapp}</span>
                      {/* <span>+1 800-789-4561</span> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <h2 className="title">Email Us</h2>
                      <span>{mainInfo?.email}</span>
                      {/* <span>Webyourinfo@gmail.com</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form-wrap">
                  <h2 className="title">
                    Do you have <span>question contact us</span>
                  </h2>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="responds-wrap">
                        {/* <ul className="list-wrap">
                          <li>
                            <img
                              src="assets/img/images/m_voice_img01.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img02.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img03.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img04.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img05.png"
                              alt=""
                            />
                          </li>
                        </ul> */}
                        {done && <p>Thank you for this message!</p>}
                        <p>Responds in 4-8 hours</p>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="contact-form">
                        <form action="#">
                          <div className="form-grp">
                            <input
                              type="text"
                              value={data?.first_name}
                              onChange={(e) => {
                                setDone(false);
                                setData({
                                  ...data,
                                  first_name: e.target.value,
                                });
                              }}
                              id="name"
                              placeholder="Your First Name"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="text"
                              value={data?.last_name}
                              onChange={(e) => {
                                setDone(false);
                                setData({ ...data, last_name: e.target.value });
                              }}
                              id="name"
                              placeholder="Your Last Name"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="email"
                              value={data?.email}
                              onChange={(e) => {
                                setDone(false);
                                setData({ ...data, email: e.target.value });
                              }}
                              id="email"
                              placeholder="Your email*"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="text"
                              value={data?.phone_number}
                              onChange={(e) => {
                                setDone(false);
                                setData({
                                  ...data,
                                  phone_number: e.target.value,
                                });
                              }}
                              id="phone"
                              placeholder="Phone"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="text"
                              value={data?.subject}
                              onChange={(e) => {
                                setDone(false);
                                setData({ ...data, subject: e.target.value });
                              }}
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <textarea
                              value={data?.message}
                              onChange={(e) => {
                                setDone(false);
                                setData({ ...data, message: e.target.value });
                              }}
                              name="message"
                              id="message"
                              placeholder="Please describe what you need*"
                            />
                          </div>
                          <button
                            disabled={notValid}
                            onClick={(e) => handleSubmit(e)}
                            className="btn"
                            type="submit"
                          >
                            {loading ? (
                              <>
                                <span
                                  class="spinner-grow spinner-grow-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Loading...
                              </>
                            ) : (
                              "submit here"
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="contact-shape">
                    <img src="assets/img/images/contact_shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* contact-map */}
        <div className="contact-map">
          <iframe
            src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {/* contact-map-end */}
      </div>
    </Layout>
  );
};
export default Contact;
