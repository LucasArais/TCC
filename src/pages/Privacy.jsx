import { ArrowLeft } from 'lucide-react'

const Privacy = () => {
  return (
    <div className="legal-container">
      {/* Back Button */}
      <button 
        className="back-button"
        onClick={() => window.location.href = '/'}
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* Privacy Header */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Política de Privacidade</h1>
          <p>
            Última atualização: 30 de agosto de 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="legal-content">
        <div className="legal-text">
          <h2>1. Informações que Coletamos</h2>
          <p>
            O ProfAI coleta informações que você nos fornece diretamente, como quando você cria uma conta, 
            preenche seu perfil, publica conteúdo ou interage com nossa plataforma. Isso inclui:
          </p>
          <ul>
            <li>Nome completo e informações de contato</li>
            <li>Informações acadêmicas (instituição, área de estudo)</li>
            <li>Conteúdo que você publica ou compartilha</li>
            <li>Interações com outros usuários e com a IA</li>
            <li>Preferências e configurações da conta</li>
          </ul>

          <h2>2. Como Usamos suas Informações</h2>
          <p>
            Utilizamos suas informações para:
          </p>
          <ul>
            <li>Fornecer e melhorar nossos serviços educacionais</li>
            <li>Personalizar sua experiência de aprendizado</li>
            <li>Facilitar conexões entre professores e alunos</li>
            <li>Treinar e aprimorar nossa inteligência artificial</li>
            <li>Enviar notificações relevantes sobre atividades na plataforma</li>
            <li>Garantir a segurança e prevenir fraudes</li>
          </ul>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. 
            Podemos compartilhar informações apenas nas seguintes situações:
          </p>
          <ul>
            <li>Com seu consentimento explícito</li>
            <li>Para cumprir obrigações legais</li>
            <li>Para proteger nossos direitos e segurança</li>
            <li>Com prestadores de serviços que nos ajudam a operar a plataforma</li>
          </ul>

          <h2>4. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
          </p>
          <ul>
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Auditorias regulares de segurança</li>
          </ul>

          <h2>5. Seus Direitos</h2>
          <p>
            De acordo com a LGPD, você tem os seguintes direitos:
          </p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados incompletos ou incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar seu consentimento</li>
            <li>Solicitar a portabilidade de seus dados</li>
          </ul>

          <h2>6. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir 
            obrigações legais. Quando você exclui sua conta, removemos suas informações pessoais, 
            exceto quando exigido por lei.
          </p>

          <h2>7. Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso 
            da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies 
            nas configurações do seu navegador.
          </p>

          <h2>8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
            através da plataforma ou por email. O uso continuado da plataforma após as alterações 
            constitui aceitação da nova política.
          </p>

          <h2>9. Contato</h2>
          <p>
            Para dúvidas sobre esta política ou para exercer seus direitos, entre em contato conosco:
          </p>
          <ul>
            <li>Email: lucas.arais2004@gmail.com</li>
            <li>Endereço: Fatec Ipiranga - São Paulo, SP</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Privacy
