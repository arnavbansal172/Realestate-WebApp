export default function Home() {
  return (
    <main>
      <section>
        <h1>Bansal RealEstate Welcomes you</h1>
        <p>Properties at your finger trip</p>
      </section>

      <section>
        <h2>Explore Properties</h2>
        <ul>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/Properties">
              <a>Properties</a>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
