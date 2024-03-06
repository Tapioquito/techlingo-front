<template>
  <div class="w-screen h-screen flex flex-col bg-slate-200">
    <div class="w-full hero-height hero-background flex flex-col">
      <header class="w-full h-24 flex flex-row justify-between items-center">
        <img src="./assets/images/techlingo_logo.png" class="w-32 h-10 ml-10" />
        <button class="w-52 h-10 bg-white text-black rounded-full poppins mr-10">Começar</button>
      </header>
      <div class="flex flex-row gap-x-12 justify-around">
        <div class="flex-flex-col w-96 h-96">
          <div class="text-white hero-text-size quicksand font-bold">
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
            <button class="text-white rounded-full border-slate-200 font-bold px-7 py-3">
              Saiba mais
            </button>
          </div>
        </div>
        <div>
          <img
            src="../../assets/images/tech_bro_hero.png"
            class="techbroimg rounded-tr-xl rounded-bl-xl"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="w-full hero-height flex flex-col items-center justify-center">
      <div class="w-5/6 h-full">
        <div class="flex flex-row items-center justify-center py-4">
          <h3 class="QuicksandBold font-medium text-black text-3xl">
            Chegou a hora de virar o jogo
          </h3>
        </div>
        <div class="w-full h-full flex flex-row align-center justify-center gap-x-12">
          <div
            class="h-80 w-80 rounded-md bg-purple-700 flex flex-col align-center justify-center gap-y-8 text-center"
          >
            <img src="../../assets/images/icon_bridge.png" alt="icone_ponte" />
            <h3 class="QuicksandBold font-medium text-black text-xl">Uma ponte para o sucesso</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
            </p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-purple-700 flex flex-col align-center justify-center gap-y-8 text-center"
          >
            <img src="../../assets/images/icon_bridge.png" alt="icone_ponte" />
            <h3 class="QuicksandBold font-medium text-black text-xl">Uma chave que abre portas</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
            </p>
          </div>
          <div
            class="h-80 w-80 rounded-md bg-purple-700 flex flex-col align-center justify-center gap-y-8 text-center"
          >
            <img src="../../assets/images/icon_bridge.png" alt="icone_ponte" />
            <h3 class="QuicksandBold font-medium text-black text-xl">Novas oportunidades</h3>
            <p class="QuicksandRegular text-slate-800">
              A good education website should have high-quality content that is accurate,
              up-to-date, and relevant to the subject matter.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full hero-height bg-yellow-500"></div>
    <div class="w-full hero-height bg-purple-500"></div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>
<style scoped>
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
</style>
