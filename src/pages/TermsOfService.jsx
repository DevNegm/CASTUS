import Layout from "components/layout/Layout";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useDispatch, useSelector } from "react-redux";
import {  getTermsOfService } from "redux/slices/aboutSlice";



export default function TermsOfService() {
  const dispatch = useDispatch();
  const termsOfService = useSelector((state) => state?.about?.terms?.results)
  console.log(termsOfService);
  useEffect(() => {
    dispatch(getTermsOfService());
  }, []);
  const [isActive, setIsActive] = useState({
    status: false,
    id: 10,
  });

  const handleToggle = (id) => {
    if (isActive.id === id) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        id,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={
          <>
            Terms <span>Of Service</span>
          </>
        }
      >
        <section className="faq-area pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="faq-wrap">
                  <div className="accordion">
                    {termsOfService?.map((cookie) => (
                      <div
                        className={
                          isActive.id === cookie?.id
                            ? "accordion-item active"
                            : "accordion-item"
                        }
                        key={cookie?.id}
                      >
                        <h2 className="accordion-header">
                          <button
                            className={
                              isActive.id === cookie?.id
                                ? "accordion-button"
                                : "accordion-button collapsed"
                            }
                            type="button"
                            onClick={() => handleToggle(cookie?.id)}
                          >
                            {cookie?.title}
                          </button>
                        </h2>
                        <Collapse isOpened={isActive.id === cookie?.id}>
                          <div
                            className={
                              isActive.id === cookie?.id
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p>{cookie?.description}</p>
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
