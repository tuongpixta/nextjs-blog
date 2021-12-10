import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout children={undefined} home={undefined}>
      <Head children={undefined}>
        <title>First Post</title>
      </Head>
      <h1 className="text-gray-500">First Post</h1>
      <h2>
        <Image src="/images/profile.jpg" height={144} width={144} />
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
