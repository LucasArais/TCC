import { useState } from 'react'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({})

  const faqItems = [
    {
      question: "Como funciona o ProfAI?",
      answer: "O ProfAI é uma plataforma educacional que conecta professores e alunos através de inteligência artificial. Professores compartilham conteúdo e alunos podem interagir e pedir ajuda da IA para entender melhor os materiais."
    },
    {
      question: "Quanto custa para usar a plataforma?",
      answer: "Oferecemos um plano estudantil por apenas R$ 15/mês, que inclui acesso completo ao feed educativo, assistente IA ilimitado, interação com professores e análise de progresso personalizada."
    },
    {
      question: "Como a IA pode me ajudar nos estudos?",
      answer: "Nossa IA educacional pode explicar conceitos complexos, responder dúvidas sobre conteúdos postados pelos professores, sugerir materiais complementares e adaptar explicações ao seu nível de conhecimento."
    },
    {
      question: "Professores podem usar a plataforma gratuitamente?",
      answer: "Sim! Professores têm acesso gratuito para compartilhar conteúdo, interagir com alunos e acompanhar o progresso da turma. A monetização vem dos planos estudantis."
    },
    {
      question: "Como faço para me cadastrar?",
      answer: "Clique em 'Começar Agora' na página inicial, escolha se você é aluno ou professor, preencha seus dados e crie uma senha. O processo é rápido e intuitivo!"
    },
    {
      question: "A plataforma funciona em dispositivos móveis?",
      answer: "Sim! O ProfAI é totalmente responsivo e funciona perfeitamente em smartphones, tablets e computadores, permitindo estudar e ensinar de qualquer lugar."
    },
    {
      question: "Como os professores acompanham o progresso dos alunos?",
      answer: "Oferecemos análises detalhadas de desempenho, incluindo tempo de estudo, tópicos de maior dificuldade, interações com a IA e progresso em diferentes matérias."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Seu acesso continuará até o final do período já pago."
    },
    {
      question: "A IA substitui os professores?",
      answer: "Não! A IA é uma ferramenta complementar que potencializa o ensino. Os professores continuam sendo essenciais para orientar, motivar e criar conexões humanas no aprendizado."
    },
    {
      question: "Como garantem a segurança dos meus dados?",
      answer: "Utilizamos criptografia de ponta e seguimos as melhores práticas de segurança. Seus dados pessoais e acadêmicos são protegidos conforme a LGPD e nunca são compartilhados sem autorização."
    },
    {
      question: "Existe um período de teste gratuito?",
      answer: "Sim! Oferecemos 7 dias gratuitos para novos usuários testarem todas as funcionalidades da plataforma antes de decidir pela assinatura."
    },
    {
      question: "Quantos professores posso seguir?",
      answer: "Não há limite! Você pode seguir quantos professores quiser e receber conteúdo de todas as matérias que te interessam no seu feed personalizado."
    },
    {
      question: "A IA funciona em português?",
      answer: "Sim! Nossa IA foi treinada especificamente para o português brasileiro e entende gírias, expressões regionais e contextos culturais do Brasil."
    },
    {
      question: "Posso usar o ProfAI offline?",
      answer: "Algumas funcionalidades básicas funcionam offline, como visualizar conteúdos já carregados, mas para interagir com a IA e receber novos conteúdos é necessária conexão com internet."
    },
    {
      question: "Como funciona o sistema de notificações?",
      answer: "Você recebe notificações quando professores postam novo conteúdo, quando alguém responde seus comentários e lembretes personalizados de estudo baseados na IA."
    },
    {
      question: "Posso compartilhar conteúdo com outros alunos?",
      answer: "Sim! Você pode compartilhar posts interessantes, criar grupos de estudo e colaborar com colegas em projetos através da plataforma."
    },
    {
      question: "A plataforma tem suporte para pessoas com deficiência?",
      answer: "Sim! Seguimos padrões de acessibilidade WCAG, com suporte a leitores de tela, navegação por teclado, alto contraste e legendas em vídeos."
    },
    {
      question: "Como funciona a busca de conteúdo?",
      answer: "Nossa busca inteligente usa IA para encontrar conteúdos relevantes mesmo com palavras-chave aproximadas, sinônimos e contexto da sua área de estudo."
    },
    {
      question: "Posso baixar conteúdos para estudar depois?",
      answer: "Sim! Você pode salvar posts, criar listas de favoritos e baixar materiais em PDF para estudar offline quando necessário."
    },
    {
      question: "A IA aprende com minhas dúvidas?",
      answer: "Sim! A IA personaliza as explicações baseada no seu histórico de dúvidas, nível de conhecimento e estilo de aprendizagem preferido."
    },
    {
      question: "Existe limite de perguntas para a IA?",
      answer: "No plano estudantil não há limite! Você pode fazer quantas perguntas quiser para a IA durante todo o mês."
    },
    {
      question: "Como reportar conteúdo inadequado?",
      answer: "Cada post tem um botão de denúncia. Nossa equipe de moderação analisa rapidamente e toma as medidas necessárias para manter um ambiente educativo saudável."
    },
    {
      question: "Posso conectar com outros estudantes da minha área?",
      answer: "Sim! A plataforma sugere conexões com estudantes de interesses similares e permite participar de comunidades temáticas por área de conhecimento."
    },
    {
      question: "A plataforma oferece certificados?",
      answer: "Oferecemos certificados de participação e conclusão de trilhas de aprendizado, reconhecidos por diversas instituições parceiras."
    },
    {
      question: "Como funciona o sistema de gamificação?",
      answer: "Você ganha pontos por participação, conquistas por metas de estudo e badges por diferentes atividades, tornando o aprendizado mais engajante e divertido."
    },
    {
      question: "Posso sugerir melhorias para a plataforma?",
      answer: "Claro! Temos um canal dedicado para sugestões e feedback dos usuários. Muitas funcionalidades foram implementadas baseadas em sugestões da comunidade."
    },
    {
      question: "A plataforma funciona para ensino técnico e superior?",
      answer: "Sim! Atendemos desde ensino fundamental até pós-graduação, incluindo cursos técnicos, graduação, especialização e áreas profissionalizantes."
    },
    {
      question: "Como funciona a integração com outras ferramentas?",
      answer: "Integramos com Google Classroom, Microsoft Teams, Moodle e outras plataformas educacionais para sincronizar conteúdos e facilitar o fluxo de trabalho."
    },
    {
      question: "Existe suporte técnico disponível?",
      answer: "Sim! Oferecemos suporte via chat, email e vídeo chamada de segunda a sexta das 8h às 18h, com tempo médio de resposta de 2 horas."
    },
    {
      question: "Posso usar a plataforma para ensinar idiomas?",
      answer: "Perfeitamente! A plataforma é ideal para professores de idiomas, com recursos específicos como pronúncia assistida por IA e exercícios interativos de conversação."
    }
  ]

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="faq-container">
      {/* Back Button */}
      <button 
        className="back-button"
        onClick={() => window.location.href = '/'}
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* FAQ Header */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Perguntas Frequentes</h1>
          <p>
            Encontre respostas para as dúvidas mais comuns sobre o ProfAI. 
            Se não encontrar o que procura, entre em contato conosco!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-accordion-wrapper">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-accordion-item">
              <button 
                className="faq-question"
                onClick={() => toggleExpanded(index)}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
                  {expandedItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div className={`faq-answer ${expandedItems[index] ? 'expanded' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQ
