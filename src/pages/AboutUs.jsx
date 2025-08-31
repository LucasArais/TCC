import { useState } from 'react'
import { Github, Linkedin, Mail, Code, Palette, Database, Lightbulb, ArrowLeft } from 'lucide-react'

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Lucas Arais de Souza',
      role: 'AI/ML Engineer',
      description: 'Engenheiro de machine learning especializado em processamento de linguagem natural. Responsável pela implementação da IA educacional.',
      avatar: '/lucas_profile.jpeg',
      skills: ['Python', 'LangFlow', 'Cloud'],
      icon: Code,
      social: {
        github: 'https://github.com/LucasArais',
        linkedin: 'https://www.linkedin.com/in/lucas-arais/',
        email: 'lucas.arais2004@gmail.com'
      }
    },
    {
      id: 2,
      name: 'Nome do Desenvolvedor 2',
      role: 'UI/UX Designer',
      description: 'Designer especializado em experiência do usuário e interfaces modernas. Responsável pelo design visual e usabilidade da plataforma.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dev2',
      skills: ['Figma', 'Design System', 'Prototipagem', 'CSS'],
      icon: Palette,
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'dev2@profai.com'
      }
    },
    {
      id: 3,
      name: 'Nome do Desenvolvedor 3',
      role: 'Backend Developer',
      description: 'Desenvolvedor backend com expertise em APIs e banco de dados. Responsável pela infraestrutura e integração com serviços de IA.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dev3',
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      icon: Database,
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'dev3@profai.com'
      }
    },
    {
      id: 4,
      name: 'Nome do Desenvolvedor 4',
      role: 'AI/ML Engineer',
      description: 'Engenheiro de machine learning especializado em processamento de linguagem natural. Responsável pela implementação da IA educacional.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dev4',
      skills: ['Python', 'TensorFlow', 'NLP', 'OpenAI API'],
      icon: Lightbulb,
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'dev4@profai.com'
      }
    }
  ]

  return (
    <div className="about-container">
      {/* Back Button */}
      <button 
        className="back-button"
        onClick={() => window.location.href = '/'}
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Quem Somos?</h1>
          <p>
            Somos estudantes do curso de Análise e Desenvolvimento de Sistemas da Fatec Ipiranga, unidos pela paixão por educação e tecnologia. Nosso propósito é democratizar o acesso ao conhecimento, utilizando a inteligência artificial como ferramenta para transformar o aprendizado e torná-lo mais acessível, inclusivo e inovador.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="team-content">
          <div className="team-header">
            <h2>Nossa Equipe</h2>
            <p>Conheça os desenvolvedores por trás do ProfAI</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => {
              const IconComponent = member.icon
              return (
                <div key={member.id} className="team-card">
                  <div className="team-card-header">
                    <div className="member-avatar">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                  </div>
                  
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                    
                    <div className="member-skills">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="team-card-footer">
                    <div className="member-social">
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                      </a>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
