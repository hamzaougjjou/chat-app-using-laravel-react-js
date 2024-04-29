import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <div>
      
        <div className="home-container">

          <div className="home-hero"
       
          >
            <div className="heroContainer home-hero1">
              <div className="home-container01">
                <h1 className="home-hero-heading heading1
                text-green-500
                ">Connect with the World</h1><span
                  className="home-hero-sub-heading bodyLarge"><span><span><span>Stay in touch with friends and
                    family</span><span> </span></span><span><span> </span><span> </span></span></span><span><span><span>
                    </span><span> </span></span><span><span> </span><span> </span></span></span></span>


                <Link
                  to="/users"
                  className="home-btn-group"><button className="buttonFilled">Get Started
                    &nbsp;→
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="home-features ">
            <div className="featuresContainer !bg-teal-500	">
              <div className="home-features1">
                <div className="home-container02"><span className="overline"><span>features</span><br /></span>
                  <h2 className="home-features-heading heading2">Explore Our Features</h2><span
                    className="home-features-sub-heading bodyLarge"><span><span><span>Discover the exciting features that make
                      our chat app
                      stand out</span><span> </span></span><span><span> </span><span>
                      </span></span></span><span><span><span> </span><span> </span></span><span><span> </span><span>
                      </span></span></span></span>
                </div>
                <div className="home-container03">
                  <div className="featuresCard feature-card-feature-card"><svg viewBox="0 0 1024 1024" className="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z">
                    </path>
                  </svg>
                    <div className="feature-card-container">
                      <h3 className="feature-card-text heading3"><span>Instant Messaging</span></h3><span
                        className="bodySmall"><span>Send and receive messages in real-time</span></span>
                    </div>
                  </div>
                  <div className="featuresCard feature-card-feature-card"><svg viewBox="0 0 1024 1024" className="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z">
                    </path>
                  </svg>
                    <div className="feature-card-container">
                      <h3 className="feature-card-text heading3"><span>Group Chats</span></h3><span
                        className="bodySmall"><span>Create group chats with friends, family, or
                          colleagues</span></span>
                    </div>
                  </div>
                  <div className="featuresCard feature-card-feature-card"><svg viewBox="0 0 1024 1024" className="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z">
                    </path>
                  </svg>
                    <div className="feature-card-container">
                      <h3 className="feature-card-text heading3"><span>Media Sharing</span></h3><span
                        className="bodySmall"><span>Share photos, videos, and files with ease</span></span>
                    </div>
                  </div>
                  <div className="featuresCard feature-card-feature-card"><svg viewBox="0 0 1024 1024" className="featuresIcon">
                    <path
                      d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z">
                    </path>
                  </svg>
                    <div className="feature-card-container">
                      <h3 className="feature-card-text heading3"><span>Custom Emojis</span></h3><span
                        className="bodySmall"><span>Express yourself with a wide range of custom
                          emojis</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="home-banner">
            <div className="bannerContainer home-banner1">
              <h1 className="home-banner-heading heading2">Welcome to Our Chat App</h1><span
                className="home-banner-sub-heading bodySmall"><span><span><span>Our chat app allows you to chat, share photos,
                  videos, and
                  stay connected with people around the world. With end-to-end
                  encryption, your conversations are secure and private. Join
                  our community today and experience seamless communication
                  like never before.</span><span> </span></span><span><span> </span><span>
                  </span></span></span><span><span><span> </span><span> </span></span><span><span> </span><span>
                  </span></span></span></span>

              <Link
                to="/friends"
                className="home-btn-group"><button className="buttonFilled">Chat with friends
                  &nbsp;→
                </button>
              </Link>
            </div>
          </div>

          <div className="home-faq">
            <div className="faqContainer bg-cyan-300">
              <div className="home-faq1">
                <div className="home-container29"><span className="overline"><span>FAQ</span><br /></span>
                  <h2 className="home-text85 heading2">Common questions</h2><span className="home-text86 bodyLarge"><span>Here are
                    some of the most common questions that we
                    get.</span><br /></span>
                </div>
                <div className="home-container30">
                  <div className="question1-container"><span className="question1-text heading3"><span>How do I start a new
                    chat?</span></span><span className="bodySmall"><span>To start a new chat, simply click on the 'New Chat'
                      button and select the contact you want to chat with.</span></span></div>
                  <div className="question1-container"><span className="question1-text heading3"><span>Can I send images and files
                    in the chat?</span></span><span className="bodySmall"><span>Yes, you can send images and files in the
                      chat by
                      clicking on the attachment icon and selecting the file you
                      want to send.</span></span></div>
                  <div className="question1-container"><span className="question1-text heading3"><span>Is the chat app available on
                    mobile devices?</span></span><span className="bodySmall"><span>Yes, the chat app is available on both
                      iOS and Android
                      devices. You can download it from the App Store or Google
                      Play Store.</span></span></div>
                  <div className="question1-container"><span className="question1-text heading3"><span>Can I customize my chat
                    settings?</span></span><span className="bodySmall"><span>Yes, you can customize your chat settings by
                      going to the
                      settings menu and adjusting preferences such as
                      notifications, theme, and privacy settings.</span></span></div>
                  <div className="question1-container"><span className="question1-text heading3"><span>Is my chat data
                    secure?</span></span><span className="bodySmall"><span>Yes, we take data security seriously. Your chat
                      data is
                      encrypted to ensure privacy and security.</span></span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-footer">
            <footer className="footerContainer home-footer1">
              <div className="home-container31">

                <section className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  <img className="h-10 mr-2" src="./images/logo.png" alt="Chatify" />
                </section>

                <nav className="home-nav1"><span className="bodySmall">Home</span><span
                  className="home-nav221 bodySmall">Features</span><span className="home-nav321 bodySmall">Download</span><span
                    className="home-nav421 bodySmall">Support</span><span className="home-nav521 bodySmall">Contact</span></nav>
              </div>
              <div className="home-separator"></div>
              <div className="home-container32"><span className="bodySmall home-text89">© 2023 myCompany, All Rights
                Reserved.</span>
                <div className="home-icon-group1"><svg viewBox="0 0 950.8571428571428 1024" className="home-icon10 socialIcons">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
                  </path>
                </svg><svg viewBox="0 0 877.7142857142857 1024" className="home-icon12 socialIcons">
                    <path
                      d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
                    </path>
                  </svg><svg viewBox="0 0 602.2582857142856 1024" className="home-icon14 socialIcons">
                    <path
                      d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
                    </path>
                  </svg></div>
              </div>
            </footer>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home