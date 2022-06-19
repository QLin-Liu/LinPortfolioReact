import React, { Component } from 'react'
import pdf from "./resume.pdf"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">About Me</h1>
        <p className="lead">This is Yilin Liu. Looking to obtain a position as a Software Developer to learn, utilize skills to the maximum, and find herself back in her career.</p>
        <hr className="my-4"></hr>
        
        <ul>
          <h4>Technical Skills</h4>
          <li> Participated	in	daily	maintenance, codes migration,	and	"real time"	feature	implementation	in the iQmetrix sputnik project which	involves ASP.NET MVC	development,	React,	JavaScript,	relational	database,	HTML, CSS/bootstrap,	and	DevOps; e.g.<a href='https://www.clearwest.ca/'>clearwest</a></li>
          <li> Worked on a config service project (function app) . Created the "updateProfile" function and all unit tests for this project, build an understanding of .Net core and Azure tools;</li>
          <li> Proficient	with	git	version	control.	Good	in	git	commands	and	git-flow.	 Completed over 100 pull requests during coop, reviewed/commented on other PRs, worked on the Sputnik project weekly RC release and production release;</li>
          <li> Experience	in	using	Postman	for	API	auto	testing.	Created	a	collection	of	updateProNile	function testing	files	for	over	50	clients	and	are	tested	both	in	happy	path	and	bad	path;</li>
          <li> Developed	skills	in	working	with	SQL	Server;	Practiced	with	many	server	management	tasks	with	Windows	Server	2016;	</li>
          <li> Created a few school projects using	Java,	Python,	android	application	development,	and	networking;	</li>
          <li> Equipped	with	a	good	working	knowledge	of	object-oriented	modelling	and	designed	several	analysis	diagrams	(design	diagram,	sequence	diagram,	communication	diagram,	etc.)	with	industry-standard	processes;	</li>
          <li> Strong	experience	in	Software	Development	lifecycle	from	providing	input	during	sprint	planning,	project	breakdown,	user	story	estimation,	coding,	code-reviews,	builds,	and	production	release</li>
        </ul>
        <ul>
          <h4>Interpersonal Skills</h4>
          <li> Participated	and	ran	stand-ups	many	times	during	working	at	IQmetrix.	Delivered	a	presentation	about	how	to	use	and	implement	feature	flags	with	.net	core;	</li>
          <li> Collaborate	with	people	from	other	circles	like	DBA,	change	management	team,	hub	app	team	and	so	many	other	teams	frequently	to	get	our	work	done	on	time;	Provide	information	and	assistance	to	people	that	come	to	our	public	slack	channel	for	help;</li>
          <li> Performed	good	customer	service	during	working	at	Bank	of	China.	Awarded	with	the	excellent	individual	in	2017;	</li>        
        </ul>
        
        {/* direact to my resume.pdf */}
        <p className="lead">
          <a className="btn btn-primary btn-lg" href={pdf} target="_blank" rel= "noreferrer" role="button">Learn more about me</a>
        </p>
      </div>   
    )
  }
}
