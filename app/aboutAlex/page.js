"use client";
import React from "react";
import { useState } from "react";
const App = () => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Correct password for the protected content
  const correctPassword = "1149";

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div className="bg-slate-300 text-slate-700 text-4xl">
      {!isAuthenticated ? (
        // If not authenticated, show the password input form
        <form onSubmit={handleSubmit} className="text-center py-96 ">
          <h2 className="mb-8 text-blue-500 font-semibold ">Enter Password to Access the Page</h2>
          <input className="bg-slate-50 text-slate-600 w-80 h-16 text-center border-2 border-red-500 mr-10"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <button type="submit" className="">Submit</button>
        </form>
      ) : (
        <div className="text-slate-700 text-base m-0" style={styles.container}>
          <h1 className="text-4xl font-bold py-6">Hee Jin (Alex) Kwak</h1>
          <hr className="border-1 border-gray-600 mb-2 " />

          <div>
            <p>
              <strong>Addr:</strong> (Room id-301) 14, Yulha 2-ro 222beon-gil,
              Gimhae-si, Gyeongsangnam-do, Republic of Korea (51016)
            </p>
            <p>
              <strong>Phone:</strong> (+82) 10 8641 4609
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:alexkwak24@gmail.com">alexkwak24@gmail.com</a>
            </p>
            <p>
              <strong>WEB:</strong>{" "}
              <a
                href="http://www.wire-lab.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.wire-lab.net
              </a>
            </p>
          </div>
          <hr className="border-1 border-gray-600 mb-4 " />

          {/* Skill */}
          <div className="m-2">
            <h3 className="text-2xl font-bold mb-4">SKILLS</h3>

            <h3 className="text-xl font-semibold mb-2 ">
              1. Process Engineering
            </h3>
            <ul className="text-base list-disc ml-6">
              <li>Tube and Wire Manufacturing Process</li>
              <li>Design Tube Forming Mill</li>
              <li>Design Cassette Roller Die(CRD) for Wire-Drawing</li>
              <li>30 Years experience on FCW Plant</li>
              <li>Build Aluminum Welding Wire Plant</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-2 ">2. Language</h3>
            <ul className="text-base list-disc ml-6">
              <li>English: 845 TOEIC Score in year 2007</li>
              <li>Chinese: 5 Grade of HSK in year 2012</li>
              <li>Japanese: 575 JPT Score in year 1999</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-2 ">3. Computer</h3>
            <ul className="text-base list-disc ml-6 ">
              <li>
                Computer Aid Design
                <ul className="text-sm list-disc ml-6 mb-2 font-semibold">
                  <li>Microstation</li>
                  <li>SketchUP</li>
                </ul>
              </li>
              <li>
                Programming Language
                <ul className="text-sm list-disc ml-6 mb-2 font-semibold">
                  <li>Visual Basic</li>
                  <li>
                    LabView (Build digital void detector on the FCW forming
                    line)
                  </li>
                  <li>
                    JavaScript, React, Next.js. (
                    <a
                      href="http://www.wire-lab.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.wire-lab.net
                    </a>
                    )
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="border-1 border-gray-600 mb-4 " />

          {/* Experience */}
          <div className="m-2">
            <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
            <div>
              <h3 className="text-xl font-semibold mb-2 ">
                1. Career in ESAB SeAH Corp.(ESC) (Feb. 1994 ~ March 2024)
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  Worked as a process engineer for 30 years in ESAB Seah Corp.
                </li>
                <li>Technical Director from 2015 to 2017</li>
                <li>Technical Adviser from 2018 to March 2024</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 ">
                2. Completed Projects
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong>
                    Changwon Project: factory movement and expansion project
                    (June 1994 to Jan. 1996)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>Expanded the factory in Changwon city, constructing new factory buildings and infrastructure for the FCW Factory.</li>
                    <li>
					Installed Japanese forming lines and ESAB drawing machines (Fukugiyama and Eurosum).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
				  ESAB Global MAG Wire Project (June 1998 - 2001)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    
                    <li>
					Participated in ESAB Global MAG Wire Meetings to prepare for the production of MAG wire.
                    </li>
                    <li>Visited ESAB MAG Wire Plants across Europe and the US.</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    ESAB Global Cored Wire Project (Jan. 2001 to Jan. 2003)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Attended global technical meetings to introduce process improvements.
                    </li>
                    <li>Visited FCW plants in Europe, the US, and Mexico.</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Wuhan Project: Support for Manufacturing Technology(June 2001
                    to Oct. 2002)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Supported the project where ESAB provided FCW equipment to the Wuhan Shipyard in China.
                    </li>
                    <li>
					Supplied CRD and Cleaning Devices for the project.
                    </li>
                    <li>Collaborated with ESAB Sweden and Lamnea to prepare for the project.</li>
                    <li>
					Worked with Lamnea, ESAB, and ESC in Wuhan for project completion and start-up.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
				  ESAB Global Cored Wire Lean Project (2010 - 2011)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Colfax, the shareholder of ESAB, mobilized a team to implement Lean Factory practices across all ESAB Cored Wire factories.
                    </li>
                    <li>
					Joined the team upon recommendation from the ESAB-ESC Board Chairman.
                    </li>
                    <li>Visited ESAB Vamberk and Brazil for project meetings.</li>
                  </ul>
                </li>
                <li>
                  <strong>Yantai Project in China (2008 to Oct. 2011)</strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>Build FactoryLed the construction of a factory in Yantai by ESAB and ESC.</li>
                    <li>
					Supplied all manufacturing equipment except for the baking oven and pay-off for the forming line.
                    </li>
                    <li>
					Led a team of 10 engineers for 40 days, installing the forming and winding lines, including NTC from Lamnea.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
				  Rewinding Line Improvement Project (2008 - 2009)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Analyzed operator movements using recorded footage.
                    </li>
                    <li>
					Conducted surveys with operators to understand productivity issues.
                    </li>
                    <li>Implemented improvements based on operator feedback, laying the foundation for plastic spool enhancements.</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Plastic Spool improvement Project (2009 to 2011)
                  </strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>Designed a new spool through engineering calculations, improving productivity by 5%.</li>
                    <li>
					Increased winding core size, reducing the chance of reverse winding and saving material costs by 20%.
                    </li>
                    <li>
					Received a patent in Korea (patent forfeited in 2021).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Seamless FCW Project (2011 to 2013)</strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Responded to Hyundai Heavy Industries' request for seamless flux cored wire as a backup plan.
                    </li>
                    <li>
					Developed a unique forming line and introduced laser welding technology.
                    </li>
                    <li>
					Secured a Korean patent for seamless FCW manufacturing and a global patent through ESAB.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Digital Void Detector Project (2007 to 2021)</strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Developed technology to measure fill percentage using equipment speed, strip, and flux data.
                    </li>
                    <li>Implemented NI DAQ devices and LabVIEW software.</li>
                    <li>
					Installed digital void detectors across all ESC forming lines, replacing analog systems.
                    </li>
                    <li>
					Enabled remote monitoring and fill percentage tracking, facilitating issue resolution.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Aluminum Welding Wire Project (2021 to 2023)</strong>
                  <ul className="list-disc ml-8 mb-2">
                    <li>
					Secured an investment plan using technology from Alcotec.
                    </li>
                    <li>
					Despite limited documentation from Alcotec (only SOP and wash box diagrams), visited their factory in 2022 to discuss manufacturing processes.
                    </li>
                    <li>
					Designed and built infrastructure, a shaving machine, and a wash box based on these discussions.
                    </li>
                    <li>
					Introduced Lamnea's wet drawing machine and Helicord cleaning device.
                    </li>
                    
                    <li>
					Developed a vendor to break down rods into intermediate wire with heat treatment.
                    </li>
                    <li>Completed the project in September 2023.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-1 border-gray-600 mb-4 " />

          <div className="m-2">
            <h2 className="text-2xl font-bold mb-4">AWARD</h2>
            <ul className="text-base list-disc ml-6">
              <li>
                <strong>
                  Achievement Award by SeAH Group: Gold Award in 2005
                </strong>
                <ul className="text-base list-disc ml-6">
                  <li>
                    Applying 1.0t strip from 0.9t saving raw material costs
                  </li>
                  <li>Redesign all the forming roll and drawing sequence</li>
                </ul>
              </li>
              <li>
                <strong>
                  Achievement Award by SeAH Group: Silver Award in 2007
                </strong>
                <ul className="text-base list-disc ml-6">
                  <li>
                    Introducing a new forming mill which increase the
                    productivity
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Achievement Award by SeAH Group: Silver Award in 2008
                </strong>
                <ul className="text-base list-disc ml-6">
                  <li>
                    Develop new straightener to have long life time at 30 m/s
                    winding speed
                  </li>
                </ul>
              </li>
              <li>
                <strong>Award by Korea Bundy</strong>
                <ul className="text-base list-disc ml-6">
                  <li>Solve tube reducing problem applying CRD technology</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr className="border-1 border-gray-600 mb-4 " />

          <div className="m-2">
            <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
            <ul className="text-base list-disc ml-6">
              <li>
                DongA University / Mechanical Engineering / bachelor degree / ~
                Feb. 1994
              </li>
              <li>Yonsei University / MBA / March 2011 (45 days course)</li>
              <li>
                Busan National University/ Production Automation Engineering /
                Master Degree / March 2013 to Feb. 2015
              </li>
            </ul>
          </div>
          <hr className="border-1 border-gray-600 mb-4 " />

          <div className="m-2">
            <h2 className="text-2xl font-bold mb-4">PCT Patent</h2>
            <ul className="text-base list-disc ml-6">
              <li>
                <a href="https://patents.google.com/patent/KR101435194B1/ko">
                  플럭스 코어드 용접 와이어와 그의 제조 방법 및 장치: 특허 제
                  10-1435194호
                </a>
              </li>
              <li>
                <a href="https://patents.google.com/patent/US20150044506A1/en?oq=US2015%2f0044506A1">
                  FLUX CORED WIRE AND MANUFACTURING METHOD THEREOF AND
                  MANUFACTURING DEVICE THEREOF: Pub.No: US2015/0044506 A1
                </a>
              </li>
              <li>PCT No: PCT/US13/36883</li>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    lineHeight: "1.6",
    paddingLeft: "20px",
  },
  header: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  subheader: {
    fontSize: "1.5em",
    marginTop: "20px",
    marginBottom: "10px",
  },
  subsubheader: {
    fontSize: "1.2em",
    marginTop: "15px",
    marginBottom: "5px",
  },
};

export default App;
