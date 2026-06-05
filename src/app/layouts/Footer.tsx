export default function Footer() {
  const nav = [
    { id: 0, name: "Accueil", href: "/" },
    { id: 1, name: "A propos", href: "/Apropos" },
    { id: 2, name: "Préstation", href: "/Prestation" },
    { id: 3, name: "Galerie", href: "/Galerie" },
    { id: 4, name: "Contact", href: "/Contact" },
    { id: 5, name: "Blog", href: "/Blog" },
    { id: 6, name: "FAQ", href: "/FAQ" },
  ];

  const theme = [
    { id: 0, name: "Mariage", href: "/Mariage" },
    { id: 1, name: "Maternité", href: "/Mariage" },
    { id: 2, name: "Portraits", href: "/Mariage" },
    { id: 3, name: "Mariage", href: "/Mariage" },
    { id: 4, name: "Mariage", href: "/Mariage" },
  ];
  return (
    <>
      <footer>
        <div>
          <p></p>
        </div>
        <div>
          <div>
            <h4>
              <ul>
                {nav.map((list) => (
                  <li key={list.id}>
                    <a href={list.href}>{list.name}</a>
                  </li>
                ))}
              </ul>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
