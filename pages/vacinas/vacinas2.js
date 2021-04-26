/*
Crianças:
1: Nascer
2: 2 meses
3: 3 meses
4: 4 meses
5: 5 meses
6: 6 meses
7: 9 meses
8: 12 meses
9: 15 meses
10: 18 meses
11: 4 anos
12: 5 anos
13: 9 anos
Adolescentes:
14: 11 anos
15: 11 a 19 anos
Adultos:
16: 20 a 59 anos
Gestantes:
17: Gestantes
Idosos:
18: Idosos
*/
const vacinas = [
  {
    id: 1,
    grupo: [2, 4, 6, 9, 11, 13, 15],
    nome: "Tríplice Bacteriana Acelular Infantil – DTPa",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>Contém os toxoides diftérico e tetânico (derivados das toxinas produzidas pelas bactérias causadoras das doenças), e componentes da cápsula da bactéria da coqueluche (<span class='italico'>Bordetella pertussis</span>), sal de alumínio como adjuvante, fenoxietanol, cloreto de sódio, e água para injeção.",
    prevencao: "Difteria, tétano e coqueluche.",
    posologia: "Para a vacinação rotineira de crianças (aos 2, 4, 6 meses e entre 12 e 18 meses), preferir a vacina quíntupla (penta) ou hexa, nas quais a DTPa é combinada a outras vacinas. Ver DTPa-VIP/Hib ou DTPa-VIP-HB/Hib. Para a dose de reforço entre 4 e 5 anos de idade, a DTPa pode ser substituída por dTpa ou dTpa-VIP.",
    reacoes: "Com a vacina DTPa os eventos adversos são menos frequentes e intensos do que com a DTPw.",
    indicacoes: "Crianças com menos de 7 anos de idade. Mesmo as que já tiveram tétano, difteria, doença causada pelo <span class='italico'>Haemophilus influenzae</span> tipo b (Hib) e/ou coqueluche devem ser imunizadas, uma vez que estas doenças não conferem proteção permanente frente a novas infecções.",
    contraindicacoes: "Maiores de 7 anos.<br/>    Crianças que apresentaram encefalopatia nos sete dias que se seguiram à aplicação de dose anterior de vacina contendo componente <span class='italico'>pertussis</span>.<br/>    Anafilaxia causada por qualquer componente da vacina.<br/>",
    viaaplicacao: "Intramuscular.",
    preco: 144.30,
    manifestlocais: "Inchaço, vermelhidão e dor no local da aplicação acontecem com 1,2% a 22,9% das crianças vacinadas.<br/>    Inchaço extenso, atingindo todo o membro, ocorre em 2% a 3% das crianças vacinadas com quatro ou cinco doses da tríplice bacteriana acelular infantil (DTPa), em geral nas primeiras 24 horas. A melhora espontânea é percebida em dois dias.<br/>    Mais raramente pode haver formação de abscesso no local da aplicação, estéril (abscesso frio) ou infeccioso (abscesso quente), com pus.<br/>",
    manifestsistemicas: "Febre baixa a moderada acomete até 30% dos vacinados, em especial quando da aplicação da primeira dose e nas primeiras 24 horas (habitualmente entre três e 12 horas).<br/>    Febre alta ocorre em menos de três crianças a cada mil vacinadas.<br/>    Sonolência em 30% a 52,2% das crianças vacinadas. Tem início nas primeiras 24 horas e pode persistir por até 72 horas após. A melhora do sintoma se dá de maneira espontânea, não sendo necessária conduta especial. Esse quadro não deixa sequela.<br/>    Perda de apetite de baixa intensidade e transitória é sintoma encontrado em até 27,2% dos vacinados.<br/>    Vômitos acontecem em 2,5% a 21,6% das crianças vacinadas, melhorando espontaneamente.<br/>    Choro persistente foi descrito em duas a cada mil crianças vacinadas, nas primeiras 24 horas.<br/>    Episódio hipotônico-hiporresponsivo (EHH) pode acontecer nas primeiras 48 horas com frequência de 0,7 a cada mil crianças vacinadas e não deixa sequelas. Costuma ser precedido por irritabilidade e febre. A criança torna-se pálida, perde o tônus muscular e a consciência. Esse quadro pode durar desde alguns minutos até algumas horas, mas, apesar de muito angustiante, melhora sem deixar sequelas. Sua ocorrência não indica tendência de repetição quando da aplicação de doses subsequentes.<br/>    Convulsão, nas primeiras 72 horas, também de caráter benigno – não causa sequelas. A chance de ocorrência é de 0,3 para cada mil crianças vacinadas. É aconselhável que se faça uma investigação médica para verificar se foi de fato causada pela vacina. Como os casos de convulsão associam-se a febre e não à vacina, não há contraindicação para as próximas doses.<br/>    Encefalopatia pós-vacinal é muito rara e não foi comprovada relação com a vacina. Entre 1993 e 2002, o serviço de vigilância em saúde do Canadá avaliou mais de 12 mil registros hospitalares devidos a desordens neurológicas e não foi encontrado nenhum caso de encefalopatia atribuível a DTPa, em um universo de mais de 6,5 milhões de doses aplicadas.<br/>    Reações de hipersensibilidade são extremamente raras e estão associadas a reações alérgicas como urticária, ou, em casos mais graves, anafilaxia. Nunca foi identificada qualquer relação entre a anafilaxia e a vacina DTPa, de modo que sua ocorrência não contraindica doses subsequentes da vacina. Estas reações podem surgir várias horas ou dias após a aplicação da vacina, podem ter origens diversas (viroses, alimentos e medicamentos, por exemplo), sendo muito pouco provável que reapareçam após a aplicação de dose subsequente, portanto, neste caso, não há contraindicação.<br/>"
  },
  {
    id: 2,
    grupo: [2, 4, 6, 9],
    nome: "Haemophilus Influenzae Tipo B – Hib ",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta de pó liofilizado com polissacarídeo da cápsula da bactéria <span class='italico'>Haemophilus influenzae</span> tipo b (Hib) conjugado com toxoide tetânico, lactose, cloreto de sódio, água para injeção. As apresentações multidose contêm fenol. Na vacina disponível na rede pública há timerosal (derivado do mercúrio).<br/><br/>Pode ser encontrada isolada ou combinada com a vacina tríplice bacteriana (DTPw ou DTPa).",
    prevencao: "Doenças causadas pelo <span class='italico'>Haemophilus influenzae</span> tipo b, principalmente meningite.",
    posologia: "O Programa Nacional de Imunizações (PNI) recomenda e disponibiliza a vacina em três doses: aos 2, 4 e 6 meses de idade. As sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam uma quarta dose entre 12 e 18 meses, em especial para crianças vacinadas com a vacina DTPa.<br/>    Crianças com mais de 5 anos, adolescentes e adultos não vacinados e com doenças que aumentem o risco da doença: duas doses com intervalo de dois meses.<br/>",
    reacoes: "Pode ocorrer dor no local da aplicação em 3% a 29% dos vacinados; e inchaço, endurecimento e vermelhidão em 0,2% a 17% deles.<br/>    Em relação às manifestações gerais, a febre nas primeiras 24 horas após a vacinação é relatada por 1% a 6% dos vacinados; cansaço, tontura, dor de cabeça, irritabilidade e desconforto gastrintestinal leve podem aparecer em 1% a 20% dos vacinados.<br/>    Um a cada 600 mil vacinados apresenta alergia a algum componente da vacina, sobretudo ao timerosal (derivado do mercúrio), sendo mais raro em crianças e adolescentes.<br/>",
    indicacoes: "Crianças a partir de 2 meses, até 5 anos de idade.<br/>    Crianças com mais de 5 anos, adolescentes e adultos com condições médicas que aumentam o risco para doenças por Hib: ausência de baço ou disfunção nesse órgão; antes e/ou após transplante de órgão ou medula óssea; após quimioterapia; entre outras.<br/>",
    contraindicacoes: "Pessoas que apresentaram anafilaxia provocada por qualquer componente da vacina ou por dose anterior.",
    viaaplicacao: "Subcutânea ou intramuscular (nunca pelas vias intravascular ou intradérmica).",
    preco: 56.81
  },
  {
    id: 3,
    grupo: [1, 15, 16, 17, 18],
    nome: "Hepatite B",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta por proteína de superfície do vírus da hepatite B purificado, hidróxido de alumínio, cloreto de sódio e água para injeção. Pode conter fosfato de sódio, fosfato de potássio e borato de sódio.<br/><br/>A rede pública utiliza a apresentação multidose (mais de uma dose por frasco), que contém timerosal (derivado do mercúrio) como conservante.",
    prevencao: "Infecção do fígado (hepatite) causada pelo vírus da hepatite B.",
    posologia: "Para a vacinação rotineira de crianças, o Programa Nacional de Imunizações (PNI) adotou o esquema de quatro doses: uma dose em formulação isolada ao nascimento e doses aos 2, 4 e 6 meses de vida, incluídas na vacina pentavalente de células inteiras. A Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Imunizações (SBIm) recomendam os esquemas de quatro doses (adotado pelo PNI) ou de três doses: ao nascimento, em formulação isolada, e aos 2 e 6 meses de vida, como parte da vacina hexavalente acelular. Aos 4 meses é recomendada a vacina penta acelular, que não contém o antígeno hepatite B em sua formulação.<br/>    Para crianças mais velhas, adolescentes e adultos não vacinados no primeiro ano de vida, o PNI, a SBP e a SBIm recomendam três doses, com intervalo de um ou dois meses entre primeira e a segunda doses e de seis  meses entre a primeira e a terceira.<br/>",
    reacoes: "Em 3% a 29% dos vacinados pode ocorrer dor no local da aplicação; endurecimento, inchaço e vermelhidão acometem de 0,2% a 17% das pessoas.<br/>    Em relação às manifestações gerais, de 1% a 6% dos vacinados apresentam febre bem tolerada e autolimitada nas primeiras 24 horas após a aplicação; cansaço, tontura, dor de cabeça, irritabilidade e desconforto gastrintestinal acometem de 1% a 20%.<br/>    A ocorrência de púrpura trombocitopênica idiopática após administração da vacina hepatite B é um evento raro, registrado em menos de 0,01% dos vacinados, e até hoje não foi bem estabelecido se esses poucos casos estão de fato relacionados à vacina ou se foi apenas coincidência. Nestes casos, as manchas roxas ou avermelhadas na pele e a diminuição da contagem de plaquetas que caracterizam a doença surgiram poucos dias a até dois meses depois da vacinação.<br/>    Anafilaxia também é muito rara: um caso em 600 mil adolescentes e adultos vacinados, sendo mais rara ainda em crianças.<br/>    Tais eventos adversos estão relacionados à vacina hepatite B isolada. Aqueles associados às vacinas combinadas com componente hepatite B podem ser encontrados nos tópicos que tratam de cada uma especificamente: DTPa-VIP-HB/Hib e DTPw-HB/Hib e vacina combinada hepatite A e B.<br/>",
    indicacoes: "Para pessoas de todas as faixas etárias. Faz parte da rotina de vacinação das crianças, devendo ser aplicada, de preferência, nas primeiras 12-24 horas após o nascimento, para prevenir hepatite crônica – forma que acomete 90% dos bebês contaminados ao nascer.<br/><br/>Especialmente indicada para gestantes não vacinadas.",
    contraindicacoes: "Não deve ser aplicada em pessoas que apresentaram anafilaxia com qualquer componente da vacina ou com dose anterior. Ou nas que desenvolveram púrpura trombocitopênica após dose anterior de vacina com componente hepatite B.",
    viaaplicacao: "Intramuscular.",
    preco: 56.81
  },
  {
    id: 4,
    grupo: [2, 4, 8],
    nome: "Pneumocócicas Conjugadas 10",
    sobre: "Tratam-se de vacinas inativadas, portanto não têm como causar as doenças. A VPC10 é composta de dez sorotipos de <span class='italico'>Streptococcus pneumoniae</span> (pneumococo), oito deles conjugados com a proteína D do <span class='italico'>Haemophilus influenzae</span> tipo b, um com o toxoide tetânico e outro com toxoide diftérico. Contém também cloreto de sódio, fosfato de alumínio e água para injeção.",
    prevencao: "A vacina pneumocócica conjugada 10-valente (VPC10) previne cerca de 70% das doenças graves (pneumonia, meningite, otite) em crianças, causadas por dez sorotipos de pneumococos.",
    posologia: "As sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam, sempre que possível, o uso da VPC13, devido à proteção contra mais sorotipos.<br/><br/>    O Programa Nacional de Vacinação passou a adotar, em 2016, na rotina de vacinação infantil, duas doses de VPC10 com intervalo mínimo de 2 meses no primeiro ano de vida e uma dose de reforço aos 12 meses de idade.   <br/>    As sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam a vacinação infantil de rotina com quatro doses da vacina VPC13: aos 2, 4 e 6 meses de vida e reforço entre 12 e 15 meses.<br/>    Para crianças entre 1 e 2 anos e não vacinadas: duas doses com intervalo de dois meses.         <br/>    Para crianças entre 2 e 5 anos de idade:<br/>        Não vacinadas: uma dose.<br/>        Portadoras de doenças crônicas que justifiquem, pode ser necessário complementar a vacinação com a vacina pneumocócica polissacarídica 23-valente (VPP23).<br/><br/>Crianças que começam a vacinação com atraso, após os 6 meses de vida, precisam que seus esquemas sejam adaptados de acordo com a idade de início. Crianças vacinadas com a VPC10 podem ser beneficiadas pela VPC13. A vacina deve ser administrada no mínimo dois meses após a última VPC10 e o número de doses dependerá do recomendado para a idade em que a primeira dose de VPC13 for aplicada.",
    reacoes: "VPC10 – Dor, inchaço e vermelhidão são relatados por 38,3% dos vacinados. Entre os sintomas gerais, irritabilidade é o mais comum (52,3%). Em mais de 10% ocorre sonolência, perda de apetite e febre. Entre 0,1% e 0,01% dos vacinados (crianças com até 5 anos) apresentam dificuldade respiratória, diarreia, vômitos, choro persistente. Erupções na pele e convulsões ocorrem em menos de 0,01% dos vacinados.<br/>    ",
    indicacoes: "Para crianças a partir de 2 meses e menores de 6 anos de idade é recomendada a vacinação rotineira com VPC10 ou VPC13.<br/>    Para crianças a partir de 6 anos, adolescentes e adultos portadores de certas doenças crônicas, recomenda-se esquema com as vacinas VPC13 e VPP23.<br/>    Para maiores de 50 anos e, sobretudo, para maiores de 60, recomenda-se esquema com as vacinas VPC13 e VPP23.<br/>",
    contraindicacoes: "Crianças que apresentaram anafilaxia após usar algum componente da vacina ou após dose anterior da vacina.",
    viaaplicacao: " Intramuscular.",
    preco: 241.48
  },
  {
    id: 5,
    grupo: [2, 4, 6, 8, 18],
    nome: "Pneumocócicas Conjugadas 13",
    sobre: "Tratam-se de vacinas inativadas, portanto não têm como causar as doenças. A VPC13 é composta de 13 sorotipos de <span class='italico'>Streptococcus pneumoniae</span> (pneumococo) conjugados com a proteína CRM197. Contém também sais de alumínio, cloreto de sódio, ácido succínico, polissorbato 80 e água para injeção.",
    prevencao: "A vacina pneumocócica conjugada 13-valente (VPC13) previne cerca de 90% das doenças graves (pneumonia, meningite, otite) em crianças, causadas por 13 sorotipos de pneumococos.",
    posologia: "Para crianças a partir de 6 anos, adolescentes e adultos com doenças crônicas que justifiquem a vacinação e ainda não vacinados: dose única. Em algumas situações, duas doses com intervalo de dois meses podem estar indicadas. Nesses casos, pode ser necessário complementar a vacinação com a vacina pneumocócica polissacarídica 23-valente (VPP23). <br/>    Para os maiores de 60 anos, recomenda-se de rotina complementar a vacinação com a vacina pneumocócica polissacarídica 23-valente (VPP23).<br/><br/>Crianças menores de 6 anos que completaram o esquema de vacinação nas Unidades Básicas de Saúde com a vacina VPC10 têm benefícios se tomarem mais uma dose da VPC13, o que aumenta a proteção contra a doença pneumocócica. O número de doses dependerá da idade em que a primeira dose de VPC13 for aplicada.",
    reacoes: "VPC13 – Em mais de 10% das crianças vacinadas ocorrem: diminuição do apetite, irritabilidade, sonolência ou sono inquieto, febre e reações no local da aplicação (dor, vermelhidão, inchaço ou endurecimento). Entre 1% e 10% dos vacinados relatam: diarreia, vômitos, erupção cutânea, febre acima de 39°C. Entre 0,1% e 1% são acometidos por choro persistente, convulsões, urticária, reação local intensa. Raramente (entre 0,01% e 0,1%) ocorrem: episódio hipotônico-hiporresponsivo (EHH) e anafilaxia.<br/>    Em adultos, mais de 10% apresentam: diminuição do apetite, dor de cabeça, diarreia, erupção cutânea, dor nas articulações, dor muscular, calafrios, cansaço e reações locais (endurecimento, inchaço, dor, limitação do movimento do braço). Em 1% a 10% ocorrem vômitos e febre. Entre 0,1% e 1% dos vacinados relatam: náusea, alergia grave, gânglios no braço vacinado.<br/>",
    indicacoes: "Para crianças a partir de 2 meses e menores de 6 anos de idade é recomendada a vacinação rotineira com VPC10 ou VPC13.<br/>    Para crianças a partir de 6 anos, adolescentes e adultos portadores de certas doenças crônicas, recomenda-se esquema com as vacinas VPC13 e VPP23.<br/>    Para maiores de 50 anos e, sobretudo, para maiores de 60, recomenda-se esquema com as vacinas VPC13 e VPP23.<br/>",
    contraindicacoes: "Crianças que apresentaram anafilaxia após usar algum componente da vacina ou após dose anterior da vacina.",
    viaaplicacao: " Intramuscular.",
    preco: 232.78,
    manifestlocais: "VPC13 – Em mais de 10% das crianças vacinadas ocorrem: diminuição do apetite, irritabilidade, sonolência ou sono inquieto, febre e reações no local da aplicação (dor, vermelhidão, inchaço ou endurecimento). Entre 1% e 10% dos vacinados relatam: diarreia, vômitos, erupção cutânea, febre acima de 39°C. Entre 0,1% e 1% são acometidos por choro persistente, convulsões, urticária, reação local intensa. Raramente (entre 0,01% e 0,1%) ocorrem: episódio hipotônico-hiporresponsivo (EHH) e anafilaxia.",
    manifestsistemicas: "Em adultos, mais de 10% apresentam: diminuição do apetite, dor de cabeça, diarreia, erupção cutânea, dor nas articulações, dor muscular, calafrios, cansaço e reações locais (endurecimento, inchaço, dor, limitação do movimento do braço). Em 1% a 10% ocorrem vômitos e febre. Entre 0,1% e 1% dos vacinados relatam: náusea, alergia grave, gânglios no braço vacinado."
  },
  {
    id: 6,
    grupo: [2, 4, 6],
    nome: "Rotavírus",
    sobre: "Vacina oral atenuada pentavalente (VRH5) é composta por cinco tipos de rotavírus vivos “enfraquecidos”, sacarose, citrato de sódio, fosfato de sódio monobásico monoidratado, hidróxido de sódio, polissorbato 80, meios de cultura e traços de soro fetal bovino.",
    prevencao: "Doença diarreica causada por rotavírus.",
    posologia: "VRH5 – Para crianças a partir de 6 semanas de idade: três doses, com intervalo mínimo de quatro semanas. Esquema padrão: 2, 4 e 6 meses de idade.<br/>Sobre ambas as vacinas – A idade máxima para começar a vacinação é 3 meses e 15 dias. Se houver atraso além dessa idade, a imunização não poderá ser iniciada. Da mesma forma, a idade máxima para a última dose é 7 meses e 29 dias.",
    reacoes: " Sintomas de gastrenterite ocorrem em menos de 10% dos vacinados. Nos Estados Unidos, de 2006 e 2012, foram aplicadas 47 milhões de doses da vacina. Nesse período, ocorreram 584 casos de invaginação entre três e seis dias após a primeira dose da vacina. Esse total é muito próximo da quantidade esperada em crianças não vacinadas, o que demonstra que o risco oferecido pela vacina é pequeno.",
    indicacoes: "Bebês de 6 semanas a 8 meses e 0 dia. A primeira dose deve ser obrigatoriamente aplicada até a idade de 3 meses e 15 dias, e a última dose até os 7 meses e 29 dias.",
    contraindicacoes: "Crianças fora da faixa etária citada acima; com deficiências imunológicas por doença ou uso de medicamentos que causam imunossupressão; com alergia grave (urticária disseminada, dificuldade respiratória e choque anafilático) provocada por algum dos componentes da vacina ou por dose anterior da mesma; e com doença do aparelho gastrintestinal ou história prévia de invaginação intestinal.",
    viaaplicacao: "Oral.",
    preco: 201.86
  },
  {
    id: 7,
    grupo: [8, 10, 15, 16],
    nome: "Hepatite A",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta por antígeno do vírus da hepatite A, sal de alumínio amorfo, estabilizante (varia conforme o fabricante), cloreto de sódio a 0,9%. Pode conter traços de antibiótico (neomicina), fenoxietanol e formaldeído.<br/><br/>Nos serviços privados de vacinação estão disponíveis as apresentações pediátrica (para uso até 15, 17 ou 19 anos de idade, dependendo do fabricante) e de adultos.",
    prevencao: "Hepatite A.",
    posologia: "Duas doses com intervalo de seis meses.<br/>    As sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam a aplicação rotineira aos 12 e 18 meses de idade, ou o mais cedo possível, quando a vacinação não ocorrer nestas idades recomendadas.<br/>    O Programa Nacional de Imunizações (PNI) alterou, em 201​7, a faixa etária do esquema de dose única da vacina para crianças entre 15 meses e antes de completar ​5 anos de idade.<br/>",
    reacoes: "Em 10% dos vacinados ocorrem: irritabilidade, dor de cabeça, cansaço, dor e vermelhidão no local da aplicação.<br/>    Entre 1% e 10% dos vacinados apresentam perda de apetite, sonolência, diarreia, náusea, vômito, inchaço, mal-estar, febre baixa, endurecimento no local da aplicação.<br/>    Entre 0,1% e 1% dos vacinados relatam sintomas respiratórios, rinite, vertigem, erupções na pele, dor muscular, rigidez muscular.<br/>    Em 0,01% a 0,1% houve diminuição da sensibilidade, dormências, coceira, calafrios.<br/>",
    indicacoes: "Todas as pessoas a partir de 12 meses de vida.",
    contraindicacoes: "Pessoas que tiveram reação anafilática a algum componente da vacina ou a dose anterior.",
    viaaplicacao: "Intramuscular.",
    preco: 112.45
  },
  {
    id: 8,
    grupo: [3, 5, 8, 12, 14],
    nome: "Meningocócica Conjugada Quadrivalente — ACWY",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>Contém antígenos das cápsulas dos meningococos dos sorogrupos A, C, W e Y conjugados a uma proteína que, dependendo do fabricante, pode ser o toxoide tetânico, diftérico, ou o mutante atóxico da toxina diftérica, chamado CRM-197. Pode conter também sacarose; trometamol; fosfato de potássio diidrogenado; cloreto de sódio; fosfato de sódio diidrogenado monoidratado; fosfato dissódico hidrogenado diidratado; cloreto de sódio e água para injeção.",
    prevencao: "Meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo dos tipos A, C, W e Y.",
    posologia: "As sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam o uso rotineiro dessa vacina para crianças e adolescentes. Na impossibilidade de usar a vacina ACWY, deve-se utilizar a vacina meningocócica C conjugada.<br/>    Para crianças, a vacinação de rotina deve iniciar aos 3 meses de idade com duas doses no primeiro ano de vida (dependendo das recomendações das bulas) e reforços entre 12 e 15 meses, entre 5 e 6 anos e aos 11 anos de idade. Para adolescentes que nunca receberam a vacina meningocócica conjugada ACWY, são recomendadas duas doses com intervalo de cinco anos.<br/>    Para adultos, dose única, a depender de risco epidemiológico ou condição de saúde.<br/>",
    reacoes: "Em 10% dos vacinados ocorrem: inchaço, endurecimento, dor e vermelhidão no local da aplicação; perda de apetite; irritabilidade; sonolência; dor de cabeça; febre; calafrios; cansaço; e dor muscular. Entre 1% e 10% dos vacinados apresentam sintomas gastrintestinais (incluindo diarreia, vômito e náusea); hematoma grande no local da aplicação; erupções na pele e dor nas articulações. Em 0,1% a 1% dos vacinados ocorrem: insônia; choro persistente; sensibilidade diminuída da pele no local da aplicação; vertigem; coceira; dor muscular; dor nas mãos e pés e mal-estar. Em 0,01% a 0,1%, principalmente em adultos, acontece inchaço extenso no membro em que foi aplicada a vacina, com frequência associado à vermelhidão, algumas vezes envolvendo a articulação próxima ou inchaço de todo o membro.<br/>    As reações tendem a desaparecer em até 72 horas.<br/>",
    indicacoes: "Para crianças a partir de 2 meses e adolescentes.<br/>    Para adultos e idosos com condições que aumentem o risco para a doença meningocócica ou de acordo com a situação epidemiológica.<br/>    Para viajantes com destino às regiões onde há risco aumentado da doença.<br/>",
    contraindicacoes: "Pessoas que tiveram anafilaxia após o uso de algum componente da vacina ou após dose anterior.",
    viaaplicacao: "Exclusivamente pela via intramuscular profunda.",
    preco: 313.43
  },
  {
    id: 9,
    grupo: [3, 5, 8, 15],
    nome: "Meningocócica B",
    sobre: "Trata-se de vacina inativada, portanto, não causa infecção.<br/><br/>É composta por quatro componentes (três proteínas subcapsulares e vesículas da membrana externa do meningococo B), além de hidróxido de alumínio, cloreto de sódio, histidina, sacarose e água para injeção.",
    prevencao: "Meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo do tipo B.",
    posologia: "Para crianças, as sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam o uso rotineiro de duas doses e um reforço da vacina meningocócica B: aos 3 e 5 meses de vida e entre os 12 e 15 meses. O esquema, no entanto, pode variar de acordo com a idade de aplicação da primeira dose (ver quadro abaixo):<br/><br/><img class='tabela-meningite'><br/><br/>    Para adolescentes não vacinados antes, a SBP e a SBIm recomendam duas doses com intervalo de um mês.<br/>    Para adultos com até 50 anos, em situações que justifiquem: duas doses com intervalo de um mês.<br/>    Grupos de alto risco, como pessoas vivendo com HIV, portadores de asplenia anatômica ou funcional, que tenham deficiência de complemento ou em uso de eculizumabe ou outros medicamentos biológicos que interferem na via do complemento: três anos após completar o esquema, tomar uma dose de reforço.<br/>",
    reacoes: "A administração de paracetamol antes ou logo após a vacinação pode reduzir o risco de febre e não interfere na resposta imune à vacina.<br/>Não são necessários outros cuidados especiais antes da vacinação.<br/>Em caso de febre, deve-se adiar a vacinação até que ocorra a melhora.<br/>Compressas frias aliviam a reação no local da aplicação.<br/>Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.<br/>Sintomas de eventos adversos persistentes, que se prolongam por mais de 24 a 72 horas (dependendo do sintoma), devem ser investigados para verificação de outras causas.<br/>Evitar aplicação simultânea com as vacinas tríplice bacteriana, pneumocócica conjugada, <span class='italico'>Haemophilus influenzae</span> tipo b, poliomielite e hepatite B, para reduzir chance de febre alta após a vacinação.<br/>Pode ser aplicada no mesmo momento em que as vacinas meningocócicas ACWY ou C.",
    indicacoes: "Para crianças e adolescentes, conforme recomendações das sociedades brasileiras de Pediatria (SBP) e Imunizações (SBIm).<br/>    Para adultos com até 50 anos, dependendo de risco epidemiológico.<br/>    Para viajantes com destino às regiões onde há risco aumentado da doença.<br/>    Para pessoas de qualquer idade com doenças que aumentem o risco para a doença meningocócica.<br/>",
    contraindicacoes: "Pessoas que tiveram anafilaxia após uso de algum componente da vacina ou após dose anterior.",
    viaaplicacao: "Intramuscular.",
    preco: 513.13,
    manifestlocais: "Em crianças menores de 2 anos, febre alta com duração de 24 a 28 horas pode ocorrer em mais de 10% dos vacinados. Quando a vacina é aplicada junto com a tríplice bacteriana acelular, pneumocócica conjugada, <spam class='italico'>Haemophilus influenzae </span>tipo b, poliomielite e hepatite B, esse percentual aumenta para 69% a 79%. Por isso é preferível não aplicá-las no mesmo dia.<br/>    Em crianças até 10 anos, em mais de 10% dos vacinados acontecem: perda de apetite; sonolência; choro persistente; irritabilidade; diarreia; vômitos; erupções na pele; sensibilidade no local da aplicação e ao movimentar o membro onde foi aplicada a vacina; reações locais (dor, calor, vermelhidão, inchaço). Em 0,01% a 0,1% ocorrem urticária e outras reações alérgicas. Até o momento não foi observada anafilaxia.<br/>    Em mais de 10% dos vacinados com mais de 11 anos ocorre cefaleia; náuseas; dor nos músculos e articulações; mal-estar e reações locais, como inchaço, endurecimento, vermelhidão e dor. A dor pode ser muito intensa, atrapalhando a realização das atividades cotidianas. Não é conhecido o risco para anafilaxia, e reações alérgicas graves não foram verificadas durante os estudos com a vacina.<br/>"
  },
  {
    id: 10,
    grupo: [8, 14, 15],
    nome: "Tríplice Viral (sarampo, caxumba e rubéola) – SCR",
    sobre: "Trata-se de vacina atenuada, contendo vírus vivos “enfraquecidos” do sarampo, da rubéola e da caxumba; aminoácidos; albumina humana; sulfato de neomicina; sorbitol e gelatina. Contém também traços de proteína do ovo de galinha usado no processo de fabricação da vacina.<br/><br/>No Brasil, uma das vacinas utilizadas na rede pública contém traços de lactoalbumina (proteína do leite de vaca).",
    prevencao: "Sarampo, caxumba e rubéola.",
    posologia: "A SBIm considera protegido todo indivíduo que tomou duas doses na vida, com intervalo mínimo de um mês, aplicadas a partir dos 12 meses de idade.<br/>Em situação de risco para o sarampo – surtos ou exposição domiciliar, por exemplo – a primeira dose pode ser aplicada a partir dos 6 meses de idade. Essa dose, porém, não conta para o esquema de rotina: continuam a ser necessárias duas doses a partir dos 12 meses, com intervalo mínimo de 1 mês.<br/>Como rotina para crianças, as sociedades brasileiras de Pediatria (SBP) e de Imunizações (SBIm) recomendam duas doses: uma aos 12 meses e a outra aos 15 meses, podendo ser usadas a vacina SCR ou a combinada SCR-V (tetraviral).<br/>Para crianças mais velhas, adolescentes e adultos não vacinados ou sem comprovação de doses aplicadas, a SBIm recomenda duas doses, com intervalo de um a dois meses.<br/>Crianças mais velhas, adolescentes e adultos não vacinados ou sem comprovação de doses aplicadas: duas doses com intervalo de um a dois meses.<br/>Em casos de surto de caxumba ou sarampo, pode ser considerada a aplicação de uma terceira dose em pessoas com esquema completo. Não há, no entanto, evidências que justifiquem a medida na rotina.<br/>Na rotina do Programa Nacional de Imunizações (PNI) para a vacinação infantil, a primeira dose desta vacina é aplicada aos 12 meses de idade; e aos 15 meses (quando é utilizada a vacina combinada à vacina varicela [tetraviral: SCR-V]). Também podem se vacinar gratuitamente indivídos até 29 anos (duas doses, com intervalo mínimo de 30 dias) e indivíduos entre 30 e 59 anos (uma dose).<br/>Indivíduos com história pregressa de sarampo, caxumba e rubéola são considerados imunizados contra as doenças, mas é preciso certeza do diagnóstico. Na dúvida, recomenda-se a vacinação.",
    reacoes: "As reações locais acometem menos de 0,1% dos vacinados e incluem: ardência, vermelhidão, dor e formação de nódulo.<br/>    Febre alta (maior que 39,5⁰C), que surge de cinco a 12 dias após a vacinação, com um a cinco dias de duração, pode ocorrer em 5% a 15% dos vacinados. Algumas crianças podem apresentar convulsão febril, sem consequências graves. Em 0,5% a 4% dos vacinados também pode ocorrer dor de cabeça, irritabilidade, febre baixa, lacrimejamento e vermelhidão dos olhos e coriza cinco a 12 dias após a vacinação. Manchas vermelhas no corpo, sete a 14 dias após a vacinação, com permanência em torno de dois dias, surgem em 5% dos vacinados. Gânglios inchados aparecem em menos de 1% dos vacinados a partir de sete a 21 dias de vacinado. Todos estes sintomas gerais ocorrem principalmente após a primeira dose da vacina.<br/>    Inflamação das meninges (meningite), em geral benigna, pode ocorrer entre o 11º e o 32º dia após a vacinação. Inflamação do cérebro (encefalite) pode surgir entre 15 a 30 dias após a vacinação em um a cada 1 milhão a 2,5 milhões de vacinados com a primeira dose.<br/>    A associação da vacina com autismo foi totalmente descartada.<br/>    Manifestações hemorrágicas (púrpura trombocitopênica) foram descritas na proporção de um caso para 30 mil a 40 mil vacinados, com evolução benigna entre 12 a 25 dias após a vacinação. Contudo, essa ocorrência contraindica outras doses da vacina tríplice viral.<br/>    Dor articular ou artrite surge em 25% das mulheres após a puberdade, de um a 21 dias depois da vacinação. Essa reação é transitória, benigna e não contraindica outras doses da vacina.<br/>    Inflamação das glândulas parótidas ocorre em 0,7% a 2% dos vacinados, de dez a 21 dias após a vacinação.<br/>    A anafilaxia é muito rara e ocorre quase sempre nos primeiros 30 minutos depois de administrada a vacina. Nesse caso, contraindicam-se doses subsequentes.<br/>",
    indicacoes: "Crianças, adolescentes e adultos.",
    contraindicacoes: "Gestantes, pessoas com comprometimento da imunidade por doença ou medicação, história de anafilaxia após aplicação de dose anterior da vacina ou a algum componente.<br/>    A maioria das crianças com história de reação anafilática a ovo não tem reações adversas à vacina e, mesmo quando a reação é grave, não há contraindicação ao uso da vacina tríplice viral. Foi demonstrado, em muitos estudos, que pessoas com alergia ao ovo, mesmo aquelas com alergia grave, têm risco insignificante de reações anafiláticas. Teste cutâneo não é recomendado, pois não consegue prever se a reação acontecerá. No entanto, é recomendado que estas crianças, por precaução, sejam vacinadas em ambiente hospitalar ou outro que ofereça condições de atendimento de anafilaxia.<br/>",
    viaaplicacao: "Subcutânea.",
    preco: 48.55
  },
  {
    id: 11,
    grupo: [8, 14, 15],
    nome: "Varicela (catapora)",
    sobre: "Trata-se de vacina atenuada, contendo vírus vivos “enfraquecidos” da varicela, além de gelatina, traços de neomicina, água para injeção. Não contém traços de proteína do ovo de galinha.",
    prevencao: "Varicela (catapora).",
    posologia: "O Programa Nacional de Imunizações (PNI) disponibiliza uma dose da vacina varicela, aos 4 anos de idade, correspondente à segunda dose do esquema contra varicela. A primeira dose é aplicada aos 15 meses, como parte da vacina tetraviral (SCR-V).<br/>    A Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Imunizações (SBIm) recomendam duas doses da vacina varicela: a primeira aos 12 meses e a segunda entre 15 e 24 meses de idade. Essas doses coincidem com o esquema de vacinação da vacina SCR e, portanto, a vacina SCR-V pode ser usada nas duas doses.<br/>    Para crianças até 11 anos, o intervalo mínimo entre doses é de três meses. Já para adolescentes e adultos suscetíveis são indicadas duas doses com intervalo de um a dois meses.<br/>    Em situação de surto na comunidade ou na creche/escola, ou ainda quando há um caso de varicela dentro de casa, a vacina pode ser aplicada em bebês a partir de 9 meses — essa dose aplicada antes de 12 meses será desconsiderada. A criança deverá tomar as duas doses de rotina, aos 12 meses e entre 15 e 24 meses de idade.<br/>",
    reacoes: "A vacina varicela é segura em indivíduos imunocompetentes, com taxa de eventos adversos variando de 5% a 35%. Imunodeprimidos podem apresentar eventos adversos mais intensos, embora raramente graves.<br/>    Em 26% dos vacinados ocorre dor no local da aplicação e em 5% ocorre vermelhidão. Em 1% a 3% podem ser observadas vesículas próximas ao local da aplicação.<br/>    De 3% a 5% dos indivíduos apresentam exantema pelo corpo, semelhante às lesões causadas pela varicela, com duas a cinco lesões aparecendo entre cinco e 26 dias após a vacinação. Já as lesões que surgem duas ou mais semanas após a aplicação da vacina são indicativas da doença provocada pelo vírus varicela zóster que foi adquirido antes da vacinação e ficou incubado.<br/>",
    indicacoes: "É recomendada de rotina para crianças a partir de 12 meses (excepcionalmente, em situações de surto, por exemplo, também para crianças menores, a partir de 9 meses).<br/>    Todas as crianças, adolescentes e adultos suscetíveis (que não tiveram catapora) devem ser vacinados.<br/>",
    contraindicacoes: "Pessoas que tiveram anafilaxia causada por qualquer dos componentes da vacina ou após dose anterior, e gestantes.<br/>    Pessoas com deficiência do sistema imunológico, seja por doença ou tratamento imunossupressor, devem ser consultadas por um médico para a indicação, pois muitas vezes os danos causados pelo adoecimento é maior que o risco oferecido pela vacina.<br/>",
    viaaplicacao: "Subcutânea.",
    preco: 156.52
  },
  {
    id: 13,
    grupo: [8, 14, 15],
    nome: "Combinadas à DTPa",
    sobre: "DTPa-VIP/Hib: Além dos componentes da vacina tríplice bacteriana acelular (DTPa), contém componente da bactéria <span class='italico'>Haemophilus influenzae</span> tipo b conjugado e vírus inativados (mortos) da poliomielite tipos 1, 2 e 3. A composição inclui ainda: lactose, cloreto de sódio, 2-fenoxietanol, hidróxido de alumínio e água para injeção. Pode conter traços de antibiótico (estreptomicina, neomicina e polimixina B), formaldeído e soroalbumina de origem bovina. <br/> <br/> Vacina quíntupla acelular (DTPa-VIP/Hib) — também conhecida como “penta”, inclui a tríplice bacteriana acelular (DTPa), a poliomielite inativada (VIP) e a <span class='italico'>Haemophilus influenzae</span> tipo b (Hib). <br /> <br/> Vacina sêxtupla acelular (DTPa-VIP-HB/Hib) — também conhecida como “hexa”, inclui a tríplice bacteriana acelular (DTPa), a poliomielite inativada (VIP), a hepatite B (HB) e a <span class='italico'>Haemophilus influenzae</span> tipo b (Hib).",
    prevencao: "DTPa-VIP/Hib: difteria, tétano, coqueluche, meningite por <span class='italico'>Haemophilus influenzae</span> tipo b e poliomielite. <br /> <br /> DTPa-VIP-HB/Hib: difteria, tétano, coqueluche, meningite por <span class='italico'>Haemophilus influenzae</span> tipo b, poliomielite e hepatite B.",
    posologia: "Para a vacinação rotineira de crianças (aos 2, 4, 6 meses e entre 12 e 18 meses), preferir o uso da vacina quíntupla (penta) ou sêxtupla (hexa). Veja DTPa-VIP/Hib ou DTPa-VIP-HB/Hib. Para reforço entre 4 e 5 anos de idade, recomenda-se o uso de DTPa ou dTpa-VIP.",
    reacoes: "Os eventos adversos e a frequência com que ocorrem são semelhantes nas duas vacinas e devem-se principalmente ao componente <span class='italico'>pertussis</span>. Estudo comparativo mostrou que as reações a estas vacinas foram significativamente menores quando comparadas com a vacina combinada contra <span class='italico'>pertussis</span> de células inteiras (DTPw).<br/>    Até 21% das crianças vacinadas experimentam reações no local da aplicação (vermelhidão, dor, inchaço); até 22% podem ter febre maior que 38ºC; e 1,9% pode ter febre a partir de 40ºC. Um por cento pode manifestar perda de apetite, vômito, irritabilidade, choro persistente e sonolência. De 0,01% a 1% pode apresentar convulsão febril e episódio hipotônico-hiporresponsivo (EHH); menos de 0,01%, problemas neurológicos (inflamação no cérebro, alterações de movimento), inchaço transitório nas pernas com roxidão ou pequenos sangramentos transitórios, e anafilaxia. Os eventos adversos são um pouco mais frequentes nas doses de reforço.<br/>",
    indicacoes: "As duas vacinas são recomendadas para crianças a partir de 2 meses de idade e podem ser aplicadas até os 7 anos, sempre que seja indicada cada uma das vacinas incluídas nessas combinações.",
    contraindicacoes: "Maiores de 7 anos.<br/>    Crianças que apresentaram encefalopatia nos sete dias seguintes à aplicação anterior de vacina contendo componente <span class='italico'>pertussis</span>.<br/>    Anafilaxia a qualquer componente da vacina.<br/>",
    viaaplicacao: "Intramuscular.",
    preco: 210.54
  },
  {
    id: 14,
    grupo: [7, 11, 15, 16, 18],
    nome: "Febre Amarela",
    sobre: "No Brasil estão disponíveis duas vacinas: a produzida por Bio-Manguinhos – Fiocruz, utilizada pela rede pública, e a produzida pela Sanofi Pasteur, utilizada pelos serviços privados de vacinação e eventualmente pela rede pública. Ambas são elaboradas a partir de vírus vivo atenuado, cultivado em ovo de galinha. A vacina de Biomanguinhos apresenta em sua formulação gelatina bovina, eritromicina, canamicina, cloridrato de L-histidina, L-alanina, cloreto de sódio e água para injeção. Já a da Sanofi Pasteur contém: lactose, sorbitol, cloridrato de L-histidina, L-alanina e solução salina.<br/><br/>As duas têm perfis de segurança e eficácia semelhantes, estimados em mais de 95% para maiores de 2 anos.<br/><br/>É importante ressaltar que os estudos para o uso de doses fracionadas, recomendado apenas durante campanhas do Ministério da Saúde, em localidades e períodos bem definidos, foram realizados apenas com a vacina de Bio-Manguinhos. Não há, portanto, autorização para a administração de doses fracionadas da vacina da Sanofi Pasteur.",
    prevencao: "Febre amarela.",
    posologia: "Crianças até 4 anos: duas doses, aos 9 meses e aos 4 anos.<br/>    Acima de 4 anos: Não há consenso sobre a duração da proteção conferida pela vacina. De acordo com o risco epidemiológico, uma segunda dose pode ser considerada pela possibilidade de falha vacinal.<br/><br/>Observação: O Ministério da Saúde usou em 2018 doses fracionadas como forma de conter o surto vigente na ocasião. A estratégia é reconhecida pela Organização Mundial de Saúde (OMS) como segura e eficaz.  <br/> <br/> Exigência de vacinação para viajantes: <br/> <a href='http://www.who.int/ith/2017-ith-annex1.pdf?ua=1&ua=1&ua=1'> Como o Brasil é considerado endêmico para a febre amarela, alguns países (acesse a lista) só permitem a entrada de viajantes brasileiros que apresentem o Certificado Internacional de Vacinação e Profilaxia (CIVP) com registro de dose aplicada no mínimo 10 dias da viagem. A dose fracionada não é válida para esse fim. </a> <br/> <a href='https://www.gov.br/pt-br/servicos/obter-o-certificado-internacional-de-vacinacao-e-profilaxia'> Para obter o documento é necessário procurar os serviços públicos ou privados habilitados ou acessar o site da Agência Nacional de Vigilância Sanitária (Anvisa) para emissão online. Mais informações em https://www.gov.br/pt-br/servicos/obter-o-certificado-internacional-de-vacinacao-e-profilaxia ou por meio do telefone 0800-642-9782. </a> <br/> <a href='https://civnet.anvisa.gov.br/app/viajante/login?wicket-crypt=CMd8D9wZbAY'> Quando há contraindição para a vacinação, o médico(a) poderá emitir o certificado de isenção da vacinação contra febre amarela com a justificativa da isenção. Para informações sobre como obter este certificado, acesse https://civnet.anvisa.gov.br/app/viajante/login?wicket-crypt=CMd8D9wZbAY </a>",
    reacoes: "Manifestações gerais, como febre, dor de cabeça e muscular são os eventos mais frequentes e acontecem em cerca de 4% dos que são vacinados na primeira vez e menos de 2% nas segundas doses.<br/>    Manifestações locais como dor na área de aplicação ocorrem em 4% dos adultos vacinados e um pouco menos em crianças pequenas. A dor dura um ou dois dias, na forma leve ou moderada.<br/>    Reações alérgicas como erupções na pele, urticária e asma acontecem com frequência de um caso para 130 mil a 250 mil vacinados.<br/>    Apesar de muito raros, podem acontecer eventos graves: reações alérgicas, doença neurológica (encefalite, meningite, doenças autoimunes com envolvimento do sistema nervoso central e periférico) e doença em órgãos (infecção pelo vírus vacinal causando danos semelhantes aos da doença). No Brasil, entre 2007 e 2012, a ocorrência destes eventos graves foi de 0,42 caso por cem mil vacinados.<br/>    Entre 1999 e 2009, ocorreu anafilaxia na proporção de 0,023 caso para cem mil doses aplicadas.<br/>    Entre 2007 e 2012, aconteceram 116 casos (0,2 caso em cem mil vacinados) de doença neurológica, principalmente quando se tratava de primeira dose e em idosos. Já a doença nos órgãos, chamada “viscerotrópica”, neste mesmo período, ocorreu em 21 pessoas (0,04 caso em cem mil vacinados).<br/>",
    indicacoes: "Pessoas a partir de 9 meses de idade.",
    contraindicacoes: "Crianças abaixo de 6 meses de idade.<br/>    Indivíduos infectados pelo HIV, sintomáticos e com imunossupressão grave comprovada por exame de laboratório.<br/>    Pessoas com imunodepressão grave por doença ou uso de medicação.<br/>    Pacientes que tenham apresentado doença neurológica desmielinizante no período de seis semanas após a aplicação de dose anterior da vacina.<br/>    Gestantes, salvo em situações de alto risco de infecção, o que deve ser avaliado pelo médico;<br/>    Mulheres amamentando bebês com até 6 meses. Se a vacinação não puder ser evitada, suspender o aleitamento materno por 10 dias. Procure o pediatra para mais orientações.<br/>    Pacientes submetidos a transplante de órgãos.<br/>    Pacientes com câncer.<br/>    Pessoas com história de reação anafilática relacionada a substâncias presentes na vacina (ovo de galinha e seus derivados, gelatina bovina ou outras).<br/>    Pacientes com história pregressa de doenças do timo (miastenia gravis, timoma, casos de ausência de timo ou remoção cirúrgica).<br/>    Em princípio há contraindicação para gestantes, mas a administração deve ser analisada de acordo com o grau de risco, por exemplo, na vigência de surtosrianças abaixo de 6 meses de idade.<br/>",
    viaaplicacao: "Subcutânea.",
    manifestsistemicas: "Exigência de vacinação para viajantes<br/><br/>Como o Brasil é considerado endêmico para a febre amarela, alguns países (acesse a lista) só permitem a entrada de viajantes brasileiros que apresentem o Certificado Internacional de Vacinação e Profilaxia (CIVP) com registro de dose aplicada no mínimo 10 dias da viagem. A dose fracionada não é válida para esse fim.<br/><br/>Para obter o documento é necessário procurar os serviços públicos ou privados habilitados ou acessar o site da Agência Nacional de Vigilância Sanitária (Anvisa) para emissão online. Mais informações em https://www.gov.br/pt-br/servicos/obter-o-certificado-internacional-de-vacinacao-e-profilaxia ou por meio do telefone 0800-642-9782.<br/><br/>Quando há contraindição para a vacinação, o médico(a) poderá emitir o certificado de isenção da vacinação contra febre amarela com a justificativa da isenção. Para informações sobre como obter este certificado, acesse https://civnet.anvisa.gov.br/app/viajante/login?wicket-crypt=CMd8D9wZbAY",
    preco: 103.13
  },
  {
    id: 15,
    grupo: [18],
    nome: "Pneumocócica Polissacarídica 23-valente – VPP23",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta de partículas purificadas (polissacarídeos) das cápsulas de 23 tipos de <span class='italico'>Streptococcus pneumoniae</span> (pneumococo), cloreto de sódio, água para injeção e fenol.",
    prevencao: "Doenças causadas por 23 tipos de pneumococos.",
    posologia: "Recomenda-se a combinação da VPP23 com a VPC13. Idealmente, deve-se iniciar o esquema com a aplicação de vacina pneumocócica conjugada (VPC10 ou VPC13) e aplicar uma dose da VPP23 seis a 12 meses depois da dose da vacina conjugada, e outra cinco anos após a primeira dose de VPP23.<br/>Na maioria das vezes não se recomenda aplicar mais de duas doses de VPP23.",
    reacoes: "As reações adversas mais frequentes, que ocorrem com mais de 10% dos vacinados, são: dor no local da aplicação (60,0%), inchaço ou endurecimento (20,3%); vermelhidão (em 16,4%); dor de cabeça (17,6%); cansaço (13,2%) e dor muscular (11,9%). Reações locais mais intensas, com inchaço de todo braço, chegando até o cotovelo, hematoma e manchas vermelhas podem ocorrer em menos de 10% dos vacinados.<br/>    Todas as reações adversas são mais frequentes após revacinação em intervalos curtos em relação a doses anteriores. Acredita-se que estejam relacionadas com a presença de grande quantidade de anticorpos no organismo.<br/>",
    indicacoes: "Para crianças acima de 2 anos, adolescentes e adultos que tenham algum problema de saúde que aumenta o risco para doença pneumocócica (diabetes, doenças cardíacas e respiratórias graves; sem baço ou com o funcionamento comprometido desse órgão; com problemas de imunidade, entre outras condições).<br/>Para pessoas a partir de 60 anos deve ser aplicada de rotina.<br/>Não é recomendada como rotina para crianças, adolescentes e adultos saudáveis.",
    contraindicacoes: "Crianças, adolescentes e adultos que apresentaram anafilaxia causada por algum componente ou dose anterior da vacina.",
    viaaplicacao: "Intramuscular.",
    preco: 72.26
  },
  {
    id: 16,
    grupo: [12, 14, 15, 16, 17, 18],
    nome: "Tríplice Bacteriana Acelular do Tipo Adulto – dTpa",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>Contém os toxoides diftérico e tetânico (derivados das toxinas produzidas pelas bactérias causadoras das doenças), e componentes da cápsula da bactéria da coqueluche (<span class='italico'>Bordetella pertussis</span>), sal de alumínio como adjuvante, fenoxietanol, cloreto de sódio e água para injeção.<br/><br/>A quantidade de toxoide diftérico e de componentes <span class='italico'>pertussis</span> é menor que na vacina infantil (DTPa).",
    prevencao: "Difteria, tétano e coqueluche.",
    posologia: "Pode ser usada para a dose de reforço prevista para os 4-5 anos de idade.<br/>    Recomendada para o reforço na adolescência.<br/>    Recomendada para os reforços em adultos e idosos.<br/>    Para crianças com mais de 7 anos, adolescentes e adultos que não tomaram ou sem registro de três doses de vacina contendo o toxoide tetânico anteriormente, recomenda-se uma dose de dTpa seguida de duas ou três doses da dT.<br/>    As gestantes devem receber uma dose de dTpa, a cada gestação, ​a partir da 20ª semana de gestação. ​Se não vacinadas durante a gravidez, devem receber uma dose após o parto​, o mais precocemente possível (de preferência ainda na maternidade).<br/>    Para crianças com mais de 3 anos, adolescentes e adultos não vacinados, com histórico vacinal desconhecido ou esquema básico contra o tétano incompleto: uma dose de dTpa a qualquer momento, seguida de uma ou duas outras doses da dT (dependendo de quantas faltam para completar o esquema de três doses contra o tétano). A vacina dTpa pode substituir a vacina dT.<br/>",
    reacoes: "Em crianças com até 9 anos podem ocorrer: irritabilidade, sonolência, reações no local da aplicação (dor, vermelhidão e inchaço) e fadiga em mais de 10% dos vacinados. Até 10% podem manifestar falta de apetite, dor de cabeça, diarreia, vômito e febre. Distúrbios da atenção, irritação nos olhos e erupção na pele são incomuns – acometem apenas 0,1% a 1% dos vacinados.<br/>    Mais de 10% das crianças a partir de 10 anos, adolescentes e adultos experimentam dor de cabeça, reações no local da aplicação (dor, vermelhidão e inchaço), cansaço e mal-estar. Em até 10% acontecem tontura, náusea, distúrbios gastrintestinais, febre, nódulo ou abscesso estéril (sem infecção) no local da aplicação. São incomuns (entre 0,1% e 1% dos vacinados) sintomas respiratórios, faringite, aumento dos gânglios linfáticos, síncope (desmaio), tosse, diarreia, vômito, transpiração aumentada, coceira, erupção na pele, dor articular e muscular e febre acima de 39ºC.<br/>    A anafilaxia ocorre com menos de 0,01% das pessoas; inchaço generalizado, convulsões, urticária e fraqueza muscular com 0,01% a 0,1% dos vacinados.<br/>    A experiência com o uso da vacina sugere que há um pequeno aumento do risco de eventos adversos locais com a vacinação em doses repetidas e próximas (esquema de três doses em seis meses) em adultos com mais de 40 anos, bem como na dose de reforço das crianças (a partir de 10 anos de idade).<br/>",
    indicacoes: "Para reforço das vacinas DTPa ou DTPw em crianças a partir de 3 anos de idade, adolescentes e adultos.<br/>    Gestantes.<br/>    Todas as pessoas que convivem com crianças menores de 2 anos, sobretudo com bebês com menos de 1 ano, incluindo familiares, babás, cuidadores e profissionais da Saúde.<br/>",
    contraindicacoes: "Pessoas que apresentaram anafilaxia ou sintomas neurológicos causados por algum componente da vacina ou após a administração de dose anterior.",
    viaaplicacao: "Intramuscular.",
    preco: 144.30
  },
  {
    id: 17,
    grupo: [],
    nome: "Combinada de Hepatite A e B",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta do vírus inativado (morto) da hepatite A e da proteína de superfície do vírus da hepatite B. Também possui em sua composição: sais de alumínio, formaldeído, sulfato de neomicina, fenoxietanol, polissorbato 20, cloreto de sódio e água para injeção.",
    prevencao: "Infecções do fígado (hepatites) causadas pelos vírus da hepatite A e hepatite B.",
    posologia: "Para crianças e adolescentes a partir de 1 ano e menores de 16: duas doses com intervalo de seis meses.<br/>    Para adolescentes a partir dos 16 anos, adultos e idosos: três doses, sendo a segunda aplicada um mês após a primeira, e a terceira, cinco meses após a segunda.<br/>    Pessoas com indicação de dose dobrada da vacina hepatite B ou esquema de quatro doses devem receber complementação com a vacina hepatite B.<br/>",
    reacoes: "Reações no local da aplicação, como vermelhidão e inchaço por mais de 24 horas e dor intensa foram relatados por 1,5% dos vacinados. Eventos gerais como febre, dor de cabeça, mal-estar, cansaço, náusea e vômito ocorrem com 0,3% a 10% dos vacinados. Não há relato de eventos adversos graves, mas podemos esperar o mesmo risco que existe para as vacinas isoladas hepatite A e hepatite B.",
    indicacoes: " Crianças a partir dos 12 meses, adolescentes e adultos.<br/>    É uma boa opção para pessoas que não foram vacinadas contra as duas hepatites.<br/>",
    contraindicacoes: "Pessoas que apresentaram anafilaxia provocada por qualquer componente da vacina ou por dose anterior.<br/>    Pessoas que desenvolveram púrpura trombocitopênica após dose anterior de vacina com antígenos do vírus da hepatite B.<br/>",
    viaaplicacao: "Intramuscular profunda.",
    preco: 182.25
  },
  {
    id: 18,
    grupo: [18],
    nome: "Herpes Zóster",
    sobre: "Trata-se de vacina composta por vírus vivos atenuados da varicela zóster (VVZ) da cepa Oka/Merck, sacarose, gelatina, ureia, cloreto de sódio, levoglutamato de sódio monoidratado, fosfato de sódio dibásico, fosfato de potássio monobásico, cloreto de potássio, traços de neomicina e de soro de bezerro e água para injeção. Não contém conservantes.",
    prevencao: "O herpes zóster, popularmente conhecido como “cobreiro”, e sua principal complicação, a neuropatia pós-herpética, responsável por dor crônica, prolongada, de difícil controle e extremamente debilitante.",
    posologia: "Uma dose.",
    reacoes: "A segurança da vacina foi avaliada em mais de 30 mil indivíduos acima de 50 anos, inclusive em maiores de 60, 70 e 80 anos, mesmo naqueles com doenças de base (cardiopatias, pneumopatias, diabetes, etc.).<br/><br/>A incidência de eventos adversos no local da aplicação foi de 34% nos indivíduos que receberam a vacina e de 6% nos indivíduos do estudo que receberam placebo ao invés de vacina. Em geral, foram manifestações de leves a moderadas: coceira, vermelhidão, inchaço, dor.<br/><br/>Entre os eventos gerais relatados estão:<br/><br/>    Febre: ocorreu em menos de 1% dos vacinados.<br/>    Sintomas respiratórios: em 1,7% dos vacinados.<br/>    Diarreia: em 1,5% dos vacinados.<br/>    Alterações na pele: em 1,1% dos vacinados.<br/>    Cansaço: em 1,0% dos vacinado.",
    indicacoes: "A vacina está licenciada para pessoas com 50 anos ou mais e é recomendada como rotina para maiores 60 anos de idade.",
    contraindicacoes: "Pessoas imunodeprimidas.<br/>    Alergia grave (anafilaxia) a algum dos componentes da vacina.<br/>    Pessoas com tuberculose ativa não tratada.<br/>    Gestantes.<br/>",
    viaaplicacao: "Subcutânea.",
    preco: 498.22
  },
  {
    id: 19,
    grupo: [13, 14, 16],
    nome: "HPV4",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença.<br/><br/>É composta pelas proteínas L1 dos papilomavírus humano (HPV) tipos 6,11,16,18, sulfato de hidroxifosfato de alumínio, cloreto de sódio, L-histidina, polissorbato 80, borato de sódio e água para injeção.",
    prevencao: "Infecções persistentes e lesões pré-cancerosas causadas pelos tipos de HPV 6,11,16,18. Também previne o câncer de colo do útero, da vulva, da vagina, do ânus e verrugas genitais (condiloma).",
    posologia: "A vacina é licenciada para meninas e mulheres a partir dos 9 anos aos 45 anos e para meninos e homens entre 9 e 26 anos. O esquema deve ser iniciado o mais cedo possível.<br/>    São recomendadas duas ou três doses, dependendo da idade de início da vacinação.<br/>    Para meninas e meninos de 9 a 14 anos, 11 meses e 29 dias são indicadas duas doses, com intervalo de seis meses entre elas (0 - 6 meses).<br/>    A partir dos 15 anos, são três doses: a segunda, um a dois meses após a primeira, e a terceira, seis meses após a primeira dose (0 - 1 a 2 - 6 meses).<br/>    Independentemente da idade, pessoas imunodeprimidas por doença ou tratamento devem receber três doses: a segunda, um a dois meses após a primeira, e a terceira, seis meses após a primeira dose (0 - 1 a 2 - 6 meses).<br/>",
    reacoes: "Na Inglaterra, após dois anos de incorporação da vacina no calendário do governo, e da administração de 4,5 milhões de doses, somaram-se 4.703 eventos adversos. Desse total, 17% foram manifestações no local da aplicação (dor, vermelhidão e inchaço); 11%, manifestações alérgicas (urticária e prurido); e 37%, manifestações gerais como náuseas, vômitos e dor de cabeça. Foram registradas ainda reações psicogênicas (21%) descritas como pânico e desmaios causados pelo medo da injeção e não pela vacina – principalmente em adolescentes e mulheres jovens. Não ocorreu nenhum caso de doença neurológica, paralisia ou doença autoimune.",
    indicacoes: "O Programa Nacional de Imunizações (PNI) disponibiliza a vacina para:<br/>        Meninas de 9 a 14 anos de idade;<br/>        Meninas de 15 anos que já tenham tomado uma dose;<br/>        Meninos de 11 a 14 anos;<br/>        Indivíduos de 9 a 26 anos de ambos os sexos nas seguintes condições: convivendo com HIV/Aids; pacientes oncológicos em quimioterapia e/ou radioterapia; transplantados de órgãos sólidos ou de medula óssea.<br/>    A Sociedade Brasileira de Pediatria (SBP), a Sociedade Brasileira de Imunizações (SBIm) e a Federação Brasileira das Associações de Ginecologia e Obstetrícia (Febrasgo) recomendam a vacinação de meninas e mulheres de 9 a 45 anos de idade e meninos e jovens de 9 a 26 anos, o mais precocemente possível. Homens e mulheres em idades fora da faixa de licenciamento também podem ser beneficiados com a vacinação, de acordo com critério médico.<br/>",
    contraindicacoes: "Gestantes e pessoas que apresentaram anafilaxia após receber uma dose da vacina ou a algum de seus componentes.",
    viaaplicacao: "Intramuscular.",
    preco: 549.96
  },
  {
    id: 20,
    grupo: [2, 4, 6, 9, 10, 12, 14, 15, 16],
    nome: "Tríplice Bacteriana Acelular do Tipo Adulto com Poliomielite – dTpa-VIP",
    sobre: "Trata-se de vacina inativada, portanto, não tem como causar a doença. <br/><br/> Contém os toxoides diftérico e tetânico (derivados das toxinas produzidas pelas bactérias causadoras das doenças), componentes da cápsula da bactéria da coqueluche (<span class='italico'>Bordetella pertussis</span>), vírus da poliomielite inativados (mortos) tipos 1, 2 e 3, sal de alumínio como adjuvante, 2-fenoxietanol, polissorbato 80, cloreto de sódio e água para injeção.<br/><br/>Pode conter ainda traços de formaldeído, neomicina e polimixina B usados no processo de fabricação.",
    prevencao: "Difteria, tétano, coqueluche e poliomielite.",
    posologia: "<a href='https://familia.sbim.org.br/vacinas/vacinas-disponiveis/vacina-triplice-bacteriana-acelular-do-tipo-adulto-dtpa'>Pode substituir qualquer dose de dTpa. Em caso de viagens a locais de risco para a poliomielite, pode ser aplicada mesmo em pessoas que estejam em dia com a dTpa.</a>",
    reacoes: "Em crianças, ocorrem em mais de 10% dos vacinados: sonolência e reações no local da aplicação (dor, vermelhidão e inchaço). Entre 1% e 10% dos vacinados podem apresentar perda de apetite, irritabilidade, dor de cabeça e febre acima de 37,5ºC. Entre 0,1% a 1%: aumento dos gânglios, sono inquieto, apatia, garganta seca, diarreia, vômito, dor abdominal, náusea e cansaço.<br/> Em adolescentes e adultos, ocorrem em mais de 10% dos vacinados: dor de cabeça, reações no local da aplicação (dor, vermelhidão e inchaço) e cansaço. Entre 1% a 10% dos vacinados: distúrbios gastrintestinais, febre acima de 37,5ºC, hematoma no local da aplicação. Entre 0,1% e 1% dos vacinados ocorrem: aumento dos gânglios, diminuição do apetite, sensação de formigamento, sonolência, tontura, coceira, dor muscular, dor nas articulações, febre acima de 39ºC, calafrios.<br/>",
    indicacoes: "Para crianças a partir de 3 ou 4 anos de idade, adolescentes e adultos, para os reforços de seus esquemas de vacinação.<br/>    Pode substituir as formulações infantis da vacina tríplice bacteriana (DTPa e suas combinações) no reforço de 4 a 5 anos de idade.<br/>    Para adolescentes e adultos, pode substituir a vacina dTpa e é a alternativa para viajantes com destinos às áreas de risco para poliomielite.<br/>    Para gestantes, pode substituir a dTpa na indisponibilidade desta vacina ou quando se trata de gestante viajante para área de risco para a poliomielite.<br/>",
    contraindicacoes: "Pessoas que apresentaram anafilaxia após uso de componentes da vacina ou dose anterior.",
    viaaplicacao: "Intramuscular.",
    preco: 144.30
  }
];

