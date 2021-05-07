function orderDataAlphabetically(data) {
    const orderedData = data.sort(
        (valueA, valueB) =>
            valueA.Estado.localeCompare(valueB.Estado) ||
            valueA.Cidade.localeCompare(valueB.Cidade) ||
            valueA.Bairro.localeCompare(valueB.Bairro),
    )

    return orderedData;
}

function filtrarDadosPanvel(data) {     
    debugger;
    const capitalizarLetra = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

    for(endereço of data){
        endereço.Bairro = endereço.Bairro.trim();
        endereço.Cidade = endereço.Cidade.trim();
        endereço.Cidade = capitalizarLetra(endereço.Cidade);

        if (endereço.Cidade == "Porto Alegre" && endereço.Bairro == "Centro"){
          endereço.Bairro = "Centro Histórico";
        }
        endereço.Estado = endereço.Estado.trim();
        endereço.UF = endereço.UF.trim();
    };

    return data;
}

const dataExameSaliva = [
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeirinha",
        "Endereço": "Av. General Flores da Cunha, nº843 - Loja 01 e 02",
        "Bairro": "Vila Veranópolis",
        "CEP": "94.910-001",
        "Unidade": "CACHOEIRINHA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "R. Tiradentes, nº 316 - Loja 13",
        "Bairro": "Centro",
        "CEP": "92.010-260",
        "Unidade": "CANOAS CENTRO",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Av. Ferreira Viana nº380",
        "Bairro": "Areal",
        "CEP": "96.085-000",
        "Unidade": "ANTONELLO - FERREIRA VIANA",
        "Atendimento": "Segunda a Sexta: das  07 às 18h Sábado: 7h as 12h",
        "Coleta": "Segunda a Sexta:das  07 às 18h Sábado: 7h as 10h"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Nilo Peçanha , nº 2606 e 2610",
        "Bairro": "Chácara das Pedras",
        "CEP": "91.330-001",
        "Unidade": "NILO PEÇANHA ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 16:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Ipiranga, nº 50 - Loja 20",
        "Bairro": "Praia de Belas",
        "CEP": "90.160-090",
        "Unidade": "TREND ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30  sábado das 08:00 às 10:00"
    }
]

