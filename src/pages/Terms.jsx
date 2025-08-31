import { ArrowLeft } from 'lucide-react'

const Terms = () => {
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

      {/* Terms Header */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Termos de Uso</h1>
          <p>
            Última atualização: 30 de agosto de 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="legal-content">
        <div className="legal-text">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o ProfAI, você concorda em cumprir estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deve usar nossa plataforma.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            O ProfAI é uma plataforma educacional que conecta professores e alunos através de 
            inteligência artificial, oferecendo:
          </p>
          <ul>
            <li>Feed social educativo para compartilhamento de conteúdo</li>
            <li>Assistente de IA para auxílio nos estudos</li>
            <li>Ferramentas de análise de desempenho</li>
            <li>Comunidade educacional interativa</li>
          </ul>

          <h2>3. Elegibilidade e Cadastro</h2>
          <p>
            Para usar o ProfAI, você deve:
          </p>
          <ul>
            <li>Ter pelo menos 13 anos de idade</li>
            <li>Fornecer informações precisas e atualizadas</li>
            <li>Manter a segurança de sua conta e senha</li>
            <li>Ser responsável por todas as atividades em sua conta</li>
          </ul>

          <h2>4. Conduta do Usuário</h2>
          <p>
            Você concorda em NÃO:
          </p>
          <ul>
            <li>Publicar conteúdo ofensivo, discriminatório ou inadequado</li>
            <li>Violar direitos autorais ou propriedade intelectual</li>
            <li>Usar a plataforma para fins comerciais não autorizados</li>
            <li>Tentar hackear ou comprometer a segurança da plataforma</li>
            <li>Criar contas falsas ou se passar por outra pessoa</li>
            <li>Enviar spam ou conteúdo não solicitado</li>
          </ul>

          <h2>5. Conteúdo do Usuário</h2>
          <p>
            Você mantém os direitos sobre o conteúdo que publica, mas concede ao ProfAI 
            uma licença para usar, exibir e distribuir esse conteúdo na plataforma. 
            Você é responsável por garantir que possui os direitos necessários sobre 
            todo conteúdo que compartilha.
          </p>

          <h2>6. Propriedade Intelectual</h2>
          <p>
            O ProfAI e todos os seus recursos (incluindo IA, design, código e marca) 
            são propriedade exclusiva nossa ou de nossos licenciadores. Você não pode 
            copiar, modificar ou distribuir nosso conteúdo sem autorização.
          </p>

          <h2>7. Pagamentos e Assinaturas</h2>
          <p>
            Para o plano estudantil:
          </p>
          <ul>
            <li>O valor é de R$ 15/mês, cobrado mensalmente</li>
            <li>Oferecemos 7 dias de teste gratuito</li>
            <li>Você pode cancelar a qualquer momento</li>
            <li>Não há reembolso para períodos já utilizados</li>
            <li>Preços podem ser alterados com aviso prévio de 30 dias</li>
          </ul>

          <h2>8. Suspensão e Encerramento</h2>
          <p>
            Podemos suspender ou encerrar sua conta se você:
          </p>
          <ul>
            <li>Violar estes Termos de Uso</li>
            <li>Usar a plataforma de forma inadequada</li>
            <li>Não pagar as taxas devidas</li>
            <li>Representar risco à segurança ou outros usuários</li>
          </ul>

          <h2>9. Limitação de Responsabilidade</h2>
          <p>
            O ProfAI é fornecido "como está". Não garantimos que o serviço será 
            ininterrupto ou livre de erros. Nossa responsabilidade é limitada ao 
            valor pago por você nos últimos 12 meses.
          </p>

          <h2>10. Modificações dos Termos</h2>
          <p>
            Podemos modificar estes termos a qualquer momento. Mudanças significativas 
            serão comunicadas com 30 dias de antecedência. O uso continuado da plataforma 
            após as alterações constitui aceitação dos novos termos.
          </p>

          <h2>11. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
            resolvida nos tribunais de São Paulo, SP.
          </p>

          <h2>12. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
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

export default Terms