const queryString = window.location.search;

function filtragemVacinas(obj, id) {
  if (id != null) {
    for ($i = 0; $i < obj.length; $i++) {
      console.log(obj[i].id);
    }
  }
  return true;
}


if (queryString !== "") {
  const urlParams = new URLSearchParams(queryString);
  const idSelect = urlParams.get('id');

  const vacinasDiv = (vacinas.filter(
    subVacinas => subVacinas.grupo.includes(parseInt(idSelect)))
  ).map((item, i) => {
    return `<div class="vacina-calendario">
              <a href="https://www.panvel.com/panvel/vacina-detalhe.do?id=${item.id}"><h3>${item.nome}</h3></a>
              <a class="vacina-item-link" href="https://www.panvel.com/panvel/vacina-detalhe.do?id=${item.id}">
                Mais Informações
              </a>
              <button class="vacina-item-btn">Agendar vacina</button>
            </div>`;

  });

  document.querySelector(".vacinas").innerHTML = vacinasDiv.join("");

} else {
  const vacinasDiv = vacinas.map((item, i) => {
    return `<div class="vacina-calendario">
            <a href="https://www.panvel.com/panvel/vacina-detalhe.do?id=${item.id}"><h3>${item.nome}</h3></a>
            <a class="vacina-item-link" href="https://www.panvel.com/panvel/vacina-detalhe.do?id=${item.id}">
              Mais Informações
            </a>
            <button class="vacina-item-btn">Agendar vacina</button>
          </div>`;
  });

  document.querySelector(".vacinas").innerHTML = vacinasDiv.join("");

  var btnVacinas = document.getElementsByClassName('vacina-item-btn');

  for (let i = 0; i <= btnVacinas.length; i++) {
    btnVacinas[i].onclick = function () {
      modal.style.display = "block";
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }

}