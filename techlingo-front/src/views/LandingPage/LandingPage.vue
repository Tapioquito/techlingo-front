<template>
  <div class="w-full h-full flex flex-col bg-slate-200">
    <div class="w-full hero-height hero-background flex flex-col">
      <header class="w-full h-24 flex flex-row justify-between items-center">
        <img src="../../assets/images/techlingo-logo.png" class="w-80 h-64 ml-20" />
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

    <div class="w-full hero-height flex flex-col items-center justify-center">
      <div class="w-5/6 h-full bg-green-700">
        <div class="flex flex-row items-center justify-center py-4">
          <h3 class="QuicksandBold font-medium text-black text-3xl">
            Chegou a hora de virar o jogo
          </h3>
        </div>
        <div class="w-full h-full flex flex-row align-center justify-center gap-x-6">
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img src="../../assets/images/icon-bridge.png" alt="icone_ponte" class="w-28 h-14" />
            <h3 class="QuicksandBold font-medium text-black text-xl">Uma ponte para o sucesso</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
            </p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img src="../../assets/images/icon-key.png" alt="icone_chave" class="w-14 h-14" />
            <h3 class="QuicksandBold font-medium text-black text-xl">Uma chave que abre portas</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
            </p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-white flex flex-col items-center justify-evenly gap-x-8 text-center"
          >
            <img
              src="../../assets/images/icon-door-open.png"
              alt="icone_porta_aberta"
              class="w-14 h-14"
            />
            <h3 class="QuicksandBold font-medium text-black text-xl">Novas oportunidades</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
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
    <div class="w-full hero-height bg-yellow-500">AAAAAAAAAAAAAAAAAAH</div>
    <div class="w-full hero-height bg-purple-500">MIAAAAAAAAAAAAAUUUUUUU</div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>
<style scoped>
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
</style>
