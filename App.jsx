import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const brews = [
    {
      id: "butterbrew",
      name: "Butterbrew Latte",
      description: "A smooth latte infused with butterbeer essence, perfect for a cozy evening in the Gryffindor common room.",
      price: "$4.50",
      img: "https://i.imgur.com/6QZ8K5L.jpg"
    },
    {
      id: "polyjuice",
      name: "Polyjuice Espresso",
      description: "A bold espresso that changes your taste buds – sip carefully!",
      price: "$3.75",
      img: "https://i.imgur.com/5vZcJkR.jpg"
    },
    {
      id: "felix",
      name: "Felix Felicis Cold Brew",
      description: "Lucky cold brew that brings a touch of fortune to your day.",
      price: "$5.00",
      img: "https://i.imgur.com/9KcJp2L.jpg"
    }
  ];

  const addToCart = () => setCartCount(prev => prev + 1);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#3b2e2a",
      backgroundColor: "#f5e9d3",
      minHeight: "100vh",
      margin: 0,
      padding: 0
    },
    header: {
      backgroundColor: "#4b2e2a",
      color: "#fff",
      padding: "1rem",
      textAlign: "center"
    },
    logo: {
      width: "80px",
      height: "auto",
      marginBottom: "0.5rem"
    },
    nav: {
      marginTop: "0.5rem"
    },
    navLink: {
      color: "#fff",
      margin: "0 0.5rem",
      textDecoration: "none",
      fontWeight: "bold"
    },
    main: {
      padding: "1rem",
      maxWidth: "960px",
      margin: "0 auto"
    },
    brewCard: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #c4a484",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "1rem",
      backgroundColor: "#fff"
    },
    brewImg: {
      width: "100%",
      height: "auto"
    },
    brewInfo: {
      padding: "0.75rem"
    },
    button: {
      backgroundColor: "#8b5e3c",
      color: "#fff",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "0.5rem"
    },
    footer: {
      backgroundColor: "#4b2e2a",
      color: "#fff",
      textAlign: "center",
      padding: "0.5rem",
      marginTop: "2rem"
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://i.imgur.com/1X4Zb5V.png"
          alt="Hogwarts Coffee Shop Logo"
          style={styles.logo}
        />
        <h1>Hogwarts Brew House</h1>
        <nav style={styles.nav} aria-label="Main navigation">
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#brews" style={styles.navLink}>Our Brews</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
        <div aria-live="polite" style={{ marginTop: "0.5rem" }}>
          Cart: {cartCount} item{cartCount !== 1 && "s"}
        </div>
      </header>

      <main style={styles.main}>
        <section>
          <h2>Welcome, witches and wizards!</h2>
          <p>
            Step into a world where magical beans meet enchanted milk. Whether you need a potion of focus or a comforting brew after a long day of classes, we have the perfect cup for you.
          </p>
        </section>

        <section id="brews" style={{ marginTop: "2rem" }}>
          <h2>Our Magical Brews</h2>
          {brews.map(brew => (
            <article key={brew.id} style={styles.brewCard} aria-label={brew.name}>
              <img
                src={brew.img}
                alt={brew.name + " image"}
                style={styles.brewImg}
                loading="lazy"
              />
              <div style={styles.brewInfo}>
                <h3>{brew.name}</h3>
                <p>{brew.description}</p>
                <p><strong>{brew.price}</strong></p>
                <button
                  style={styles.button}
                  onClick={addToCart}
                  aria-label={"Add " + brew.name + " to cart"}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer style={styles.footer} id="contact">
        <p>© 2026 Hogwarts Brew House – All rights reserved.</p>
        <p>Visit us at Platform 9¾, King's Cross Station.</p>
      </footer>
    </div>
  );
}
