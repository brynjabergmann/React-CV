import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({name, profession}) => {       //Header component
  return(
    <div>
      <h1 style={{marginBottom: "0px"}}>{name}</h1>
      <h2 style={{marginTop: "10px"}}>{profession}</h2>
      <hr/>
      <br/>
    </div>
  )
}

const Profile = ({title, text, text1}) => {
  return(
    <div>
      <h2 style={{marginTop:"5px"}}>{title}</h2>
          <div style={{listStyleType: "none"}}>
            <li>{text}</li>
          </div>
      <br/>
    </div>
  )
}

const Education = ({title, list}) => {
  return(
    <div>
      <h2>{title}</h2>
      <table>
        <tr>
          <td style={{width:300}}> {list[0].course} </td> 
          <td style={{width:250}}> {list[0].school} </td> 
          <td> {list[0].year} </td>
        </tr>
        <tr>
          <td> {list[1].course} </td> 
          <td> {list[1].school} </td> 
          <td> {list[1].year} </td>
        </tr>        
        <tr>
          <td> {list[2].course} </td> 
          <td> {list[2].school} </td> 
          <td> {list[2].year} </td>
        </tr>        
        <tr>
          <td> {list[3].course} </td> 
          <td> {list[3].school} </td> 
          <td> {list[3].year} </td>
        </tr>
      </table>
      <br/>
    </div>
  )
}

const Employment = ({title, list}) => {
  let items = []
  for (let i = 0; i<list.length; i++) {
    items.push(
    <div>
      <table>
        <tr>
          <b>
            <td style={{width:200}}> {list[i].jobTitle}</td>
            <td style={{width:400}}> {list[i].workplace}</td>
            <td > {list[i].date}</td>
          </b> 
        </tr> 
      </table>
      <Bulletpoints points={list[i].bulletpoints}/> 
    </div>
    )
   }
  return(
    <div>
      <h2>{title}</h2>
      {items}
      <br/>
    </div>
  )
}

const Bulletpoints = ({points}) => {
  let items = []
  for (let i = 0; i<points.length; i++) {
    items.push(
      <li>{points[i]}</li>
    )
  }
  return (
    <div>
      <ul style={{marginTop: "10px", marginBottom: "5px"}}>
      {items}
      </ul>
      <br/>
    </div>
  )
}


const Projects = ({title, list}) => {
  let items = []
  for (let i = 0; i<list.length; i++) {
    items.push(
    <div>
      <table>
        <b>
          <tr>
            <td style={{width:250}}> {list[i].name} </td>
            <td style={{width:300}}> {list[i].purpose} </td>
            <td> {list[i].date} </td>
          </tr> 
        </b>
      </table>
      <Bulletpoints points={list[i].bulletpoints}/> 
    </div>
    )
  }
  return(
    <div>
      <h2 style={{marginTop:"0px"}}>{title}</h2>
      {items}
      <br/>
    </div>
  )
}

const Languages = ({title, points}) => {
  return(
    <div>
      <h2 style={{marginTop:"0px"}}>{title}</h2>
      <table>
        <tr align='left' valign='top'>
          <th style={{width: "200px"}}> {points[0].category} </th> 
          <td> {points[0].list} </td> 
        </tr>
        </table>
        <br/>
        <table>
        <tr align='left' valign='top'>
          <th style={{width: "140px"}}> {points[1].category} </th> 
          <td> {points[1].list} </td> 
        </tr>
        </table>
        <br/>
        <table>
          <tr align='left' valign='top'>
          <th style={{width: "120px"}}> {points[2].category} </th> 
          <td> {points[2].list} </td> 
        </tr>
      </table>
      <br/>
    </div>
  )
}

const Other = ({title, list}) => {
  let items = []
  for (let i = 0; i<list.length; i++) {
    items.push(
    <div>
      <table>
        <tr>
          <b>
            <td style={{width:250}}> {list[i].name}</td>
            <td style={{width:350}}> {list[i].place}</td>
            <td > {list[i].date}</td>
          </b> 
        </tr> 
      </table>
      <Bulletpoints points={list[i].bulletpoints}/> 
    </div>
    )
   }
  return(
    <div>
      <h2>{title}</h2>
      {items}
      <br/>
    </div>
  )
}


const Skills = ({title, points}) => {
  let items = []
  for (let i = 0; i<points.length; i++) {
    items.push(
    <li>{points[i]}</li>
    )
  }
  return(
    <div>
      <h2 style={{marginTop:"0px"}}>{title}</h2>
      <ul>{items}</ul>
    </div>
  )
}