const dataExameAnticorpos = [
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Alvorada",
        "Endereço": "R. Elpidio Correia da Silveira, nº 100 - Loja 08",
        "Bairro": "Bela Vista",
        "CEP": "94.801-970",
        "Unidade": "BIG",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeirinha",
        "Endereço": "Av. General Flores da Cunha, nº843 - Loja 01 e 02",
        "Bairro": "Vila Veranópolis",
        "CEP": "94.910-001",
        "Unidade": "CACHOEIRINHA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Campo Bom",
        "Endereço": "Rua Tiradentes, nº 109 - loja 104",
        "Bairro": "Centro",
        "CEP": "93700-970",
        "Unidade": "CAMPO BOM ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 16:00  sábado das 07:00 às 10:30"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "R. Tiradentes, nº 316 - Loja 13",
        "Bairro": "Centro",
        "CEP": "92.010-260",
        "Unidade": "CANOAS CENTRO",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "Av. Rio Grande do Sul, nº 741 - Loja 01 e 02",
        "Bairro": "Mathias Velho",
        "CEP": "92.330-000",
        "Unidade": "MATHIAS",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 14:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "R. Fioravante Milanez, nº 50Loja 01, nº 52 - Loja 02 nº 58, salas 304 e 307",
        "Bairro": "Centro",
        "CEP": "92.010-240",
        "Unidade": "CEC - Centro Especializado de Citologia",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 16:20 sábado das 08:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Esteio",
        "Endereço": "R. Padre Felipe - nº 69 - Loja 03",
        "Bairro": "Centro",
        "CEP": "93.265-157",
        "Unidade": "ESTEIO CENTRO",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Esteio",
        "Endereço": "R. dos Ferroviarios, nº 83",
        "Bairro": "Centro",
        "CEP": "93.265-150",
        "Unidade": "CLARET X",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:00  sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ivoti",
        "Endereço": "Av. Presidente Lucena, nº 3598",
        "Bairro": "Centro",
        "CEP": "93900-000",
        "Unidade": "IVOTI ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado não atende",
        "Coleta": "das 07:00 às 11:30 e das 14:00 às 15:30"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "R. Joaquim Nabuco, nº 1050 - Sala 01",
        "Bairro": "Centro",
        "CEP": "93310-002",
        "Unidade": "MATRIZ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 16:30  sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "R. Tupi, nº 975 - Térreo",
        "Bairro": "Rio Branco",
        "CEP": "93320-050",
        "Unidade": "TUPI ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 19:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 18:00  sábado das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Rua Cinco de Abril, 618 - sala 01",
        "Bairro": "Centro",
        "CEP": "93310-030",
        "Unidade": "CINCO DE ABRIL ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 16:00  sábado das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Rua Bartolomeu de Gusmão, nº 279",
        "Bairro": "Canudos",
        "CEP": "93542-000",
        "Unidade": "CANUDOS",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 15:00 sábado das 07:30 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Rua David Canabarro nº 28 - sala 51",
        "Bairro": "Centro",
        "CEP": "93510-020",
        "Unidade": "MULTICLINICA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado não atende",
        "Coleta": "das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Rua Padre Anchieta nº1620",
        "Bairro": "Centro",
        "CEP": "96.015-420",
        "Unidade": "ANTONELLO - PADRE ANCHIETA",
        "Atendimento": "Segunda a Sexta:das  07 às 18h Sábado: 7h as 12h",
        "Coleta": "Segunda a Sexta: das 07 às 18h Sábado: 7h as 10h"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Av. Ferreira Viana nº380",
        "Bairro": "Areal",
        "CEP": "96.085-000",
        "Unidade": "ANTONELLO - FERREIRA VIANA",
        "Atendimento": "Segunda a Sexta: das  07 às 18h Sábado: 7h as 12h",
        "Coleta": "Segunda a Sexta:das  07 às 18h Sábado: 7h as 10h"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Anita Garibaldi, nº 637 ",
        "Bairro": "Mont Serrat",
        "CEP": "90.450-001",
        "Unidade": "ANITA GARIBALDI",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "R. Doutor Cecilio Monza, nº 10758 - Sala 01",
        "Bairro": "Belem Novo",
        "CEP": "91.780-060",
        "Unidade": "BELÉM NOVO",
        "Atendimento": "Segunda a Sexta:das 08:00 às 12:00 Sábado das 08:00 às 12:00",
        "Coleta": "das 08:00 às 10:00 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Bento Golçalves, nº 2445 - Loja 03",
        "Bairro": "Partenon",
        "CEP": "90.650-003",
        "Unidade": "BENTO",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Cavalhada, nº 3044 - Loja 03",
        "Bairro": "Cavalhada",
        "CEP": "91.740-000",
        "Unidade": "CAVALHADA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Pç. Dom Feliciano, nº 78 - Sala 104 e 105 - Edificio Uaruma ",
        "Bairro": "Centro Historico",
        "CEP": "90.020-160",
        "Unidade": "DOM NOBEL",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "R. Doutor Castro de Menezes, nº 155",
        "Bairro": "Vila Assunção",
        "CEP": "91.900-590",
        "Unidade": "HBM",
        "Atendimento": "Segunda a Sexta:das 07:00 às 19:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 19:00  sábado das 08:00 às 12:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "R.Barão do Triunfo nº 175 - Salas: 101,102,103 e 104",
        "Bairro": "Menino Deus ",
        "CEP": "90130-101",
        "Unidade": "IBCM MENINO DEUS",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado não atende",
        "Coleta": "Das 07:00 às 15:30 "
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Nilo Peçanha , nº 2606 e 2610",
        "Bairro": "Chácara das Pedras",
        "CEP": "91.330-001",
        "Unidade": "NILO PEÇANHA ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 16:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Assis Brasil, nº 1858",
        "Bairro": "Passo da Areia",
        "CEP": "91.010-001",
        "Unidade": "OBIRICI",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:00 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Otto Niemeyer, 2633",
        "Bairro": "Cavalhada",
        "CEP": "91910-200",
        "Unidade": "OTTO",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 16:00 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Economista Nilo Wulff, nº 275 - Casa 911",
        "Bairro": "Restinga",
        "CEP": "91.790-000",
        "Unidade": "RESTINGA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 14:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Assis Brasil, nº 4320 - Loja 66",
        "Bairro": "São Sebastião",
        "CEP": "91.110-001",
        "Unidade": "STRIP CENTER",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:20  sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Ipiranga, nº 50 - Loja 20",
        "Bairro": "Praia de Belas",
        "CEP": "90.160-090",
        "Unidade": "TREND ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:30  sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Grande",
        "Endereço": "Rua Aquidaban, 697",
        "Bairro": "Centro",
        "CEP": "96200-480",
        "Unidade": "LUNAV MATRIZ",
        "Atendimento": "Segunda a Sexta: das  07:00 às 18h Sábado: 7h as 11h",
        "Coleta": "das  07:00 às 18h Sábado: 7:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São José do Hortêncio",
        "Endereço": "Av. Mathias Steffens, nº 3700 - apto. 01",
        "Bairro": "Centro",
        "CEP": "95755-000",
        "Unidade": "SÃO JOSÉ DO HORTÊNCIO",
        "Atendimento": "Segunda a Sexta:das 06:30 às 11:15 Sábado não atende",
        "Coleta": "das 06:30 às 09:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São José do Norte",
        "Endereço": "Rua Carlos Bulamarque, 253",
        "Bairro": "Centro",
        "CEP": "96225-000",
        "Unidade": "LUNAV NORTE",
        "Atendimento": "Segunda a Sexta: das  07:00  às  18h",
        "Coleta": "das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Leopoldo",
        "Endereço": "Rua Primeiro de Março, nº 703 - LOJA 02 CONJ 707 LOJA 01",
        "Bairro": "Centro",
        "CEP": "93010-210",
        "Unidade": "SÃO LEOPOLDO ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 16:00  sábado das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Leopoldo",
        "Endereço": "Rua São João, nº 833",
        "Bairro": "Centro",
        "CEP": "93.010-250",
        "Unidade": "SÃO JOÃO ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado das 07:00 às 12:00",
        "Coleta": "das 07:00 às 16:00  sábado das 07:00 às 11:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Sebastião do Caí",
        "Endereço": "Rua Madre Regina Protmann, nº 567 - sala 02",
        "Bairro": "Centro",
        "CEP": "95760-000",
        "Unidade": "SÃO SEBASTIÃO DO CAÍ ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  Sábado não atende",
        "Coleta": "das 07:00 às 17:00  sábado não atende"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Sapucaia do Sul",
        "Endereço": "Professor Francisco Brochado da Rocha nº 392 - sala 09",
        "Bairro": "Centro",
        "CEP": "93.220-680",
        "Unidade": "INNOVA SAPUCAIA",
        "Atendimento": "Segunda a Sexta:das 08:00 às 12:00  e das 13:00 às 16:00 Sábado não atende",
        "Coleta": "das 08:00 às 12:00 e das 13:00 às 15:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Sapucaia do Sul",
        "Endereço": "Av. João Pereira de Vargas, nº 500 - Sala 20, 22 e 28",
        "Bairro": "Centro",
        "CEP": "93.220-190",
        "Unidade": "SAPUCAIA CLINICAS",
        "Atendimento": "Segunda a Sexta:das 07:30 às 17:45 sábado das 08:00 às 12:00",
        "Coleta": "das 07:30 às 15:30 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Sapucaia do Sul ",
        "Endereço": "R. Coronel Serafim Pereira, nº 144 - Loja 15 e 16",
        "Bairro": "Centro",
        "CEP": "93.220-110",
        "Unidade": "SAPUCAIA CENTRO ",
        "Atendimento": "Segunda a Sexta:das 07:00 às 17:00  sábado das 08:00 às 12:00",
        "Coleta": "das 07:00 às 15:00 sábado das 08:00 às 10:00"
    },
    {
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "St. Antonio da Patrulha",
        "Endereço": "R. Major João  Villar Verde, nº 44-",
        "Bairro": "Centro",
        "CEP": "95.500-000",
        "Unidade": "SANTO ANTº PATRULHA",
        "Atendimento": "Segunda a Sexta:das 07:00 às 11:30 e das 14:00 às 17:00 Sábado não atende",
        "Coleta": "das 07:00 às 11:30 e das 14:00 às 15:30"
    }
]

