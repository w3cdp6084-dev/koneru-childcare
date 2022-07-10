import Link from 'next/link';
export default function About() {
    return (
      <main className="main">
        <h2>ABOUT</h2>
        <section>
            <h3>Me</h3>
            <div>
                <img src="" alt="" />
                <p>
                    KONEKONE <br />
                    @YUSUKEMORI
                </p>
            </div>
            <div>
                <p>
                    自己紹介 1
                </p>
                <p>
                    自己紹介 2
                </p>
                <p>
                    自己紹介 3
                </p>
            </div>
            <div>
                <h3>Skill</h3>
            </div>
            <div>
                <h3>Career</h3>
            </div>
            <div>
                <ul>
                    <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="mr-5 hover:text-gray-900" target={"_blank"}>Twitter</a></Link>
                    <Link href={'https://www.facebook.com/w3cdpmori'}><a className="mr-5 hover:text-gray-900" target={"_blank"}>Facebook</a></Link>
                    <Link href={'https://dribbble.com/w3cdp6084'}><a className="mr-5 hover:text-gray-900" target={"_blank"}>Dribbble</a></Link>
                    <Link href={'https://github.com/w3cdp6084-dev'}><a className="mr-5 hover:text-gray-900" target={"_blank"}>GitHub</a></Link>
                </ul>
            </div>
        </section>
      </main>
    );
  }