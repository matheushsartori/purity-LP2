import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, Brain, TestTube, Microscope, Menu } from "lucide-react"
import Image from "next/image"
import UTMTracker from "@/components/utm-tracker"
import SmartLink from "@/components/smart-link"
import UTMDebug from "@/components/utm-debug"
import { GTMEvents } from "@/components/gtm-events"
import CTAButton from "@/components/cta-button"

const Header = () => (
  <header className="z-50 bg-purity-dark text-purity-white shadow-md" role="banner">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="text-xl font-bold tracking-wider" itemScope itemType="https://schema.org/Organization">
        <span itemProp="name">CLÍNICA <span className="text-purity-gold">PURITY</span></span>
      </div>
      <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Menu principal">
        <a href="#solucao" className="hover:text-purity-gold transition-colors" aria-label="Ir para seção sobre o teste">
          O Teste
        </a>
        <a href="#depoimentos" className="hover:text-purity-gold transition-colors" aria-label="Ir para seção de depoimentos">
          Depoimentos
        </a>
        <a href="#sobre" className="hover:text-purity-gold transition-colors" aria-label="Ir para seção sobre nós">
          Sobre Nós
        </a>
      </nav>
      <CTAButton 
        className="hidden md:block bg-purity-gold text-purity-dark hover:bg-purity-gold/90 font-bold" 
        aria-label="Agendar consulta na Clínica Purity"
        href="https://pay.hotmart.com/S92891055P?checkoutMode=10"
        eventLabel="Agendar Consulta"
        eventCategory="Header"
      >
        Agendar Consulta
      </CTAButton>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu de navegação">
        <Menu aria-hidden="true" />
      </Button>
    </div>
  </header>
)

