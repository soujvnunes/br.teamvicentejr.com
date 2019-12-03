export const data = {
  nav: {
    teachers: {
      name: "teachers",
      to: "/teachers",
      icon: "people",
      className: "Header-nav-link",
      primary: "Professores"
    },
    branches: {
      name: "branches",
      to: "/branches",
      icon: "local",
      className: "Header-nav-link",
      primary: "Filiais"
    },
    connect: {
      name: "connect",
      to: "/connect",
      icon: "user",
      className: "Header-nav-link",
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
