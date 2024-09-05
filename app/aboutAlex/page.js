'use client'
import React from 'react';
import { useState } from 'react';
const App = () => {
	// State to track if the user is authenticated
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [password, setPassword] = useState('');

	// Correct password for the protected content
	const correctPassword = '1149';

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
			alert('Incorrect Password');
		}
	};
	return (
		<div className='App'>
			{!isAuthenticated ? (
        // If not authenticated, show the password input form
        <form onSubmit={handleSubmit}>
          <h2>Enter Password to Access the Page</h2>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
			<div style={styles.container}>
				<h1 style={styles.header}>Hee Jin (Alex) Kwak</h1>
				<hr />

				{/* <p>
				<strong>Addr:</strong> (Room No. 301) 14, Yulha 2-ro 222beon-gil, Gimhae-si, Gyeongsangnam-do, Republic of Korea
				(51016)
			</p>
			<p>
				<strong>Phone:</strong> (+82) 10 8641 4609
			</p>
			<p>
				<strong>E-mail:</strong> <a href='mailto:alexkwak24@gmail.com'>alexkwak24@gmail.com</a>
			</p>
			<p>
				<strong>WEB:</strong>{' '}
				<a href='http://www.wire-lab.net' target='_blank' rel='noopener noreferrer'>
					www.wire-lab.net
				</a>
			</p> */}

				<h3 style={styles.subheader}>SKILLS</h3>
				<h3 style={styles.subsubheader}>Process Engineering</h3>
				<ul>
					<li>Tube and Wire Manufacturing Process</li>
					<li>Design Tube Forming Mill</li>
					<li>Design Cassette Roller Die for Wire-
						Drawing</li>
					<li>30 Years experience on FCW Plant</li>
					<li>Build Aluminum Welding Wire Plant</li>
				</ul>

				<h3 style={styles.subsubheader}>Language</h3>
				<ul>
					<li>English: 845 TOEIC Score in year 2007</li>
					<li>Chinese: 5 Grade of HSK in year 2012</li>
					<li>Japanese: 575 JPT Score in year 1999</li>
				</ul>

				<h3 style={styles.subsubheader}>Computer</h3>
				<ul>
					<li>
						Computer Aid Design
						<ul>
							<li>Microstation</li>
							<li>SketchUP</li>
						</ul>
					</li>
					<li>
						Programming Language
						<ul>
							<li>Visual Basic</li>
							<li>Labview (Build digital void detector on the FCW forming line)</li>
							<li>
								JavaScript, React, Next.js. (
								<a href='http://www.wire-lab.net' target='_blank' rel='noopener noreferrer'>
									www.wire-lab.net
								</a>
								)
							</li>
						</ul>
					</li>
				</ul>
				<hr />

				<h2 style={styles.subheader}>EXPERIENCE</h2>
				<h3 style={styles.subsubheader}>Career in ESAB SeAH Corp.(ESC) (Feb. 1994 ~ March 2024)</h3>
				<ul>
					<li>Worked as a process engineer for whole time in ESAB Seah Corp.</li>
					<li>Promoted to the Technical Director in 2015 to 2017</li>
					<li>Worked as Technical Adviser from 2018 to March 2024</li>
				</ul>

				<h3 style={styles.subsubheader}>Completed Projects</h3>
				<ul>
					<li>
						<strong>Changwon Project - factory movement and expansion project (June 1994 to Jan. 1996)</strong>
						<ul>
							<li>First worked with Lamnea Bruk at 1st NTC installation in Feb. 1994.</li>
							<li>Factory expansion project to Changwon city.</li>
							<li>Construct Factory Building and Infrastructure for FCW Factory.</li>
							<li>Installed Japanese Forming Line and ESAB Drawing Machine (Fukugiyama and Eurosum)</li>
						</ul>
					</li>
					<li>
						<strong>ESAB Global MAG Wire Project - for MAG Wire Factory (June 1998 to 2001)</strong>
						<ul>
							<li>Study related equipment with Lamnea</li>
							<li>Join ESAB Global Mag Wire Meeting to prepare MAG Wire.</li>
							<li>Visit all ESAB MAG Wire Plant in Europe and US</li>
						</ul>
					</li>
					<li>
						<strong>ESAB Global Cored Wire Project (Jan. 2001 to Jan. 2003)</strong>
						<ul>
							<li>Global technical meeting to introduce process achievement</li>
							<li>Visit all FCW plant in Europe, US and Mexico.</li>
						</ul>
					</li>
					<li>
						<strong>Wuhan Project - support manufacturing technology(June 2001 to Oct. 2002)</strong>
						<ul>
							<li>The Project that ESAB provide FCW equipment to Wuhan Shipyard in China.</li>
							<li>Provide the roles of supplying CRD and Cleaning Device.</li>
							<li>Visit ESAB Sweden and Lamnea to prepare the Project</li>
							<li>Lanmea, ESAB and ESC worked together in Wuhan to complete the project (Start-up)</li>
						</ul>
					</li>
					<li>
						<strong>Lean Project of ESAB Global Cored Wire (2010 to 2011)</strong>
						<ul>
							<li>
								Colfax shareholder of ESAB mobilized a team in order to make Lean Factory for all ESAB Cored Factory.
							</li>
							<li>Joined the team recommended by ESAB-ESC Board Chairman</li>
							<li>Visit ESAB Vamberk and Brazil to attend the meeting</li>
						</ul>
					</li>
					<li>
						<strong>Yantai Project in China (2008 to Oct. 2011)</strong>
						<ul>
							<li>Build Factory in Yantai by ESAB and ESC</li>
							<li>Supply all manufacturing equipment except baking oven and pay-off of forming line</li>
							<li>
								Lead 10 engineers for 40 days in Yantai installing forming line and winding line including NTC from
								Lamnea
							</li>
						</ul>
					</li>
					<li>
						<strong>Improvement Project on Rewinding Line (2008 to 2009)</strong>
						<ul>
							<li>Analyze all movements of operator by record and movie clip</li>
							<li>Did a survey of the operators related to the productivity</li>
							<li>Improved the things the operators need.</li>
							<li>Base for the improvement of the plastic spool</li>
						</ul>
					</li>
					<li>
						<strong>Plastic Spool improvement Project (2009 to 2011)</strong>
						<ul>
							<li>New design by engineering calculation</li>
							<li>
								Improve 5% productivity to wind the wire with bigger winding core and reducing the possibility of
								reverse winding.
							</li>
							<li>Reduce the weight of plastic material(PP) up to 20% as a result, save the purchase costs.</li>
							<li>Get Patent in Korea. (Give up the patent at 2021)</li>
						</ul>
					</li>
					<li>
						<strong>Seamless FCW Project (2011 to 2013)</strong>
						<ul>
							<li>
								Hyundai Heavy Industry request to make the seamless flux cored wire for their application as a backup
								plan
							</li>
							<li>Build unique forming line and introduce laser welder to complete the project.</li>
							<li>Get the Patent for the manufacturing Seamless FCW in Korea</li>
							<li>Get the Global Patent by ESAB</li>
						</ul>
					</li>
					<li>
						<strong>Digital Void Detector Project (2007 to 2021)</strong>
						<ul>
							<li>To know fill percent by the speed of equipment, strip and flux information</li>
							<li>Introduced NI DAQ device and Labview software</li>
							<li>Installed all forming line in ESC replacing analog void detector</li>
							<li>
								Able to monitor forming line’s running state at any place and trace the history of fill percent when the
								issue comes out.
							</li>
						</ul>
					</li>
					<li>
						<strong>Aluminum Welding Wire Project (2021 to 2023)</strong>
						<ul>
							<li>Approved a invest plan with the technology from Alcotec</li>
							<li>Alcotec did not supply any documents except SOP and wash box diagram</li>
							<li>
								Visit Alcotec Factory in 2022 and discussed the manufacturing process but do not allow to take the
								pictures of process and did not get any documents related to the process.
							</li>
							<li>Designed infrastructure, shaving machine, wash box and built by these design</li>
							<li>Introduced Lamnea wet drawing machine and Helicord cleaning device.</li>
							<li>Develop a vendor to do breakdown the rods to intermediate wire with heat treatment.</li>
							<li>Complete the project Sep. 2023.</li>
						</ul>
					</li>
				</ul>
				<hr />

				<h2 style={styles.subheader}>AWARD</h2>
				<ul>
					<li>
						<strong>Achievement Award by SeAH Group: Gold Award in 2005</strong>
						<ul>
							<li>Applying 1.0t strip from 0.9t saving raw material costs</li>
							<li>Redesign all the forming roll and drawing sequence</li>
						</ul>
					</li>
					<li>
						<strong>Achievement Award by SeAH Group: Silver Award in 2007</strong>
						<ul>
							<li>Introducing a new forming mill which increase the productivity</li>
						</ul>
					</li>
					<li>
						<strong>Achievement Award by SeAH Group: Silver Award in 2008</strong>
						<ul>
							<li>Develop new straightener to have long life time at 30 m/s winding speed</li>
						</ul>
					</li>
					<li>
						<strong>Award by Korea Bundy</strong>
						<ul>
							<li>Solve tube reducing problem applying CRD technology</li>
						</ul>
					</li>
				</ul>
				<hr />

				<h2 style={styles.subheader}>EDUCATION</h2>
				<ul>
					<li>DongA University / Mechanical Engineering / bachelor degree / ~ Feb. 1994</li>
					<li>Yonsei University / MBA / March 2011 (45 days course)</li>
					<li>
						Busan National University/ Production Automation Engineering / Master Degree / March 2013 to Feb. 2015
					</li>
				</ul>
				<hr />

				<h2 style={styles.subheader}>PCT Patent</h2>
				<ul>
					<li>
						<a href='https://patents.google.com/patent/KR101435194B1/ko'>
							플럭스 코어드 용접 와이어와 그의 제조 방법 및 장치: 특허 제 10-1435194호
						</a>
					</li>
					<li>
						<a href='https://patents.google.com/patent/US20150044506A1/en?oq=US2015%2f0044506A1'>
							FLUX CORED WIRE AND MANUFACTURING METHOD THEREOF AND MANUFACTURING DEVICE THEREOF: Pub.No: US2015/0044506
							A1
						</a>
					</li>
					<li>PCT No: PCT/US13/36883</li>
				</ul>
			</div>
			)}
		</div>
	);
};

const styles = {
	container: {
		fontFamily: 'Arial, sans-serif',
		margin: '20px',
		lineHeight: '1.6',
    paddingLeft: '20px'
	},
	header: {
		fontSize: '2em',
		marginBottom: '10px',
	},
	subheader: {
		fontSize: '1.5em',
		marginTop: '20px',
		marginBottom: '10px',
	},
	subsubheader: {
		fontSize: '1.2em',
		marginTop: '15px',
		marginBottom: '5px',
	},
};

export default App;