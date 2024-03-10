<template>
  <div class="w-full h-full flex flex-col bg-slate-200">
    <div class="w-full hero-height hero-background flex flex-col">
      <header class="w-full h-24 flex flex-row justify-between items-center">
        <img src="../../assets/images/techlingo-logo.png" class="w-72 h-64 ml-20" />
        <button class="w-52 h-10 bg-white text-black rounded-full poppins mr-10 hidden md:block">
          Começar
        </button>
      </header>
      <div class="flex flex-row gap-x-12 justify-around items-center">
        <div class="flex-flex-col w-96 h-96">
          <div class="text-white hero-text-size quicksand-bold font-bold text-4xl">
            <p>
              Leve sua <span class="text-red-500">carreira</span> de TI para o
              <span class="text-red-500"> próximo nível</span>
            </p>
          </div>
          <div class="text-white">
            Transforme seu futuro dominando o inglês para a sua área de tecnologia com confiança e
            excelência.
          </div>
          <div class="flex flex-row justify-evenly mt-5">
            <button class="text-white rounded-full bg-red-600 font-bold px-7 py-3">Começar</button>
            <button class="text-white rounded-full bg-transparent white-border font-bold px-7 py-3">
              Saiba mais
            </button>
          </div>
        </div>
        <div class="hidden md:block">
          <img
            src="../../assets/images/tech_bro_hero.png"
            class="techbroimg rounded-tr-xl rounded-bl-xl mb-20"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="w-full hero-height flex flex-col items-center justify-center bg-slate-200">
      <div class="w-5/6 h-full">
        <div class="flex flex-row items-center justify-center py-8">
          <h3 class="quicksand-bold font-medium text-black text-3xl">
            Chegou a hora de virar o jogo
          </h3>
        </div>
        <div class="w-full h-full flex flex-col md:flex-row align-center justify-center gap-x-6">
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-center gap-x-8 gap-y-1 text-center"
          >
            <img src="../../assets/images/icon-bridge.png" alt="icone_ponte" class="w-28 h-14" />
            <h3 class="quicksand-bold font-medium text-black text-xl">Uma ponte para o sucesso</h3>
            <p class="quicksand-regular text-slate-800">
              A pandemia revolucionou o trabalho remoto.
            </p>
            <p class="quicksand-regular text-slate-800">
              Ser Tech nunca foi tão global. Vagas internacionais ao alcance de uma língua.
            </p>
            <p class="quicksand-regular text-slate-800">Construa agora essa ponte!</p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img src="../../assets/images/icon-key.png" alt="icone_chave" class="w-14 h-14" />
            <h3 class="quicksand-bold font-medium text-black text-xl">Uma chave que abre portas</h3>
            <p class="quicksand-regular text-slate-800">
              60% das vagas de TI no Brasil pedem inglês.
            </p>
            <p class="quicksand-regular text-slate-800">
              Ainda assim, só 1% dos brasileiros é fluente.
            </p>
            <p class="quicksand-regular text-slate-800">Faça parte dos 1%!</p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img
              src="../../assets/images/icon-door-open.png"
              alt="icone_porta_aberta"
              class="w-14 h-14"
            />
            <h3 class="quicksand-bold font-medium text-black text-xl">Novas oportunidades</h3>
            <p class="quicksand-regular text-slate-800">
              O inglês é a 2a habilidade mais importante no mundo Tech.
            </p>
            <p class="quicksand-regular text-slate-800">A primeira, você já tem!</p>
            <p class="quicksand-regular text-slate-800">
              Conquiste esse diferencial. Impulsione sua carreira já!
            </p>
          </div>
        </div>
        <!-- <div class="flex w-full h-28">
          <button class="text-white rounded-full bg-red-600 font-bold px-7 py-3">
            Começar agora
          </button>
        </div> -->
      </div>
    </div>
    <div class="w-full hero-height flex flex-col items-center justify-center bg-slate-200">
      <div class="w-5/6 h-full mb-6">
        <div class="flex flex-row items-center justify-center py-8">
          <h3 class="quicksand-bold font-medium text-black text-3xl">Comece a aprender agora!</h3>
        </div>
        <div class="w-full h-full flex flex-row align-center justify-center gap-x-6">
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <h3 class="quicksand-bold font-bold text-black text-2xl">Escolas tradicionais</h3>
            <div class="flex flex-col items-center justify-evenly">
              <ul>
                <li class="flex flex-row items-center">
                  <img src="../../assets/images/icon-x-red.png" class="w-5 h-5" />
                  <p class="ml-2 quicksand-medium">Cursos genéricos</p>
                </li>

                <li class="flex flex-row items-center">
                  <img src="../../assets/images/icon-x-red.png" class="w-5 h-5" />
                  <p class="ml-2 quicksand-medium">Sem suporte</p>
                </li>

                <li class="flex flex-row items-center">
                  <img src="../../assets/images/icon-x-red.png" class="w-5 h-5" />
                  <p class="ml-2 quicksand-medium">Não engaja os alunos</p>
                </li>

                <li class="flex flex-row items-center">
                  <img src="../../assets/images/icon-x-red.png" class="w-5 h-5" />
                  <p class="ml-2 quicksand-medium">Alto índice de desistência</p>
                </li>
                <li class="flex flex-row items-center">
                  <img src="../../assets/images/icon-x-red.png" class="w-5 h-5" />
                  <p class="ml-2 quicksand-medium">O sucesso é a quantidade de alunos</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img
              src="../../assets/images/logo-techlingo-lingo-color.png"
              alt="logo-techlingo-colorido"
              class="w-36 h-14"
            />
            <ul>
              <li class="flex flex-row items-center">
                <img src="../../assets/images/icon-check-green.png" class="w-5 h-5" />
                <p class="ml-2 quicksand-medium">Criado para profissionais tech</p>
              </li>
              <li class="flex flex-row items-center">
                <img src="../../assets/images/icon-check-green.png" class="w-5 h-5" />
                <p class="ml-2 quicksand-medium">Lives semanais e plantão de dúvidas</p>
              </li>
              <li class="flex flex-row items-center">
                <img src="../../assets/images/icon-check-green.png" class="w-5 h-5" />
                <p class="ml-2 quicksand-medium">Canal dedicado a alunos no discord</p>
              </li>
              <li class="flex flex-row items-center">
                <img src="../../assets/images/icon-check-green.png" class="w-5 h-5" />
                <p class="ml-2 quicksand-medium">O nosso sucesso é o SEU sucesso</p>
              </li>
              <li class="flex flex-row items-center">
                <img src="../../assets/images/icon-check-green.png" class="w-5 h-5" />
                <p class="ml-2 quicksand-medium">Queremos que você FALE inglês</p>
              </li>
            </ul>
          </div>
          <!-- <div class="flex flex-row justify-evenly mt-5">
            <button class="text-white rounded-full bg-red-600 font-bold px-7 py-3">Começar</button>
          </div> -->
        </div>
      </div>
    </div>

    <div class="w-full hero-height hero-background flex flex-col items-center py-8">
      <div class="w-5/6 h-full">
        <div class="flex flex-row items-center justify-center py-8">
          <h3 class="quicksand-bold text-white text-3xl">Confira os resultados</h3>
        </div>
        <div class="w-full h-full flex flex-col md:flex-row align-center justify-center gap-x-6">
          <div
            class="student-card rounded-md bg-white flex flex-col items-center justify-around gap-x-8 gap-y-1 text-center"
          >
            <img
              src="../../assets/images/aluno-victor-2.jpeg"
              alt="icone_ponte"
              class="w-28 h-28 rounded-full"
            />
            <p class="quicksand-regular text-slate-800">
              "Nada melhor do que uma foto no lugar que
              <strong> você me proporcionou com as aulas</strong>!"
            </p>

            <h3 class="quicksand-bold font-medium text-black text-xl">
              Victor Machado - Analista de Observabilidade
            </h3>
          </div>
          <div
            class="student-card rounded-md bg-white flex flex-col items-center justify-center gap-x-8 gap-y-1 text-center"
          >
            <img
              src="../../assets/images/aluno-carol.jpeg"
              alt="icone_ponte"
              class="w-32 h-32 rounded-full mb-6"
            />
            <p class="quicksand-regular text-slate-800">
              " Comecei com o Dan e só falava algumas frases em inglês.
            </p>
            <p class="quicksand-regular text-slate-800">
              Eu não gostava, me sentia desconfortável. <strong>Em pouco tempo me soltei</strong>!
            </p>
            <p class="quicksand-regular text-slate-800">
              Ano passado, fui entrevistada para uma empresa <strong>americana</strong> e
              <strong>passei</strong>!
            </p>
            <p class="quicksand-regular text-slate-800">Thank you Dan! "</p>
            <h3 class="quicksand-bold font-medium text-black text-xl">
              Carol Simões - Hunter de Observabilidade
            </h3>
          </div>
          <div
            class="student-card rounded-md bg-white flex flex-col items-center justify-center gap-x-8 gap-y-1 text-center"
          >
            <img
              src="../../assets/images/aluno-eduardo.jpeg"
              alt="icone_ponte"
              class="w-32 h-32 rounded-full"
            />
            <p class="quicksand-regular text-slate-800">
              " O programa de intercâmbio da minha empresa exigia que eu passasse em uma entrevista,
              <strong>em inglês</strong>.
            </p>
            <p>
              O Dan me ajudou, praticamente do zero, a ser aprovado na entrevista em menos de 2
              anos. E ao longo do meu 1 ano fora do país de forma online.
            </p>
            <p>
              Obrigado Dan, agora tenho uma <strong>experiência internacional</strong> no meu
              currículo!
            </p>
            <p>Thank you Dan! "</p>
            <h3 class="quicksand-bold font-medium text-black text-xl">
              Eduardo Uchima - Especialista de Controladoria
            </h3>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-evenly mt-5">
        <button class="text-white rounded-full bg-red-600 font-bold px-7 py-3">
          Começar agora
        </button>
      </div>
    </div>
    <div class="w-full hero-height bg-slate-200 flex items-center justify-center py-6">
      <div class="w-5/6 h-full flex flex-col bg-white rounded-md">
        <div class="w-full h-full flex flex-row">
          <img
            alt="teacher-dan-art"
            src="../../assets/images/teacher-dan.png"
            class="teacher-dan"
          />
          <div class="flex flex-col items-around mt-16">
            <div class="flex flex-row w-full justify-start">
              <h3 class="quicksand-bold leading-10 text-3xl gap-y-6">O Teacher Dan</h3>
            </div>
            <div class="flex flex-col">
              <p class="poppins-regular text-slate-400 text-left text-xl mt-12">
                Desde 2011 impulsionando carreiras, o Teacher Dan é tradutor, intérprete e mestre em
                Linguística Aplicada pela PUCSP.
              </p>
              <p class="poppins-regular text-slate-400 text-left text-xl mt-6">
                "Já ajudei pessoas de diversas áreas a atingirem seus objetivos."
              </p>
              <p class="poppins-regular text-slate-400 text-left text-xl mt-6">
                "Vou lhe ensinar como chegar lá também, conte comigo!"
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-evenly">
          <button class="text-white rounded-full bg-red-600 font-bold px-7 py-3 mb-6">
            Começar agora
          </button>
        </div>
      </div>
    </div>
    <div class="w-full hero-height bg-slate-200 flex flex-col items-center justify-center">
      <div class="w-5/6 h-full mb-6 flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <p class="quicksand-bold text-black text-3xl">Dúvidas?</p>
        </div>
        <div class="flex flex-row justify-evenly">
          <Accordion :activeIndex="0">
            <AccordionTab header="Para quem é o curso?">
              <p class="m-0">
                O inglês para o mundo Tech é para profissionais de tecnologia ou envolvidos com
                tecnologia e querem aprender inglês para usar no trabalho ou até mesmo conseguir um
                trabalho na área que exige inglês. O curso divulgado nessa página é direcionado a
                pessoas que ainda não(negrito) falam inglês e desejam SAIR DO ZERO. O Programa
                completo da TechLingo - inglês para o mundo Tech leva você Do Zero à Entrevista. Se
                você deseja fazer parte do programa, fique ligado nas novidades aqui no site e nas
                nossas redes sociais!
              </p>
            </AccordionTab>
            <AccordionTab header="E se eu já falo inglês?">
              <p class="m-0">
                Se você já fala algum inglês e não tem certeza se o conteúdo Do Zero à Entrevista é
                para você, fale conosco no Whatsapp para explorar outros cursos da TechLingo
                clicando
                <a href="">AQUI</a>!
              </p>
            </AccordionTab>
            <AccordionTab header="Eu vou ter que fazer prova?">
              <p class="m-0">
                O nosso método não trabalha com provas ou testes. Acreditamos que o desempenho do
                aluno é a maior prova de que ele é capaz de falar inglês.
              </p>
            </AccordionTab>
            <AccordionTab header="Vocês emitem certificado?">
              <p class="m-0">
                Sim! Para qualquer curso concluído na TechLingo você terá um certificado de
                conclusão, incluindo o número de horas (se necessário).
              </p>
            </AccordionTab>
            <AccordionTab header="O certificado serve como proeficiência?">
              <p class="m-0">
                Não. Certificados de proeficiência são específicos e emitidos por Universidades como
                Cambridge e Oxford. Esses certificados são emitidos exclusivamente por instituições
                especializadas que oferecem os testes oficiais das universidades. A TechLingo é um
                curso livre de idiomas, não uma instituição de testes de proeficiência.
              </p>
            </AccordionTab>
            <AccordionTab header="Tem garantia? E se eu não curtir">
              <p class="m-0">
                Você tem 7 dias, a partir da data de compra, para desistir do seu curso e obter
                reembolso total do valor, caso não tenha curtido. Mas se você não curtiu, eu te
                desafio a clicar AQUI e trocar uma ideia diretamente comigo! Eu vou tentar entender
                qual o seu problema e te ajudar. =)
              </p>
            </AccordionTab>
          </Accordion>
          <Accordion :activeIndex="0">
            <AccordionTab header="O que é o plantão de dúvidas?">
              <p class="m-0">
                O plantão de dúvidas é um canal exclusivo no discord para os alunos onde você pode
                fazer perguntas e expor suas dificuldades com o inglês ou no curso.
              </p>
            </AccordionTab>
            <AccordionTab header="E se eu já falo inglêsCmo eu acesso o canal do discord?">
              <p class="m-0">
                O Discord é um aplicativo gratuito (Windows | Mac | Linux | Android | iOS) de
                comunicação (voz, vídeo e texto) onde a comunidade dos alunos da TechLingo podem
                socializar, tirar dúvidas no plantão e receber informações sobre novidades, lives e
                conteúdos do curso.
              </p>
            </AccordionTab>
            <AccordionTab header="Tem data pra terminar o curso??">
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus.Não. Como as Lives ficarão gravadas,
                você pode acessar o curso em qualquer horário do dia, por 3 meses após a data de
                compra. Entretanto, alguns módulos só serão liberados de acordo com a agenda das
                lives. Não se preocupe! Seu curso já foi pago integralmente e você não precisará
                pagar nada a mais por isso. Além disso, você terá 6 meses de acesso ao conteúdo do
                curso.
              </p>
            </AccordionTab>
            <AccordionTab header="Qual o tamanho do curso?">
              <p class="m-0">
                O módulo inicial, inglês do zero, tem duração de 4 semanas. Após isso, os alunos
                serão direcionados para os módulos introdutórios de business English, onde vão
                desenvolver as habilidades iniciais para se preparar para entrevista. O valor pago
                pelo curso divulgado nessa página é referente ao conteúdo desse curso, apenas.
              </p>
            </AccordionTab>
            <AccordionTab header="E depois que eu concluir?">
              <p class="m-0">
                Ao concluir, você receberá um certificado de conclusão da TechLingo, afirmando que
                você SAIU DO ZERO no inglês e que é capaz de se apresentar, falar dos seus colegas
                de trabalho e seu cargo na empresa. Se desejar continuar conosco, será direcionado
                às próximas etapas do programa Do Zero à Entrevista.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { defineComponent } from 'vue'

defineComponent({
  name: 'LandingPage'
})
</script>
<style scoped>
.p-accordion .p-accordion-header {
  @apply text-indigo-700;
  @apply font-bold;
  @apply leading-5;
}
.white-border {
  border-color: white;
}
.hero-background {
  background: linear-gradient(
    90deg,
    rgba(60, 7, 19, 1) 7%,
    rgba(51, 10, 80, 1) 57%,
    rgba(7, 5, 44, 1) 82%
  );
}
.hero-height {
  height: 745px;
}
.techbroimg {
  width: 661px;
  height: 440px;
}
.icon-size {
  height: 56px;
  width: 56px;
}
.icon-bridge {
  height: 56px;
  width: 115px;
}
.student-card {
  width: 302px;
  height: 508px;
}
.teacher-dan {
  width: 408px;
  height: 456px;
}
</style>
