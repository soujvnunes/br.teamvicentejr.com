export const data = {
  navigation: [
    {
      name: "home",
      to: { pathname: "/", hash: "#intro" },
      icon: "home",
      className: "Nav-link",
      primary: "Início"
    },
    {
      name: "teachers",
      to: { pathname: "/", hash: "#professores" },
      icon: "people",
      className: "Nav-link",
      primary: "Professores"
    },
    {
      name: "branches",
      to: { pathname: "/", hash: "#filiais" },
      icon: "local",
      className: "Nav-link",
      primary: "Filiais"
    },
    {
      name: "about",
      to: "/sobre",
      icon: "about",
      className: "Nav-link",
      primary: "Sobre"
    }
  ],
  teachers: [
    {
      name: "Vicente Júnior",
      title: "Título",
      url: require("../asset/br/teachers/1.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/2.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/3.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/4.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/5.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/6.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/7.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/8.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/9.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/10.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/11.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/12.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/13.png")
    },
    {
      name: "Nome",
      title: "Título",
      url: require("../asset/br/teachers/14.png")
    }
  ],
  branches: [
    {
      name: "CT Corpo Em Forma",
      phone: "082 9 9387 9275",
      map: require("../asset/br/branches/academiaHgFitness.jpg"),
      local: "R. Cinqüenta e Cinco, 28, Maceió - AL",
      url: "https://goo.gl/maps/QQdKTtBiVuhp4XYf6"
    },
    {
      name: "Adois Academia",
      phone: "082 3338 7000",
      map: require("../asset/br/branches/adoisAcademia.jpg"),
      local:
        "R. Cristiano Maia de Omena Calheiros, S/N - Gruta de Lourdes, Maceió - AL",
      url: "https://maps.app.goo.gl/71TmcH1swApihPp29"
    },
    {
      name: "CT Jean lima",
      phone: "082 3378 9126",
      map: require("../asset/br/branches/ctJeanLima.jpg"),
      local:
        "Av. Dr. André Papini Góis, 177-203 - Cidade Universitária, Maceió - AL",
      url: "https://maps.app.goo.gl/7Hpf2S16REFbwuup8"
    },
    {
      name: "Academia HG Fitness",
      phone: "082 3023 3701",
      map: require("../asset/br/branches/academiaHgFitness.jpg"),
      local: "Rua Tereza de Azevedo, 258 - Pinheiro, Maceió - AL",
      url: "https://g.page/hgfitnessfarol?share"
    },
    {
      name: "X Fight Centro de Treinamento",
      phone: "082 9 9444 2773",
      map: require("../asset/br/branches/xFightCentroDeTreinamento.jpg"),
      local: "R. Manoel Maia Nobre, 290 - Farol, Maceió - AL",
      url: "https://maps.app.goo.gl/tDxhG9YoaxNpRdzcA"
    },
    {
      name: "Centro De Treinamento WT",
      phone: "082 9 8839 150",
      map: require("../asset/br/branches/centroDeTreinamentoWt.jpg"),
      local: "Unnamed Road - Benedito Bentes, Maceió - AL",
      url: "https://goo.gl/maps/bYpmVGrgTx4RdMgF7"
    }
  ]
};
