import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Award, Mic, Lightbulb, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { FaMedium, FaGithub } from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium text-gray-900">Sumithra Maran</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'ai-experiments', label: 'AI Experiments' },
                { id: 'speaking', label: 'Speaking' },
                { id: 'ip', label: 'IP Portfolio' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-colors hover:text-indigo-600 ${
                    activeSection === id ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <div className="flex flex-col items-center text-center mt-12">
  {/* Profile Photo */}
  <img
    src="/photo_SM.jpg"
    alt="Sumithra Maran"
    className="w-48 h-48 rounded-full object-cover border-4 border-500 mb-4"
  />

  
</div>

  <h2 className="text-2xl font-semibold text-indigo-600 mt-2">
    Product Leader
  </h2>

  
            
            <div className="w-full max-w-xl mx-auto mt-4 px-4">
  <div className="flex items-center justify-center">
    {/* Visa */}
    <div className="flex-1 flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-indigo-600" />
      <span className="mt-2 text-xs text-gray-700">Visa</span>
    </div>

    {/* line */}
    <div className="flex-1 h-px bg-gray-300 mx-2" />

    {/* Microsoft */}
    <div className="flex-1 flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-indigo-600" />
      <span className="mt-2 text-xs text-gray-700">Microsoft</span>
    </div>

    {/* line */}
    <div className="flex-1 h-px bg-gray-300 mx-2" />

    {/* OpenAI */}
    <div className="flex-1 flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-indigo-600" />
      <span className="mt-2 text-xs text-gray-700">Member of OpenAI</span>
    </div>
  </div>
</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <Lightbulb className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">AI Experiments</h3>
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-base font-medium">
                5+ experiments
              </div>
              <p className="text-gray-600 text-sm">Creating AI solutions to amplify the impact of Product Managers</p>
            </div>
            <div className="text-center p-6">
              <Mic className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Thought Leadership</h3>
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-base font-medium">
                5+ events
              </div>
              <p className="text-gray-600 text-sm">Sharing insights at the intersection of product management, AI, and business transformation </p>

            </div>
            <div className="text-center p-6">
              <Award className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">IP Innovation</h3>
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-base font-medium">
                8+ Trademarks
              </div>
              <p className="text-gray-600 text-sm">Inventing protected intellectual property that advances the field</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('ai-experiments')}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Explore My Work
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Experiments Section */}
      <section id="ai-experiments" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">AI Experiments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative projects exploring the capabilities and applications of artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {[
              
              {
                title: "Onboarding Agent for new product managers",
                description: "Personalized 7-day onboarding plan powered by AI insights from company docs, org charts, and contextual technical sources.",
                tech: ["Rule-based LLMs", "Token parsing", "Agentic AI"],
                status: "Production",
                links: {
    medium: "https://medium.com/@sumithramaran/reimagining-pm-onboarding-with-agentic-ai-3ad2993bdd7f",
    github: "https://github.com/SumithraMaran/ramp-up-agent"
  }
                 
              },
              {
                title: "Vibe code experimentation on real world use cases",
                description: "Rapid vibe coding to prototype, code, and experiment with an open-source AI feature — cutting design cycles and accelerating growth insights.",
                tech: ["TBD", "TBD", "TBD"],
                status: "Research",
                links: {
    medium: "https://medium.com/@sumithramaran",
    github: "https://github.com/SumithraMaran"
  }
              },
              {
                title: "Graph some AI for structured data reasoning",
                description: "Exploring how Graph Some AI can be applied to real-world AI use cases. Learning its potential for structuring data, reasoning, and experimentation.",
                tech: ["TBD", "TBD", "TBD"],
                status: "Research",
                links: {
    medium: "https://medium.com/@sumithramaran",
    github: "https://github.com/SumithraMaran"
  }
              },
              {
                title: "PM Task Automation with n8n + AI agents",
                description: "Automating product management workflows with n8n + AI agents — from status updates to stakeholder mapping — to cut manual effort and accelerate execution.",
                tech: ["TBD", "TBD", "TBD"],
                status: "Research",
                links: {
    medium: "https://medium.com/@sumithramaran",
    github: "https://github.com/SumithraMaran"
  }
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Production' ? 'bg-green-100 text-green-700' :
                    project.status === 'Research' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
               <div className="flex flex-wrap gap-2">
  {/* tech pills */}
  {project.tech.map((tech, techIndex) => (
    <span
      key={techIndex}
      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
    >
      {tech}
    </span>
  ))}

{/* Footer links row */}
<div className="flex justify-between items-center w-full mt-3">
  {/* Medium pill on the left */}
  {project.links?.medium && (
    <a
      href={project.links.medium}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
    >
      <FaMedium size={14} />
      Medium
    </a>
  )}

  {/* GitHub pill on the right */}
  {project.links?.github && (
    <a
      href={project.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
    >
      <FaGithub size={14} />
      GitHub
    </a>
  )}
</div>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section id="speaking" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Speaking Engagements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sharing insights and expertise at conferences, workshops, and industry events
            </p>
          </div>

          <div className="space-y-8">
            {[
              
              {
                event: "Eventcombo Product Conference 2022",
                title: "Metaverse: A deep dive into the ecosystem",
                location: "New York, NY",
                date: "September 2022",
                type: "Keynote Speaker",
                audience: "300+ attendees",
videoUrl: "https://www.youtube.com/watch?v=6I6WINsD2Oo",
                thumbnail: "/SpeakingEngagement2.png", 
                 showVideo: true,
                  showHover: true
                
              },
              {
                event: "Product School Conference 2022",
                title: "A different route to break into Product Management",
                location: "San Francisco, CA",
                date: "December 2022",
                type: "Guest Speaker",
                audience: "100+ attendees",
                videoUrl: "https://www.youtube.com/watch?v=ni5raq9r078",
                thumbnail: "/SpeakingEngagement1.png", 
                 showVideo: true,
                  showHover: true 
              },
              {
                event: "Humans of Product - Podcast Guest",
                title: "Software Engineer to Product Manager",
                location: "Remote",
                date: "Feb 2023",
                type: "Podcast Guest",
                audience: "100+ listeners",
                videoUrl: "https://www.youtube.com/watch?v=azPCN9kGsb0&t=248s",
                thumbnail: "/Podcast2.png" ,
                 showVideo: true,
                 showHover: true
              },
              {
                event: "Sugat Nayak Podcast Guest",
                title: "PM certification worth it in 2024?",
                location: "Remote",
                date: "April 2024",
                type: "Podcast Guest",
                audience: "500+ listeners",
                videoUrl: "https://www.youtube.com/watch?v=azPCN9kGsb0&t=248s",
                thumbnail: "/Podcast1.png",
                 showVideo: true,
                 showHover: true
              },
               {
                event: "The Burning Heroes Africa Product Managers Contest",
                title: "PM Hackathon Judge",
                location: "Remote",
                date: "April 2025",
                type: "Hackathon Judge",
                audience: "200+ Participants",

                thumbnail: "/HackathonJudge.png",
                showVideo: false,
                showHover: false
              },
              
            ].map((engagement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Video Thumbnail */}
                  <div className="md:w-64 flex-shrink-0">
                    {engagement.showHover ? (
    // With hover (default case)
    <a
      href={engagement.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >
      <img
        src={engagement.thumbnail}
        alt={`${engagement.title} thumbnail`}
        className="w-full h-36 object-contain rounded-lg bg-gray-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg grid place-items-center">
        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  ) : (
    // Without hover (for PM Hackathon Judge)
    <img
      src={engagement.thumbnail}
      alt={`${engagement.title} thumbnail`}
      className="w-full h-36 object-contain rounded-lg bg-gray-50"
    />
  )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-medium text-gray-900">{engagement.title}</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded flex-shrink-0 ml-2">
                        {engagement.type}
                      </span>
                    </div>
                    <div className="text-indigo-600 font-medium text-sm mb-2">{engagement.event}</div>
                    <div className="text-gray-600 text-sm mb-3">
                      {engagement.location} • {engagement.date} • {engagement.audience}
                    </div>
                    {engagement.showVideo && (
                    <a 
                      href={engagement.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm transition-colors"
                    >
                      Watch Video
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Portfolio Section */}
      <section id="ip" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Intellectual Property Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Patents and trademarks representing innovative solutions and protected intellectual property
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
        
        <div>
             <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-indigo-600" />
                Trademarks
              </h3> 
              <div className="space-y-4">
                {[
                  {
                    title: "Real time payments solution for APAC merchants",
                    number: "TM 6,789,012",
                    status: "Registered",
                    date: "2018",
                    category: "Software"
                  },
                  {
                    title: "Method and system to access transaction data",
                    number: "TM 6,789,012",
                    status: "Registered",
                    date: "2018",
                    category: "Software"
                  },
                  {
                    title: "Predictive analytics platform for financial services",
                    number: "TM 6,543,210",
                    status: "Registered",
                    date: "2019",
                    category: "AI Platform"
                  }


                ].map((trademark, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">{trademark.title}</h4>
                    <div className="text-sm text-gray-600 mb-1">{trademark.number}</div>
                    <div className="text-xs text-gray-500 mb-2">{trademark.category}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{trademark.date}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        trademark.status === 'Registered' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {trademark.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div> 
            </div>
            {/* Trademarks */}
            <div>
             <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center invisible">
                <Award className="w-5 h-5 mr-2 text-indigo-600" />
                Trademarks
              </h3> 
              <div className="space-y-4">
                {[
                  
                  {
                    title: "Collibra Process Intelligence System",
                    number: "TM Application 97/234,567", 
                    status: "Registered",
                    date: "2019",
                    category: "Analytics"
                  },
                  {
                    title: "VPredictive AI for transaction risk management",
                    number: "TM 5,678,901",
                    status: "Registered",
                    date: "2021",
                    category: "AI Platform"
                  },  
                  {
                    title: "Visa AI Insights for fraud detection",
                    number: "TM 5,432,109",
                    status: "Registered",
                    date: "2021",
                    category: "Security platform"
                  }


                ].map((trademark, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-2">{trademark.title}</h4>
                    <div className="text-sm text-gray-600 mb-1">{trademark.number}</div>
                    <div className="text-xs text-gray-500 mb-2">{trademark.category}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{trademark.date}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        trademark.status === 'Registered' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {trademark.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div> 
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in collaboration, speaking opportunities, or discussing innovative AI projects?
          </p>

          <div className="flex justify-center space-x-6">
            <a href="mailto:sumithramaran1@gmail.com" 
               className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/sumithra-maran/" 
               className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/SumithraMaran" 
               className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2025 Sumithra Maran. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;