const dataPanvel = [
    {
        "Filial": "4",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Borges de Medeiros, 589- e 595",
        "Bairro": "Centro",
        "Telefone": "51-995794726"
    },
    {
        "Filial": "5",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Azenha, 693",
        "Bairro": "Azenha",
        "Telefone": "51-995949390"
    },
    {
        "Filial": "6",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Voluntários da Pátria, 92",
        "Bairro": "Centro",
        "Telefone": "51-995092302"
    },
    {
        "Filial": "7",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Azenha, 1.401",
        "Bairro": "Azenha",
        "Telefone": "51-998879142"
    },
    {
        "Filial": "9",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Protásio Alves, 2640",
        "Bairro": "Petrópolis",
        "Telefone": " 51-999659303"
    },
    {
        "Filial": "10",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 1238",
        "Bairro": "Centro Histórico",
        "Telefone": "51-998839693"
    },
    {
        "Filial": "11",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 1401",
        "Bairro": "Centro Histórico",
        "Telefone": "51-998905439"
    },
    {
        "Filial": "13",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua João Wallig, 1800 Lj. JW 13-Iguatemi ",
        "Bairro": "Passo D’areia",
        "Telefone": "51-996915283"
    },
    {
        "Filial": "15",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Borges de Medeiros,  255",
        "Bairro": "Centro Histórico",
        "Telefone": "51-997837845"
    },
    {
        "Filial": "17",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Cristóvão Colombo, 2110",
        "Bairro": "Floresta",
        "Telefone": "51-997932798"
    },
    {
        "Filial": "19",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida São Pedro, 577",
        "Bairro": "São Geraldo",
        "Telefone": "51-980586848"
    },
    {
        "Filial": "21",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Vinte e Quatro de Outubro, 742",
        "Bairro": "Moinhos de Vento",
        "Telefone": "51-995476674"
    },
    {
        "Filial": "22",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Otávio Rocha, 48",
        "Bairro": "Centro Histórico",
        "Telefone": "51-995419002"
    },
    {
        "Filial": "25",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. São Pedro, 878 – São Geraldo",
        "Bairro": "São Geraldo",
        "Telefone": "51-995140926"
    },
    {
        "Filial": "28",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Getúlio Vargas, n° 480",
        "Bairro": "Menino Deus",
        "Telefone": "51-998197432"
    },
    {
        "Filial": "29",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Ramiro Barcelos, 1115",
        "Bairro": "Independência",
        "Telefone": "51-996054860"
    },
    {
        "Filial": "30",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Sebastião do caí",
        "Endereço": "Avenida Egidio Michaelsen, 477",
        "Bairro": "Centro",
        "Telefone": "51-995638939"
    },
    {
        "Filial": "36",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Bagé",
        "Endereço": "Av. Sete de Setembro, 1121",
        "Bairro": "Centro",
        "Telefone": "51-995746732"
    },
    {
        "Filial": "38",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Cavalhada, 2955 ",
        "Bairro": "Cavalhada",
        "Telefone": "51-998075772"
    },
    {
        "Filial": "40",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Uruguaiana",
        "Endereço": "Rua Duque de Caxias, 1625",
        "Bairro": "Centro",
        "Telefone": "51-999930823"
    },
    {
        "Filial": "48",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Zeca Neto, 38",
        "Bairro": "Cristo Redentor",
        "Telefone": "51-996500557"
    },
    {
        "Filial": "53",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeira do Sul",
        "Endereço": "Rua Júlio de Castilhos, 102 ",
        "Bairro": "Centro",
        "Telefone": "51-996098809"
    },
    {
        "Filial": "62",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Livramento",
        "Endereço": "Rua dos Andradas, 51",
        "Bairro": "Centro",
        "Telefone": "51-996794288"
    },
    {
        "Filial": "70",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santiago",
        "Endereço": "Rua Getúlio Vargas, 1851 ",
        "Bairro": "Centro",
        "Telefone": "51-980367091"
    },
    {
        "Filial": "73",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Luiz Gonzaga",
        "Endereço": "Av. Sen. Pinheiro Machado, 2476",
        "Bairro": "Centro",
        "Telefone": "51-998517871"
    },
    {
        "Filial": "84",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Rosa",
        "Endereço": "Av. Rio Branco, 447 ",
        "Bairro": "Centro",
        "Telefone": "51-998639756"
    },
    {
        "Filial": "88",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santo Ângelo",
        "Endereço": "Rua Santos Dumont, 487",
        "Bairro": "Centro",
        "Telefone": "51-998067676"
    },
    {
        "Filial": "93",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Rua Santos Dumont, 487",
        "Bairro": "Centro",
        "Telefone": "51-996744795"
    },
    {
        "Filial": "95",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Grande",
        "Endereço": "Rua 24 de Maio, 400/402",
        "Bairro": "Centro",
        "Telefone": "51-998958824"
    },
    {
        "Filial": "102",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Alegrete",
        "Endereço": "Praça Presidente Getúlio Vargas, 360 ",
        "Bairro": "Centro",
        "Telefone": "51-998500986"
    },
    {
        "Filial": "104",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Praça XV de Novembro, 23 A ",
        "Bairro": "Centro",
        "Telefone": "48-991625841"
    },
    {
        "Filial": "107",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Itajaí",
        "Endereço": "Rua Olímpio Miranda Júnior, 300",
        "Bairro": "Centro",
        "Telefone": "48-991348985"
    },
    {
        "Filial": "118",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Gabriel ",
        "Endereço": "Rua General Mallet, 456 terreo",
        "Bairro": "Centro",
        "Telefone": "51-997022093"
    },
    {
        "Filial": "121",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Torres",
        "Endereço": "Av. Barão do Rio Branco, 52",
        "Bairro": "Centro",
        "Telefone": "51-999909560"
    },
    {
        "Filial": "124",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Xangri-la",
        "Endereço": "Av. Paraguassú, 4530 – Lj 02",
        "Bairro": "Centro",
        "Telefone": "51-996895541"
    },
    {
        "Filial": "129",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 1320 ",
        "Bairro": "Centro Histórico",
        "Telefone": "51-997749244"
    },
    {
        "Filial": "130",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Sapucaia do Sul",
        "Endereço": "Avenida Sapucaia, nº 2.096, sala 2102",
        "Bairro": "Primor",
        "Telefone": "51-998183362"
    },
    {
        "Filial": "141",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Doutor Nilo Peçanha, 1737",
        "Bairro": "Três Figueiras",
        "Telefone": "51-999033483"
    },
    {
        "Filial": "146",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Imbé ",
        "Endereço": "Av. Paraguassú, 1387",
        "Bairro": "Centro",
        "Telefone": "51-999057180"
    },
    {
        "Filial": "149",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Pardo",
        "Endereço": "Rua Andrade Neves, 626",
        "Bairro": "Centro",
        "Telefone": "51-995218163"
    },
    {
        "Filial": "150",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Ipiranga, 2495 – Lj 01",
        "Bairro": "Santana ",
        "Telefone": "51-999050760"
    },
    {
        "Filial": "164",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Carlos Gomes, 11 – Lj 03",
        "Bairro": "Auxiliadora",
        "Telefone": "51-996296131"
    },
    {
        "Filial": "165",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Ipiranga, 6690 - Bl 02/Prédio 60/Térreo",
        "Bairro": "Petrópolis",
        "Telefone": "51-996358912"
    },
    {
        "Filial": "167",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Otto Niemeyer, 2500 - Lojas 103 e 104",
        "Bairro": "Tristeza",
        "Telefone": "51-995106200"
    },
    {
        "Filial": "168",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Mostardeiro, 287 ",
        "Bairro": "Independência",
        "Telefone": "51-996565629"
    },
    {
        "Filial": "181",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "Rua Tiradentes, 290, loja 01 ",
        "Bairro": "Centro",
        "Telefone": "51-999594102"
    },
    {
        "Filial": "182",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Cristóvão Colombo, 545 – Lj 1224 – Sh Total",
        "Bairro": "Floresta",
        "Telefone": "51-999506579"
    },
    {
        "Filial": "189",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Garopaba",
        "Endereço": "Rua Prefeito João Araújo, 601 – sala 02",
        "Bairro": "Centro ",
        "Telefone": "48-991626077"
    },
    {
        "Filial": "191",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Avenida das Nações, nº 342 ",
        "Bairro": "Canasvieiras",
        "Telefone": "48-991277716"
    },
    {
        "Filial": "192",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Wenceslau Escobar, 2857 Lj 04",
        "Bairro": "Cristal",
        "Telefone": "51-997770130"
    },
    {
        "Filial": "193",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Tramandaí",
        "Endereço": "Av. Emancipação, 898 – Lj ¾ - Praia",
        "Bairro": "Centro",
        "Telefone": "51-997654643"
    },
    {
        "Filial": "194",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cidreira",
        "Endereço": "Av. Mostardeiros, 3213 – Salas 1 e 2",
        "Bairro": "Centro",
        "Telefone": "51-996676053"
    },
    {
        "Filial": "196",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Tapes",
        "Endereço": "Av. Assis Brasil, 412 ",
        "Bairro": "Centro",
        "Telefone": "51-996963048"
    },
    {
        "Filial": "302",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Grande",
        "Endereço": "Av. Rio Grande, 251 ",
        "Bairro": "Cassino",
        "Telefone": "51-997171571"
    },
    {
        "Filial": "304",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Grande",
        "Endereço": "Rua Doutor Nascimento, 389, 391 e 399",
        "Bairro": "Centro",
        "Telefone": "51-998791508"
    },
    {
        "Filial": "306",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Xangri-la",
        "Endereço": "Av. Paraguassú, 1214, Loja 1",
        "Bairro": "Centro",
        "Telefone": "51-998353406"
    },
    {
        "Filial": "311",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Casemiro de Abreu, 1755 e 1775",
        "Bairro": "Boa Vista",
        "Telefone": "51-997126605"
    },
    {
        "Filial": "315",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Atlantida Sul",
        "Endereço": "Av. Paraguassú, 444 ",
        "Bairro": "Centro",
        "Telefone": "51-997828588"
    },
    {
        "Filial": "322",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Guaporé, nº 324",
        "Bairro": "Petrópolis",
        "Telefone": "51-996921824"
    },
    {
        "Filial": "323",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Cristóvão Colombo, 2999",
        "Bairro": "Higienópolis",
        "Telefone": "51-996702826"
    },
    {
        "Filial": "324",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Protásio Alves, 2121",
        "Bairro": "Rio Branco ",
        "Telefone": "51-997415452"
    },
    {
        "Filial": "338",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Passo Fundo",
        "Endereço": "Rua Quinze de Novembro, 318",
        "Bairro": "Centro",
        "Telefone": "51-995661229"
    },
    {
        "Filial": "339",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Eduardo Prado, 1901, 1911, 1921 - Ljs. 2, 3 e 4 ",
        "Bairro": "Cavalhada",
        "Telefone": "51-980168063"
    },
    {
        "Filial": "340",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Osório",
        "Endereço": "Avenida Getúlio Vargas, nº 525",
        "Bairro": "Centro",
        "Telefone": "51-995804072"
    },
    {
        "Filial": "341",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Capão da Canoa",
        "Endereço": "Av. Paraguassú, 2786 ",
        "Bairro": "Centro",
        "Telefone": "51-996262255"
    },
    {
        "Filial": "343",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Valparaíso, 698 ",
        "Bairro": "Jardim Botânico",
        "Telefone": "51-980189521"
    },
    {
        "Filial": "344",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Plínio Brasil Milano, 1689 - Loja 101 H",
        "Bairro": "Higienópolis",
        "Telefone": "51-995623405"
    },
    {
        "Filial": "347",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Edgar Pires de Castro, 1395 ",
        "Bairro": "Aberta dos Morros",
        "Telefone": "51-996103844"
    },
    {
        "Filial": "349",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Doutor Nilo Peçanha, 690",
        "Bairro": "Bela Vista",
        "Telefone": "51-995008685"
    },
    {
        "Filial": "350",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 1480",
        "Bairro": "Centro ",
        "Telefone": "51-980527694"
    },
    {
        "Filial": "354",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Rosa",
        "Endereço": "Avenida Expedicionário Weber, 805 ",
        "Bairro": "Centro",
        "Telefone": "51-995715729"
    },
    {
        "Filial": "355",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Torres",
        "Endereço": "Rua Bento Gonçalves, 81",
        "Bairro": "Centro",
        "Telefone": "51-995020316"
    },
    {
        "Filial": "356",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ijuí",
        "Endereço": "Rua  Doutor Pestana, 20",
        "Bairro": "Centro",
        "Telefone": "51-995799467"
    },
    {
        "Filial": "359",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Maria",
        "Endereço": "Avenida Nossa Senhora Medianeira, 1318 ",
        "Bairro": "Centro",
        "Telefone": "51-997280969"
    },
    {
        "Filial": "362",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Esteio ",
        "Endereço": "Avenida Presidente Vargas, 2358 - Lojas 1 e 2 ",
        "Bairro": "Centro",
        "Telefone": "51-997184971"
    },
    {
        "Filial": "366",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Gramado",
        "Endereço": "Av. das Hortênsias, 1929 - Loja 101",
        "Bairro": "Centro",
        "Telefone": "51-996021666"
    },
    {
        "Filial": "367",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Avenida Ferreira Viana, nº 476",
        "Bairro": "Areal",
        "Telefone": "51-995845840"
    },
    {
        "Filial": "368",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Tramandaí",
        "Endereço": "Rua Rubem Berta, 1445",
        "Bairro": "Centro",
        "Telefone": "51-997409445"
    },
    {
        "Filial": "371",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Dois irmãos",
        "Endereço": "Avenida 25 de Julho, nº 785",
        "Bairro": "Centro",
        "Telefone": "51-996315469"
    },
    {
        "Filial": "373",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Vacaria",
        "Endereço": "Rua Julio de Castilhos, nº 1.063",
        "Bairro": "Centro",
        "Telefone": "51-997893869"
    },
    {
        "Filial": "374",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Santana, nº 1.501, loja 1",
        "Bairro": "Farroupilha",
        "Telefone": "51-998280236"
    },
    {
        "Filial": "375",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Lajeado",
        "Endereço": "Avenida Benjamin Constant, nº 1.707",
        "Bairro": "Florestal",
        "Telefone": "51-997285741"
    },
    {
        "Filial": "376",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Cavalhada, nº 2351, 2369 e 2373",
        "Bairro": "Cavalhada",
        "Telefone": "51-998258972"
    },
    {
        "Filial": "377",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Voluntários da Pátria, 423 e 429, lojas 1, 2, 3 e 4",
        "Bairro": "Centrp",
        "Telefone": "51-998356134"
    },
    {
        "Filial": "378",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Teresópolis, 3487",
        "Bairro": "Teresópolis",
        "Telefone": "51-998290613"
    },
    {
        "Filial": "379",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Flores da Cunha",
        "Endereço": "Rua Borges de Medeiros, nº 1.461, salas 01 e 02",
        "Bairro": "Centro",
        "Telefone": "51-996536494"
    },
    {
        "Filial": "380",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Blumenau",
        "Endereço": "Rua São Paulo, nº 85, loja 2",
        "Bairro": "Centro",
        "Telefone": "48-991883864"
    },
    {
        "Filial": "381",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Criciúma",
        "Endereço": "Rua Marechal Deodoro, nº 177",
        "Bairro": "Centro",
        "Telefone": "48-991581195"
    },
    {
        "Filial": "382",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Gravataí",
        "Endereço": "Avenida Dorival Cândido Luz de Oliveira, nº 680",
        "Bairro": "COHAB C",
        "Telefone": "51-996216021"
    },
    {
        "Filial": "383",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Vinte e Quatro de Outubro, 1.465",
        "Bairro": "Auxiliadora",
        "Telefone": "51-980386228"
    },
    {
        "Filial": "384",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ivoti",
        "Endereço": "Avenida Presidente Lucena, nº 3.040, loja 03",
        "Bairro": "Centro",
        "Telefone": "51-998798586"
    },
    {
        "Filial": "386",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Caxias do Sul",
        "Endereço": "Rua General Malett, 56",
        "Bairro": "Rio Branco",
        "Telefone": "51-997736171"
    },
    {
        "Filial": "389",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Eldorado do sul",
        "Endereço": "Avenida Getulio Vargas, 274",
        "Bairro": "Centro",
        "Telefone": "51-980338013"
    },
    {
        "Filial": "390",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Lagoa vermelha",
        "Endereço": "Av. Afonso Pena, 630 sala 14",
        "Bairro": "Centro",
        "Telefone": "51-980473698"
    },
    {
        "Filial": "391",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Garopaba",
        "Endereço": "Rua João Orestes de Araújo, nº 1.253",
        "Bairro": "Pinguirito",
        "Telefone": "48-991883926"
    },
    {
        "Filial": "392",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Panamericana, 670",
        "Bairro": "Jardim Lindóia",
        "Telefone": "51-998966053"
    },
    {
        "Filial": "393",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Montenegro",
        "Endereço": "Rua José Luiz, nº 1.485,",
        "Bairro": "Centro",
        "Telefone": "51-995005857"
    },
    {
        "Filial": "394",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ibiruba",
        "Endereço": "Rua General Osório, nº 878, sala 01, ",
        "Bairro": "Centro",
        "Telefone": "51-999489665"
    },
    {
        "Filial": "396",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Borja",
        "Endereço": "Rua General Marques, nº 902, Loja 1, ",
        "Bairro": "Centro",
        "Telefone": "51-999006290"
    },
    {
        "Filial": "397",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Sarmento Leite n°876, ljs 880 e 882 ",
        "Bairro": "Centro Histórico",
        "Telefone": "51-999157468"
    },
    {
        "Filial": "400",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Av. Dr. Maurício Cardoso, 833 - Sl 102",
        "Bairro": "Hamburgo Velho",
        "Telefone": "51-999568711"
    },
    {
        "Filial": "401",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 914",
        "Bairro": "Centro",
        "Telefone": "51-998050383"
    },
    {
        "Filial": "408",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Coronel Bordini, 1",
        "Bairro": "Auxiliadora",
        "Telefone": "51-998680036"
    },
    {
        "Filial": "411",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Campo bom",
        "Endereço": "Av. Brasil, 3057 ",
        "Bairro": "Centro",
        "Telefone": "51-997719429"
    },
    {
        "Filial": "424",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Rua Dom João Becker, 14",
        "Bairro": "Ingleses do Rio Vermelho",
        "Telefone": "48-991935082"
    },
    {
        "Filial": "428",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Estreito",
        "Endereço": "Rua Coronel Pedro Demoro, 1814",
        "Bairro": "Estreito",
        "Telefone": "48-991596844"
    },
    {
        "Filial": "430",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Garibaldi",
        "Endereço": "Avenida Independência, nº 195, sala comercial 1",
        "Bairro": "Centro",
        "Telefone": "51-980603594"
    },
    {
        "Filial": "440",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Ipiranga, 6681  Prédio 12B - Térreo",
        "Bairro": "Partenon",
        "Telefone": "51-995539747"
    },
    {
        "Filial": "441",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Ladislau Neto, nº 595",
        "Bairro": "Ipanema",
        "Telefone": "51-999805111"
    },
    {
        "Filial": "442",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Osvaldo Aranha, 1370 ",
        "Bairro": "Bom Fim",
        "Telefone": "51 - 996481178"
    },
    {
        "Filial": "450",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Palhoça",
        "Endereço": "Avenida Barão do Rio Branco, 509 - Loja 1 ",
        "Bairro": "Centro",
        "Telefone": "48-991271242"
    },
    {
        "Filial": "455",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Vinte e Quatro de Outubro, 722 ",
        "Bairro": "Moinhos de Vento",
        "Telefone": "51-980101329"
    },
    {
        "Filial": "456",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Diário de Notícias, 300 - Lj 1004",
        "Bairro": "Cristal",
        "Telefone": "51-999590409"
    },
    {
        "Filial": "465",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Sertório, 8000 - Sala 208 - Shopping Cassol",
        "Bairro": "Sarandi",
        "Telefone": "51-980477062"
    },
    {
        "Filial": "466",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Joinville",
        "Endereço": "Rua Paraná, n° 27",
        "Bairro": "Anita Garibaldi",
        "Telefone": "48-991296627"
    },
    {
        "Filial": "474",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Avenida Madre Benvenuta, 1260",
        "Bairro": "Santa Mônica",
        "Telefone": "48-991883856"
    },
    {
        "Filial": "475",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Rodovia Doutor Antônio Luiz Moura, 2765",
        "Bairro": "Rio Tavares",
        "Telefone": "48-991845195"
    },
    {
        "Filial": "476",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Capão da Canoa",
        "Endereço": "Av. Paraguassú, 2043",
        "Bairro": "Centro",
        "Telefone": "51-998429348"
    },
    {
        "Filial": "483",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Padre Chagas, 217",
        "Bairro": "Moinhos de Vento",
        "Telefone": "51-995650576 1"
    },
    {
        "Filial": "495",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo ",
        "Endereço": "Avenida Doutor Maurício Cardoso, 1670, lojas 1, 2 e 3 ",
        "Bairro": "Hamburgo Velho",
        "Telefone": "51-996348309"
    },
    {
        "Filial": "496",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Vicente da Fontoura, nº 1.676,",
        "Bairro": "Rio Branco",
        "Telefone": "51-997121246"
    },
    {
        "Filial": "498",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "Avenida Santos Ferreira, 1400",
        "Bairro": "Marechal Rondon",
        "Telefone": "51-997690416"
    },
    {
        "Filial": "501",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Cândido Xavier, nº 340",
        "Bairro": "Água Verde",
        "Telefone": "41-992093987"
    },
    {
        "Filial": "502",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua José Izidoro Biazetto, 1120 - Loja 1",
        "Bairro": "Mossunguê",
        "Telefone": "41-991283287"
    },
    {
        "Filial": "503",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Marechal Deodoro, 261, Loja 02 ",
        "Bairro": "Centro",
        "Telefone": "41-991122661"
    },
    {
        "Filial": "505",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Desembargador Costa Carvalho, 605",
        "Bairro": "Batel",
        "Telefone": "41-991653123"
    },
    {
        "Filial": "506",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Ulisses Vieira, 110",
        "Bairro": "Vila Izabel",
        "Telefone": "41-991646264"
    },
    {
        "Filial": "508",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Nilo Peçanha, 1167 ",
        "Bairro": "Bom Retiro",
        "Telefone": "41-991150628"
    },
    {
        "Filial": "509",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Alberto Folloni, 1572",
        "Bairro": "Ahú",
        "Telefone": "41-991154581"
    },
    {
        "Filial": "512",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba  ",
        "Endereço": "Avenida Senador Souza Naves, 1772 ",
        "Bairro": "Cristo Rei",
        "Telefone": "41-992465462"
    },
    {
        "Filial": "513",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Rocha Pombo, 346",
        "Bairro": "Juvevê",
        "Telefone": "41-992387889"
    },
    {
        "Filial": "517",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Professor Pedro Viriato Parigot de Souza, 1572",
        "Bairro": "Mossungue",
        "Telefone": "41-992461669"
    },
    {
        "Filial": "519",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba  ",
        "Endereço": "Rua Benjamin Lins, 680 - Loja 01",
        "Bairro": "Batel",
        "Telefone": "41-992685207"
    },
    {
        "Filial": "522",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba  ",
        "Endereço": "Rua Cel. Luiz José dos Santos, 2506 - Loja 01",
        "Bairro": "Boqueirão",
        "Telefone": "41-992277368"
    },
    {
        "Filial": "526",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Mateus Leme, 2.690",
        "Bairro": "Centro",
        "Telefone": "41-991151821"
    },
    {
        "Filial": "527",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Francisco Rocha, 2195",
        "Bairro": "Bigorrilho",
        "Telefone": "41-992467305"
    },
    {
        "Filial": "530",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Londrina  ",
        "Endereço": "Avenida Bandeirantes, 903",
        "Bairro": "Vila Ipiranga",
        "Telefone": "41-992865804"
    },
    {
        "Filial": "531",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Londrina  ",
        "Endereço": "Avenida Madre Leonia Milito, 914 ",
        "Bairro": "Bela Suíça",
        "Telefone": "41-991077068"
    },
    {
        "Filial": "534",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba  ",
        "Endereço": "Avenida Prefeito Erasto Gaertner, 1678 ",
        "Bairro": "Bacacheri",
        "Telefone": "41-991655992"
    },
    {
        "Filial": "535",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Londrina  ",
        "Endereço": "Rua Espírito Santo, 1340 ",
        "Bairro": "Centro",
        "Telefone": "41-991637462"
    },
    {
        "Filial": "536",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Maringá",
        "Endereço": "Praça Pioneiro Jacinto Ferreira Branco, 38 - Loja 1",
        "Bairro": "Zona 07",
        "Telefone": "41-991369185"
    },
    {
        "Filial": "538",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "São José dos Pinhais",
        "Endereço": "Rua Izabel A. Redentora, 2270",
        "Bairro": "Centro",
        "Telefone": "41-992806441"
    },
    {
        "Filial": "543",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Presidente Kennedy, nº 4.121, lojas 1.104, 1.105 e 1.106",
        "Bairro": "Portão",
        "Telefone": "41-992841799"
    },
    {
        "Filial": "542",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Mariano Torres, 597 loja 01",
        "Bairro": "Centro",
        "Telefone": "41-992804035"
    },
    {
        "Filial": "545",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Fernando de Noronha, nº 317",
        "Bairro": "Boa Vista",
        "Telefone": "41-992730298"
    },
    {
        "Filial": "546",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Ponta Grossa",
        "Endereço": "Rua Balduíno Taques, nº 431",
        "Bairro": "Estrela",
        "Telefone": "41-992590922"
    },
    {
        "Filial": "548",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Água Verde, nº 568",
        "Bairro": "Água Verde",
        "Telefone": "41-992596328"
    },
    {
        "Filial": "550",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Doutor João Tobias Pinto Rebelo, nº 3.539",
        "Bairro": "Portão",
        "Telefone": "41-992219023"
    },
    {
        "Filial": "551",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Anita Garibaldi, nº 2.132",
        "Bairro": "Boa Vista",
        "Telefone": "41-991114388"
    },
    {
        "Filial": "552",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Nossa Senhora da Luz, nº 2.341",
        "Bairro": "Jardim Social",
        "Telefone": "41-992869148"
    },
    {
        "Filial": "554",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Itupava, 753 loja 2",
        "Bairro": "Juvevê",
        "Telefone": "41-992475705"
    },
    {
        "Filial": "555",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Cascavel",
        "Endereço": "Rua Paraná, n° 2962",
        "Bairro": "Centro",
        "Telefone": "41-991692543"
    },
    {
        "Filial": "557",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Cascavel",
        "Endereço": "Rua Minas Gerais, nº 2.260, bairro Centro",
        "Bairro": "Centro",
        "Telefone": "41-991535985"
    },
    {
        "Filial": "558",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Alcino Guanabara, n° 907",
        "Bairro": "Hauer",
        "Telefone": "41-992826545"
    },
    {
        "Filial": "559",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Cianorte",
        "Endereço": "Avenida Souza Naves, nº 316, bairro Zona 1",
        "Bairro": "Zona 1",
        "Telefone": "41-991065971"
    },
    {
        "Filial": "561",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Umuarama",
        "Endereço": "Avenida Paraná, 5264",
        "Bairro": "Zona III",
        "Telefone": "41-992099263"
    },
    {
        "Filial": "562",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Paranavaí",
        "Endereço": "Rua Pernambuco, 964",
        "Bairro": "Centro",
        "Telefone": "41-991993745"
    },
    {
        "Filial": "563",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Londrina  ",
        "Endereço": "Avenida Ayrton Senna da Silva, nº 760 - 6-KJ/1- 2-B",
        "Bairro": "Gleba Fazenda Palhano",
        "Telefone": "41-992641856"
    },
    {
        "Filial": "564",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Maringá",
        "Endereço": "Avenida Paraná, 385",
        "Bairro": "Zona 1",
        "Telefone": "41-991225783"
    },
    {
        "Filial": "566",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Professor Pedro Viriato Parigot de Souza, nº 600",
        "Bairro": "Mossunguê",
        "Telefone": "41-991797809"
    },
    {
        "Filial": "568",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Paranaguá",
        "Endereço": "Largo Cônego Alcindino, 78",
        "Bairro": "Centro"
    },
    {
        "Filial": "569",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Cascavel",
        "Endereço": "Rua Sete de Setembro, 2704 - Sala 01",
        "Bairro": "Centro",
        "Telefone": "41-992176692"
    },
    {
        "Filial": "572",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Ponta Grossa",
        "Endereço": "Rua General Carneiro,580",
        "Bairro": "Centro Cívico",
        "Telefone": "41-991643572"
    },
    {
        "Filial": "573",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Campo Mourão",
        "Endereço": "Av. Capitao Indio Bandeira, 1690",
        "Bairro": "Centro",
        "Telefone": "44-35234524"
    },
    {
        "Filial": "702",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Anita Garibaldi, 2099 – Lj 02",
        "Bairro": "Mont Serrat",
        "Telefone": "51-995049688"
    },
    {
        "Filial": "703",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeirinha",
        "Endereço": "Av. General Flores da Cunha, 1233 loja 2",
        "Bairro": "Vila Imbui",
        "Telefone": "51-998960476"
    },
    {
        "Filial": "705",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeirinha",
        "Endereço": "Av. General Flores da Cunha, 4315",
        "Bairro": "Vila Bom Principio ",
        "Telefone": "51-997460874"
    },
    {
        "Filial": "708",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Venâncio Aires",
        "Endereço": "Rua Osvaldo Aranha, nº 1.477",
        "Bairro": "Centro",
        "Telefone": "51-997532973"
    },
    {
        "Filial": "710",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Chapecó",
        "Endereço": "Rua Rui Barbosa, n° 230 e, loja 1,",
        "Bairro": "Centro",
        "Telefone": "48-991337096"
    },
    {
        "Filial": "711",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Rua Bento Gonçalves, 2154",
        "Bairro": "Centro",
        "Telefone": "51-996714289"
    },
    {
        "Filial": "712",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cruz Alta",
        "Endereço": "Rua Barão do Rio Branco, 1484",
        "Bairro": "Centro",
        "Telefone": "51-995387614"
    },
    {
        "Filial": "713",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Taquara",
        "Endereço": "Rua General Frota, 2580, loja 02",
        "Bairro": "Centro",
        "Telefone": "51-998182148"
    },
    {
        "Filial": "716",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Caxias do Sul",
        "Endereço": "Rua Visconde de Pelotas, 819",
        "Bairro": "Centro",
        "Telefone": "51-998225608"
    },
    {
        "Filial": "718",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Veranópolis",
        "Endereço": "Rua Júlio de Castilhos, 818 loja 03",
        "Bairro": "Centro",
        "Telefone": "51-999523272"
    },
    {
        "Filial": "720",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Brusque",
        "Endereço": "Rua Felipe Schmidt, nº 115, sala 1, ",
        "Bairro": "São Luiz",
        "Telefone": "48-991895970"
    },
    {
        "Filial": "721",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Teutônia",
        "Endereço": "Rua Três de Outubro, nº 371, ",
        "Bairro": "Languiru",
        "Telefone": "51-999925626"
    },
    {
        "Filial": "723",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Xangri-la",
        "Endereço": "Rua Água Marinha, nº 1.421",
        "Bairro": "Centro",
        "Telefone": "51-997428146"
    },
    {
        "Filial": "725",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Lages",
        "Endereço": "Rua Governador Jorge Lacerda, 154",
        "Bairro": "Centro",
        "Telefone": "48-991600336"
    },
    {
        "Filial": "726",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Assis Brasil, 5431",
        "Bairro": "Sarandi",
        "Telefone": "51-999736347"
    },
    {
        "Filial": "728",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Soledade",
        "Endereço": "Avenida Marechal Floriano Peixoto, 965",
        "Bairro": "Centro",
        "Telefone": "51-999604140"
    },
    {
        "Filial": "731",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Professor Annes Dias, 135- Térreo - Hospital Santa Clara ",
        "Bairro": "Centro Histórico",
        "Telefone": "51-996883716"
    },
    {
        "Filial": "733",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Silveiro, 181",
        "Bairro": "Menino Deus",
        "Telefone": "51-999190442"
    },
    {
        "Filial": "734",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Ceará, nº391 ,sala 02",
        "Bairro": "São João",
        "Telefone": "51-998377340"
    },
    {
        "Filial": "736",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Farroupilha",
        "Endereço": "Rua Treze de Maio, 585",
        "Bairro": "Centro",
        "Telefone": "51-980241918"
    },
    {
        "Filial": "738",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Cruz do Sul",
        "Endereço": "Rua Vinte e Oito de Setembro, 585",
        "Bairro": "Centro",
        "Telefone": "51-998675693"
    },
    {
        "Filial": "741",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Dona Adda Mascarenhas de Moraes, nº 57, ",
        "Bairro": "Jardim Itu",
        "Telefone": "51-997579237"
    },
    {
        "Filial": "742",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Chapecó",
        "Endereço": "Rua Marechal Deodoro da Fonseca, nº 182-E",
        "Bairro": "Centro",
        "Telefone": "48-991136054"
    },
    {
        "Filial": "743",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Bento Gonçalves",
        "Endereço": "Rua General Osorio ,235",
        "Bairro": "Centro",
        "Telefone": "51-997596980"
    },
    {
        "Filial": "748",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Goethe, 210",
        "Bairro": "Rio Branco",
        "Telefone": "51-980208314"
    },
    {
        "Filial": "749",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Imbé ",
        "Endereço": "Avenida Paraguassu, nº 3002",
        "Bairro": "Centro",
        "Telefone": "51-999303448"
    },
    {
        "Filial": "750",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Camaquã",
        "Endereço": "Rua Bento Gonçalves, 1032",
        "Bairro": "Centro",
        "Telefone": "51-980116380"
    },
    {
        "Filial": "751",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Passo Fundo",
        "Endereço": "Avenida Presidente Vargas, 75 ",
        "Bairro": "Vila Rodrigues",
        "Telefone": "51-998929269"
    },
    {
        "Filial": "753",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Alegrete",
        "Endereço": "Rua Dr Lauro Dornelles n° 1",
        "Bairro": "Centro"
    },
    {
        "Filial": "754",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Járagua do Sul",
        "Endereço": "Rua Expedicionário Gumercindo da Silva",
        "Bairro": "Centro"
    },
    {
        "Filial": "756",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ijuí",
        "Endereço": "Rua Mato Grosso, 17 ",
        "Bairro": "Centro",
        "Telefone": "51-3332-2381"
    },
    {
        "Filial": "760",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Campo Bom",
        "Endereço": "Avenida Brasil, 2630",
        "Bairro": "Centro"
    },
    {
        "Filial": "800",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Avenida Giovanni Gronchi, 5930 - Lojas 5 e 6 ",
        "Bairro": "Vila Andrade",
        "Telefone": "11-961959826"
    },
    {
        "Filial": "801",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Avenida República do Líbano, nº 1.882",
        "Bairro": "Ibirapuera",
        "Telefone": "11-964178679"
    },
    {
        "Filial": "802",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Avenida Europa, nº 352",
        "Bairro": "Jardim Europa",
        "Telefone": "11-964100451"
    },
    {
        "Filial": "803",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Rua Doutor Homem de Melo",
        "Bairro": "Perdizes",
        "Telefone": "11-964097248"
    }
    ]
