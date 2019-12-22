export const data = {
  nav: {
    teachers: {
      name: "teachers",
      to: "/professores",
      icon: "people",
      className: "Header-nav-link",
      primary: "Professores"
    },
    branches: {
      name: "branches",
      to: "/filiais",
      icon: "local",
      className: "Header-nav-link",
      primary: "Filiais"
    },
    about: {
      name: "about",
      to: "/sobre",
      icon: "about",
      className: "Header-nav-link",
      primary: "Sobre"
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
