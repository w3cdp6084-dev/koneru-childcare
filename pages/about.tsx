import Image from 'next/image'

export default function About() {
    return (
      <main className="mt-20 main-img text-center px-10 py-6 mx-auto">
        <section>
            <div>
                <Image src="/images/logo.png" width={150} height={150} alt="logo" />
                <p className='dark:text-white mt-10 mb-4 text-2xl text-black font-bold'>KONEKONE</p>
                <p className='dark:text-white font-bold text-black'>Yusuke Mori<br />
                Designer/Developer</p>
                <p className='dark:text-white mt-10 text-black'>
                KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
ブランディングとコンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
今年子供が生まれ、育児に楽しく取り組んでおり、こちらはそのnoteにもなっています。
                </p>
            </div>
        </section>
      </main>
    );
  }