export default function LandingPage() {
  const symptoms = [
    { icon: "🤢", text: "Problemas digestivos constantes (Má DIgestão, Azia e Inchaço)" },
    { icon: "😫", text: "Problemas Intestinais (Constipação, Diarréia, Gases e Dor Abdominal)" },
    { icon: "😰", text: "Cansaço extremo e falta de disposição" },
    { icon: "😵", text: "Dores de cabeça frequentes ou enxaquecas" },
    { icon: "😟", text: "Ansiedade ou irritabilidade sem motivo aparente" },
    { icon: "😔", text: "Depressão, Falta de concentração e foco" },
    { icon: "🔴", text: "Problemas de Pele (Acne, Rosácea e Psoríase)" },
    { icon: "🥱", text: "Insônia ou sono que não descansa" },
    { icon: "🦴", text: "Dores no corpo que migram de lugar" },
    { icon: "🤒", text: "Resfriados frequentes ou imunidade baixa" },
    { icon: "🧠", text: "Falta de concentração ou 'neblina mental'" },
    { icon: "🍽️", text: "Compulsão por doces ou carboidratos" },
    { icon: "💔", text: "Palpitações ou sensação de coração acelerado" },
    { icon: "📏", text: "Oscilações de peso sem mudança de dieta" },
    { icon: "🤧", text: "Rinite alérgica ou sinusite crônica" },
  ]

  const frustrationCycle = [
    "Marca consulta médica",
    "Conta todos os seus sintomas",
    "Faz uma bateria de exames",
    "Gasta centenas de reais",
    'RESULTADO: "Está tudo normal"',
  ]

  const testimonials = [
    {
      name: "André, 42 anos",
      story: "15 Anos de Sofrimento Resolvidos em 3 Meses",
      before: [
        "Insônia crônica há 15 anos",
        "Barriga estufada constantemente",
        "Gases que causavam constrangimento",
        "Cansaço extremo mesmo dormindo",
        '7 médicos consultados, todos os exames "normais"',
      ],
      discovery: [
        "Giardia + 2 outros parasitas intestinais",
        "Intolerância a glúten, lactose E aveia",
        "Deficiência severa de magnésio e vitamina D",
      ],
      after: [
        "Voltou a dormir 8 horas corridas",
        "Eliminou gases e inchaço 100%",
        "Recuperou energia para trabalhar e se exercitar",
        "Não precisa mais de NENHUM remédio",
      ],
      quote:
        "Pela primeira vez em 15 anos, sei exatamente o que estava errado e como resolver. Minha vida mudou completamente.",
      protocol: [
        "Eliminação de parasitas com antiparasitários naturais",
        "Dieta personalizada sem glúten, lactose e aveia",
        "Suplementação de magnésio e vitamina D",
      ],
    },
    {
      name: "Luciara, 48 anos",
      story: "Salvou o Rim que Restava",
      before: [
        "Dores no corpo que ninguém explicava",
        "Ansiedade severa com crises diárias",
        "Azia constante há 8 anos",
        "Formação de pedras nos rins - PERDEU UM RIM",
      ],
      discovery: [
        "Intoxicação por mercúrio (obturações) e alumínio",
        "Candidíase intestinal severa há anos",
        "Deficiência crítica de magnésio (previne pedras nos rins)",
      ],
      after: [
        "Dores no corpo desapareceram 100%",
        "Ansiedade controlada sem medicação",
        "Não formou mais NENHUMA pedra no rim",
        "Azia eliminada completamente",
      ],
      quote: "Se eu tivesse feito esse teste há 10 anos, ainda teria meus dois rins.",
      protocol: [
        "Remoção segura de obturações de mercúrio",
        "Detoxificação de alumínio e metais pesados",
        "Tratamento da candidíase intestinal",
        "Suplementação de magnésio",
      ],
    },
  ]

  return (
    <div className="bg-purity-light text-purity-dark font-['Inter',_sans-serif]">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 text-center" role="main" aria-labelledby="hero-title">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 id="hero-title" className="font-['Playfair_Display',_serif] text-4xl md:text-6xl font-bold leading-tight">
            Por que milhões de brasileiros estão morrendo lentamente sem saber por quê
          </h1>
          <p className="text-lg text-purity-green">
            Descubra porque você continua sofrendo mesmo seguindo todas as orientações médicas enquanto centenas de
            brasileiros já estão recuperando a qualidade de vida após fazer o teste europeu que investiga a causa real
            dos sintomas dos pacientes.
          </p>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 px-4 bg-purity-white" aria-labelledby="symptoms-title">
        <div className="container mx-auto text-center">
          <h2 id="symptoms-title" className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold mb-4">
            Se você chegou até aqui com alguns destes sintomas,
          </h2>
          <p className="text-lg text-purity-green mb-12">sem saber a solução ou a causa deles:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-purity-gold hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-4 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="text-3xl">{symptom.icon}</span>
                    </div>
                    <p className="text-sm font-medium text-purity-dark leading-relaxed">{symptom.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-16 text-2xl font-semibold">Saiba que você não está sozinho.</p>
          <p className="mt-2 text-lg text-purity-green max-w-3xl mx-auto">
            Milhões de brasileiros sofrem com essa mesma frustração de não saber o que causam esses sintomas.
          </p>
        </div>
      </section>

      {/* Frustration & Doubts Section */}
      <section className="bg-purity-dark text-purity-light py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold mb-8">
                É sempre o mesmo ciclo:
              </h2>
              <div className="space-y-4">
                {frustrationCycle.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-purity-gold text-purity-dark rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className={`text-xl ${item.includes("RESULTADO") ? "text-red-400" : ""}`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold mb-8 text-center md:text-left">
                E fica se perguntando:
              </h3>
              <div className="p-6 bg-purity-green/20 rounded-lg border-l-4 border-purity-gold">
                <p className="text-xl italic">"Será que é coisa da minha cabeça?"</p>
              </div>
              <div className="p-6 bg-purity-green/20 rounded-lg border-l-4 border-purity-gold">
                <p className="text-xl italic">"Por que eu sinto isso se os exames estão normais?"</p>
              </div>
              <div className="p-6 bg-purity-green/20 rounded-lg border-l-4 border-purity-gold">
                <p className="text-xl italic">"Será que vou ter que viver assim para sempre?"</p>
              </div>
              <div className="p-6 bg-purity-green/20 rounded-lg border-l-4 border-purity-gold">
                <p className="text-xl italic">"Por que ninguém sabe o que eu tenho?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biological Terrain Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold">
            Seus sintomas TÊM sim uma causa
          </h2>
          <p className="text-3xl text-purity-gold font-semibold mt-2 mb-8">e ela está no seu Terreno Biológico.</p>
          <p className="text-xl text-purity-green max-w-3xl mx-auto mb-12">PENSE NO SEU CORPO COMO UM AQUÁRIO…</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <Image
                src="/images/aquario-sujo.jpg"
                alt="Aquário com água suja e peixe doente representando terreno biológico intoxicado"
                width={400}
                height={250}
                className="rounded-lg mx-auto mb-4"
                priority
              />
              <h3 className="text-xl font-semibold mb-2">Se a água está suja, tóxica, cheia de parasitas...</h3>
              <div className="flex items-center justify-center text-lg font-semibold">
                <span className="mr-2">❌</span>
                <span>O peixe adoece, fica fraco, desenvolve sintomas</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <Image
                src="/images/aquario-limpo.jpg"
                alt="Aquário com água limpa e peixe saudável representando terreno biológico saudável"
                width={400}
                height={250}
                className="rounded-lg mx-auto mb-4"
                priority
              />
              <h3 className="text-xl font-semibold mb-2">Se a água está limpa, oxigenada, com pH correto..</h3>
              <div className="flex items-center justify-center text-lg font-semibold">
                <span className="mr-2">✅</span>
                <span>O peixe fica saudável, ativo, sem sintomas</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-4xl font-bold text-purity-gold mb-6">QUAL É A SOLUÇÃO?</h3>
            <div className="text-2xl space-y-4">
              <div className="flex items-center justify-center opacity-60">
                <span className="mr-3 text-3xl">❌</span>
                <span className="line-through">Dar remédio para o peixe?</span>
              </div>
              <div className="flex items-center justify-center font-bold text-3xl">
                <span className="mr-3 text-3xl">✅</span>
                <span>LIMPAR A ÁGUA DO AQUÁRIO!</span>
              </div>
            </div>
            <p className="text-xl text-purity-green mt-8">
              Enquanto seu "terreno biológico" (o ambiente interno onde suas células vivem) estiver intoxicado, nenhum
              remédio, suplemento ou dieta vai funcionar de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Root Causes Section */}
      <section className="bg-purity-white py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold mb-4">
              As 4 Causas Raiz de 95% dos Sintomas "Sem Explicação"
            </h2>
            <p className="text-lg text-purity-green mb-8">que deixam seu Terreno Biológico intoxicado.</p>
            <blockquote className="bg-purity-light p-6 rounded-lg border-l-4 border-purity-gold italic text-lg my-8">
              "Todas as doenças crônicas, degenerativas, autoimunes e cancerígenas são causadas por substâncias tóxicas
              do meio ambiente e infecções por parasitas e outros patógenos"
              <cite className="block not-italic font-semibold mt-2">- A Dra. Hulda Clark, já dizia</cite>
            </blockquote>
            <p className="text-lg text-purity-green mb-12">
              Depois de analisar mais de 5.000 casos, confirmamos essa afirmação ao descobrir que praticamente TODOS os
              sintomas inexplicáveis dos nossos pacientes são causados por apenas 4 agentes:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Causa 1 */}
            <Card className="bg-purity-light shadow-lg flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src="/images/par.png"
                  alt="Representação de parasitas ocultos no organismo - vermes, fungos, bactérias e vírus"
                  width={500}
                  height={500}
                  className="rounded-t-lg w-full object-cover filter grayscale"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-purity-dark mb-2">1. PARASITAS OCULTOS</h3>
                <p className="text-purity-green mb-4">
                  Vermes, fungos, bactérias e vírus que vivem no seu organismo sem você saber.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-purity-green">
                  <li>A maioria é invisível em exames de fezes tradicionais</li>
                  <li>Causam inflamação crônica silenciosa</li>
                  <li>Competem com você pelos nutrientes</li>
                  <li>Liberam toxinas que sobrecarregam fígado e rins</li>
                </ul>
                <p className="text-sm">
                  <strong className="text-purity-dark">Sintomas:</strong> Inchaço, Má Digestão, Intestino Preso ou
                  Diarreia, Gases, Cansaço, ansiedade, insônia, compulsão por doces…
                </p>
              </CardContent>
            </Card>
            {/* Causa 2 */}
            <Card className="bg-purity-light shadow-lg flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src="/images/tox.png"
                  alt="Toxinas ambientais e metais pesados - mercúrio, chumbo, alumínio e agrotóxicos"
                  width={500}
                  height={250}
                  className="rounded-t-lg w-full object-cover filter grayscale"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-purity-dark mb-2">2. TOXINAS AMBIENTAIS E METAIS PESADOS</h3>
                <p className="text-purity-green mb-4">
                  Metais pesados e químicos acumulados ao longo dos anos no seu organismo.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-purity-green">
                  <li>Mercúrio (obturações e peixes grandes)</li>
                  <li>Chumbo (tintas antigas e água contaminada)</li>
                  <li>Alumínio (panelas e desodorantes)</li>
                  <li>Agrotóxicos e conservantes alimentares</li>
                </ul>
                <p className="text-sm">
                  <strong className="text-purity-dark">Sintomas:</strong> Dores de cabeça, problemas de memória,
                  irritabilidade, dores musculares, problemas de pele, alergias, ansiedade, depressão…
                </p>
              </CardContent>
            </Card>
            {/* Causa 3 */}
            <Card className="bg-purity-light shadow-lg flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src="/images/ali.png"
                  alt="Alimentos incompatíveis que causam inflamação intestinal e intolerâncias ocultas"
                  width={500}
                  height={250}
                  className="rounded-t-lg w-full object-cover filter"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-purity-dark mb-2">3. ALIMENTOS INCOMPATÍVEIS</h3>
                <p className="text-purity-green mb-4">
                  Alimentos que você come achando que são saudáveis, mas que inflamam seu intestino.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-purity-green">
                  <li>NÃO são alergias que aparecem em exames</li>
                  <li>São intolerâncias ocultas que causam inflamação crônica</li>
                  <li>Cada pessoa tem alimentos específicos incompatíveis</li>
                  <li>Incluem até frutas, verduras e "superalimentos"</li>
                </ul>
                <p className="text-sm">
                  <strong className="text-purity-dark">Sintomas:</strong> Gases, inchaço, azia, dores de cabeça, fadiga
                  após comer.
                </p>
              </CardContent>
            </Card>
            {/* Causa 4 */}
            <Card className="bg-purity-light shadow-lg flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src="/images/defi.png"
                  alt="Deficiências nutricionais - vitaminas e minerais em falta no organismo"
                  width={500}
                  height={250}
                  className="rounded-t-lg w-full object-cover filter"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-purity-dark mb-2">4. DEFICIÊNCIAS NUTRICIONAIS</h3>
                <p className="text-purity-green mb-4">
                  Vitaminas e minerais em falta que impedem seu corpo de funcionar.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-purity-green">
                  <li>Solo empobrecido = alimentos com menos nutrientes</li>
                  <li>Stress e toxinas consomem mais vitaminas</li>
                  <li>Cada pessoa tem necessidades individuais únicas</li>
                  <li>Suplementação genérica raramente resolve</li>
                </ul>
                <p className="text-sm">
                  <strong className="text-purity-dark">Sintomas:</strong> Cansaço, insônia, ansiedade, imunidade baixa,
                  câimbras…
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Trap Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl italic font-semibold text-purity-dark mb-12 font-['Playfair_Display',_serif]">
            "Tratar sintomas Sem Limpar o Terreno Biológico é igual podar as folhas de uma árvore doente esperando que
            ela floresça. Sem tratar a raiz, nada muda."
          </blockquote>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold mb-6">
            ESSA É A ARMADILHA QUE 90% DAS PESSOAS CAEM:
          </h2>
          <div className="space-y-3 text-xl max-w-2xl mx-auto text-left mb-12">
            <div className="flex items-start">
              <span className="mr-3 text-2xl">❌</span>
              <span>Tratam parasitas sem saber QUAIS parasitas têm</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">❌</span>
              <span>Tomam suplementos genéricos sem saber QUAIS deficiências têm</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">❌</span>
              <span>Cortam glúten e lactose sem saber QUAIS alimentos os inflamam</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">❌</span>
              <span>Fazem "detox" sem saber QUAIS toxinas e metais precisam eliminar</span>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-purity-gold">É COMO ATIRAR NO ESCURO.</p>
          <p className="text-2xl mt-6 mb-8">Para acertar o alvo, você precisa ENXERGAR EXATAMENTE:</p>
          <div className="space-y-3 text-xl max-w-2xl mx-auto text-left font-semibold">
            <div className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>Quais parasitas você tem</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>Quais toxinas estão no seu corpo</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>Quais alimentos te inflamam</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>Quais nutrientes você precisa</span>
            </div>
          </div>
          <p className="text-xl mt-8 text-purity-green">
            E existe apenas UMA forma de fazer isso com precisão celular...
          </p>
          <div className="text-center mt-12">
            <CTAButton
              className="bg-purity-gold text-purity-dark hover:bg-purity-gold/90 text-lg font-bold px-12 py-6"
              href="https://pay.hotmart.com/S92891055P?checkoutMode=10"
              eventLabel="Descobrir Causa Sintomas"
              eventCategory="Pre-Solution"
            >
              DESCOBRIR AGORA A CAUSA DOS MEUS SINTOMAS
            </CTAButton>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solucao" className="bg-purity-dark text-purity-light py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold mb-4 text-purity-gold">
            O Mapeamento Biológico da Clínica Purity
          </h2>
          <p className="text-xl mb-8">
            Através da Tecnologia de Biorressonância, nós conseguimos identificar os agentes que estão inflamando seu
            terreno biológico.
          </p>
          <p className="text-lg mb-12">É a mesma tecnologia usada em:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg mb-12">
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span>Hospitais da Alemanha, Suíça e Áustria</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span>Clínicas de medicina integrativa na Europa</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span>Hospitais na China para medicina preventiva</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">✅</span>
              <span>E agora está disponível no Brasil</span>
            </div>
          </div>
          <div className="bg-purity-green/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">UMA SIMPLES AMOSTRA DE URINA (10ml)</h3>
            <p className="mb-6">Através da Tecnologia de Biorressonância, conseguimos mapear com precisão:</p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <Microscope className="h-6 w-6 mr-3 text-purity-gold" />
                Parasitas presentes
              </div>
              <div className="flex items-center">
                <TestTube className="h-6 w-6 mr-3 text-purity-gold" />
                Toxinas e metais pesados
              </div>
              <div className="flex items-center">
                <HeartPulse className="h-6 w-6 mr-3 text-purity-gold" />
                Alimentos incompatíveis
              </div>
              <div className="flex items-center">
                <Brain className="h-6 w-6 mr-3 text-purity-gold" />
                Deficiências nutricionais
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-purity-white shadow-2xl border-2 border-purity-gold">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold">
                Sua Jornada Para a Vitalidade Começa Agora
              </CardTitle>
              <p className="text-lg text-purity-green mt-2">
                Receba o mapa completo da sua saúde e o plano para recuperá-la.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">O Que Você Recebe:</h3>
              <div className="space-y-6 mb-8 text-left">
                <div>
                  <h4 className="font-bold">RELATÓRIO COMPLETO (12-15 páginas)</h4>
                  <ul className="list-disc list-inside text-purity-green ml-4">
                    <li>Lista de TODOS os parasitas identificados</li>
                    <li>Mapeamento das toxinas ambientais</li>
                    <li>Alimentos incompatíveis específicos</li>
                    <li>Deficiências nutricionais detalhadas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Processo Simples - Você Faz Tudo em Casa:</h4>
                  <ol className="list-decimal list-inside text-purity-green ml-4">
                    <li>PASSO 1: Coleta 10ml de urina em frasco esterilizado</li>
                    <li>PASSO 2: Envia para nossa clínica</li>
                    <li>PASSO 3: Recebe resultado em 7 dias úteis</li>
                    <li>PASSO 4: Participe de uma reunião para interpretação do resultado</li>
                  </ol>
                </div>
              </div>
              <div className="text-center my-8">
                <p className="text-lg text-purity-green">Investimento para transformar sua saúde:</p>
                <p className="text-5xl font-bold text-purity-dark my-2">12x de R$ 99,70</p>
                <p className="text-lg">ou R$ 997,00 à vista</p>
              </div>
              <CTAButton
                className="w-full bg-purity-gold text-purity-dark hover:bg-purity-gold/90 text-xl font-bold py-8"
                href="https://pay.hotmart.com/S92891055P?checkoutMode=10"
                eventLabel="Fazer Mapeamento"
                eventCategory="Main-Offer"
              >
                SIM, QUERO FAZER O MAPEAMENTO!
              </CTAButton>
              <p className="text-center text-sm text-purity-green mt-4">Compra 100% segura. Garantia de 7 dias.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="bg-purity-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold text-center mb-4">
            Mais de 5.000 Casos de Sucesso
          </h2>
          <p className="text-xl text-center text-purity-green mb-12">
            de Pacientes da Clínica Purity. Veja abaixo alguns deles:
          </p>
          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-purity-light shadow-xl overflow-hidden">
                <CardHeader className="bg-purity-dark text-purity-gold p-6">
                  <CardTitle className="text-2xl font-['Playfair_Display',_serif]">
                    {t.name} - {t.story}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-600">ANTES:</h4>
                      <ul className="space-y-1 text-purity-green text-sm">
                        {t.before.map((item, idx) => (
                          <li key={idx}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-purity-dark">NO TESTE DESCOBRIMOS:</h4>
                      <ul className="space-y-1 text-purity-green text-sm">
                        {t.discovery.map((item, idx) => (
                          <li key={idx}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-purity-dark">PROTOCOLO APLICADO:</h4>
                      <ul className="space-y-1 text-purity-green text-sm">
                        {t.protocol.map((item, idx) => (
                          <li key={idx}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-green-600">
                        RESULTADO EM {i === 0 ? "3" : "6"} MESES:
                      </h4>
                      <ul className="space-y-1 text-purity-green text-sm">
                        {t.after.map((item, idx) => (
                          <li key={idx}>✅ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <blockquote className="mt-8 border-l-4 border-purity-gold pl-4 italic text-purity-dark text-lg">
                    "{t.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-6">Você também pode ter sua história de transformação!</h3>
            <CTAButton
              className="bg-purity-gold text-purity-dark hover:bg-purity-gold/90 text-xl font-bold px-16 py-8"
              href="https://pay.hotmart.com/S92891055P?checkoutMode=10"
              eventLabel="Mapeamento Biologico"
              eventCategory="Post-Testimonials"
            >
              FAZER MEU MAPEAMENTO BIOLÓGICO AGORA
            </CTAButton>
            <p className="text-sm text-purity-green mt-4">✅ Compra 100% segura • ✅ Garantia de 7 dias • ✅ Resultados em 7 dias úteis</p>
          </div>
        </div>
      </section>

      {/* About Clinic Section */}
      <section id="sobre" className="py-20 px-4" aria-labelledby="about-title">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h2 id="about-title" className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold">
                A Clínica Mais Experiente em Testes de Biorressonância do Brasil
              </h2>
              <div className="w-24 h-1 bg-purity-gold"></div>
              <p className="text-lg text-purity-green">
                A Clínica Purity de Nutrição Integrada foca na Biorregulação do Terreno Biológico dos pacientes.
                Entendemos que todo processo de cura deve se iniciar na biorregulação do Terreno Biológico porque, ao
                equilibrar esse terreno, fortalecemos as defesas naturais do corpo contra agentes patogênicos como
                parasitas, fungos, vírus e bactérias, além de reduzir a carga de toxinas ambientais.
              </p>
              <p className="text-lg text-purity-green">
                Este processo de limpeza e fortalecimento do terreno biológico é essencial, conforme destacado pelas
                pesquisas de Hulda Clark, para criar um ambiente menos propício ao adoecimento. Acreditamos que, ao
                remover esses agentes externos e minimizar sua influência, há uma grande chance de reverter os problemas
                de saúde crônicos e evitar o surgimento de doenças. Pois, ao limpar o terreno biológico, proporcionamos
                ao seu corpo a capacidade de se “auto-curar”.
              </p>
            </div>
                         <div className="grid grid-cols-1 gap-4">
               <Image
                 src="/images/lair.jpeg"
                 alt="Foto da equipe da Clínica Purity com Dr. Lair Ribeiro, referência em medicina integrativa"
                 width={400}
                 height={400}
                 className="w-full aspect-square object-cover rounded-lg shadow-lg"
                 loading="lazy"
               />
             </div>
          </div>
                      <div className="text-center mt-20">
              <h3 className="text-3xl pb-8 font-bold mb-16 text-purity-dark">NOSSA TRAJETÓRIA DE SUCESSO</h3>
              
              {/* Cards em grid */}
             <div style={{marginTop: '50px'}}>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <Card className="bg-gradient-to-br from-white to-purity-light border-t-4 border-purity-gold shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purity-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📈</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purity-green mb-2">5.000+</h4>
                    <p className="text-sm font-semibold text-purity-gold">TESTES REALIZADOS</p>
                    <p className="text-xs text-purity-dark mt-2">Maior experiência em Mapeamento Biológico no Brasil</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-purity-light border-t-4 border-purity-gold shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purity-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📍</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purity-green mb-2">NACIONAL</h4>
                    <p className="text-sm font-semibold text-purity-gold">ATENDIMENTO BRASIL</p>
                    <p className="text-xs text-purity-dark mt-2">Clínica em Curitiba, atendemos todo o país</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-purity-light border-t-4 border-purity-gold shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purity-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⭐</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purity-green mb-2">REFERÊNCIA</h4>
                    <p className="text-sm font-semibold text-purity-gold">MEDICINA INTEGRATIVA</p>
                    <p className="text-xs text-purity-dark mt-2">Reconhecimento profissional no setor</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white to-purity-light border-t-4 border-purity-gold shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purity-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔬</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purity-green mb-2">TECNOLOGIA</h4>
                    <p className="text-sm font-semibold text-purity-gold">BIORRESSONÂNCIA</p>
                    <p className="text-xs text-purity-dark mt-2">Equipamentos europeus de última geração</p>
                  </CardContent>
                </Card>
              </div>
             </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purity-dark text-purity-light py-12 px-4" role="contentinfo">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">O QUE DIZEM SOBRE NÓS</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Depoimentos sobre a clínica */}
            <div className="bg-purity-green/20 p-6 rounded-lg">
              <p className="italic">
                "Atendimento excepcional e uma equipe que realmente se importa. Mudaram minha vida."
              </p>
              <p className="font-bold mt-4">- C. Almeida</p>
            </div>
            <div className="bg-purity-green/20 p-6 rounded-lg">
              <p className="italic">
                "A Dra. é uma profissional incrível, muito conhecimento e empatia. Recomendo a todos."
              </p>
              <p className="font-bold mt-4">- F. Lima</p>
            </div>
            <div className="bg-purity-green/20 p-6 rounded-lg">
              <p className="italic">
                "A melhor decisão que tomei pela minha saúde. A Clínica Purity é referência de verdade."
              </p>
              <p className="font-bold mt-4">- R. Souza</p>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-bold tracking-wider">
              CLÍNICA <span className="text-purity-gold">PURITY</span>
            </h3>
            <p className="mt-2 text-purity-green">📍 Rua das Flores, 123 - Batel, Curitiba/PR</p>
            <p className="text-purity-green">CNPJ: 00.000.000/0001-00</p>
          </div>
          <p className="text-xs text-purity-green/70">
            &copy; {new Date().getFullYear()} Clínica Purity. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <UTMTracker />
      <UTMDebug />
    </div>
  )
}
