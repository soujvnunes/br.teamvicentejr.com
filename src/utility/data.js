export const data = {
  nav: {
    home: {
      name: "home",
      to: "/home",
      icon: "home",
      primary: "Início"
    },
    teachers: {
      name: "teachers",
      to: "/teachers",
      icon: "people",
      primary: "Professores"
    },
    branches: {
      name: "branches",
      to: "/branches",
      icon: "local",
      primary: "Filiais"
    },
    connect: {
      name: "connect",
      to: "/connect",
      icon: "user",
      primary: "Conectar"
    }
  },
  page: {
    home: {
      title: "Vicente Júnior",
      subtitle: "Brazilian Jiu-jítsu",
      text: [...new Array(4)]
        .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
        .join("\n"),
      action: ""
    },
    teachers: {
      title: "Professores",
      subtitle: "Título importante",
      text: [...new Array(4)]
        .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
        .join("\n"),
      action: ""
    }
  }
};