const App = () => {            //App component
  const info = {               // Object
    name: 'Brynja Bergmann',
    profession: 'Computer Scientist',
  }

  const profile = {
    title: 'PROFILE',       //title' er hér eitt property í 'profile' objectnum
    text: 'MSc Computer Science graduate, with a passion for software development, looking for an entry level job as a software developer. Bringing forth valuable experience in interdisciplinary teamwork, communication skills, planning and reporting, from my previous job as a social worker.'
  }

  const education = {
    title: 'EDUCATION',
    list: [               //JSON file. 'list' property inni í 'education' objectnum
      {
        course: 'MSC  in Computer Science',
        school: 'University College Dublin',
        year: '2017-2019'
      },
      {
        course: 'MA in Social Work',
        school: 'University of Iceland',
        year: '2012-2014'
      },
      {
        course: 'Diploma in Applied Gender Studies',
        school: 'University of Iceland',
        year: '2011-2012'
      },
      {
        course: 'BA in Social Work',
        school: 'University of Iceland',
        year: '2008-2011'
      }
    ]
  }

  const employment = {
    title: 'EMPLOYMENT',
    list: [
      {
        jobTitle: 'Social Worker',
        workplace: 'Þjónustumiðstöð Laugardals og Háaleitis',
        date: 'Jan 2014 - Aug 2017',
        bulletpoints: [
          'Worked at one of the Municipal Service Centres in Reykjavik.',
          'The job included counselling and evaluation of the need for service.',
          'Specialised in work with parents of disabled children and adults with both mental and other kinds of disabilities.',
          'Project manager for disabled parking in Reykjavik, where the job was to manage the team, evaluate applications and act accordingly.',
          'Managed the provision of 50 support families, according to the Icelandic Disability Act, where the job was to hire, evaluate and pay salaries.',
          'Worked in teams with various healthcare professionals and clients towards a mutual goal.'
        ]
      },
      {
        jobTitle: 'Group Leader',
        workplace: 'Kirkjugarðar Reykjavíkurprófastsdæma',
        date: 'Summer job, 2006-2013',
        bulletpoints: [
          'Lead a group of 6-8 people that was responsible for overseeing a specific part of the cemetery.',
          'Managed the delegation of different tasks to group members related to cemetery maintainance.',
        ]
      }
    ]
  }

  const projects = {
    title: 'PROJECTS',
    list: [
      {
        name: 'React-CV',
        purpose: 'Personal Project',
        date: '2021',
        bulletpoints: [
          'My personal CV, created using React.'
        ] 
        },
      {
      name: 'BrynjaAndTomas.party',
      purpose: 'Personal Project',
      date: '2019',
      bulletpoints: [
        'Simple password protected web application for wedding guests, optimized for mobile devices. Published it using my own virtual private server.',
        'Utilised: Python (Flask), HTML/CSS/Bootstrap, JavaScript/jQuery, SQLite, Git.'
      ] 
      },
      {
        name: 'Dublin Bus Application',
        purpose: 'Research Practicum Project',
        date: '2018',
        bulletpoints: [
          'Developed web-based application, optimized for mobile devices, that allows users to easily plan, route, and visualise a Dublin Bus journey when given any destination, departure, or time.',
          'In this group project, I was in charge of the front-end and user experience.',
          'Utilised: Python (Django), HTML/CSS/Bootstrap, JavaScript/jQuery, Scikit-learn, Git, Google Maps API, third party weather API, HTTP Methods, Agile-based project management framework.'
        ] 
        }
    ]
  }

  const languages = {
    title: 'LANGUAGES',
    points: [
      {
        category: 'Programming languages:',
        list: 'Python (Flask, Django), ReactJS, JavaScript (jQuery), Java, Ruby.'
      },
      {
        category: 'Other technical knowledge:',
        list: 'HTML, CSS (Bootstrap), Relational Databases (MySQL, SQLite), Web Services (JSON, XML, WSDL, SOAP, REST), Git, Agile (Scrum), Adobe Photoshop.'
      },
      {
        category: 'MSc Modules:',
        list: 'Information Visualisation, Cloud Computing, Web Services in Cloud, Computing, Machine Learning, Exploring Ruby, Programming II (Java), Data Structures & Algorithms, Networks & Internet Systems, Software Engineering, Data Analytics, Programming I (Python), Relational Databases & Information Systems, Operating Systems, Computer Architecture & Organisation, Web Application Development, Computational Thinking.'
      }
    ]
  }

  const other = {
    title: 'OTHER',
    list: [
      {
        name: 'Chairman of the Employee Association',
        place: 'Þjónustumiðstöð Laugardals og Háaleitis',
        date: '2015 - 2017',
        bulletpoints: [
          'Chairman of the Employee Association, where the goal was to maintain a good atmosphere among 200 employees by organizing a variety of events.',
          'Managed the Christmas parties and started the annual music video competition between departments .',
        ]
      },
      {
        name: 'PEERS Certified Trainer',
        place: 'University of California, Los Angeles',
        date: '2015',
        bulletpoints: [
          'Training designed for mental health professionals and educators who are interested in learning how to implement the PEERS program in their practice.',
          'Outpatient training program providing ecidence-based, parent-assisted social skills intervention for adolescents and young adults with Autism Spectrum Disorder.',
    ]
      }
    ]
  }


  const skills = {
    title: 'SKILLS',
    points: [
    "Good knowlwedge of the City of Reykjavik's case file application and other bases used in the service centers.",
    'Good command of information technology and ability to innovate.',
    'Experience in group work using the Agile (Scrum) ideology.',
    'Good knowledge of Microsoft Office 365 applications.',
    'Capable of adapting and learning new skills.',
    'Ambition for good user experience.',
    'Speak Icelandic and English.',
    'Good team working skills.',
    'Good eye for details.'
  ] 
  }


  return (
    <div>
      <Header name={info.name} profession={info.profession}/>
      <Profile title={profile.title} text={profile.text}/>
      <Education title={education.title} list={education.list}/>
      <Employment title={employment.title} list={employment.list}/>
      <Projects title={projects.title} list={projects.list} />
      <Languages title={languages.title} points={languages.points} />
      <Other title={other.title} list={other.list}/>
      <Skills title={skills.title} points={skills.points} />
    </div>
  )
}
      
 
ReactDOM.render(<App />, document.getElementById('root'))