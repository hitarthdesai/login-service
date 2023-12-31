import Head from "next/head";
import { type GetServerSideProps } from "next";
import { CredentialsLogin } from "@/components/CredentialsLogin";
import { useSession } from "next-auth/react";

export default function Home({ mode }: { mode: string }) {
  const stuff = useSession();
  console.log(stuff);

  return (
    <>
      <Head>
        <title>login-service</title>
        <meta
          name="description"
          content="Shared Login Service for all projects"
        />
      </Head>
      <header className="flex h-16 flex-col items-center justify-center bg-red-500">
        HEY
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-900">
        <CredentialsLogin mode={mode} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ mode: string }> = async ({
  params,
}) => {
  const mode = params?.mode;
  if (!mode)
    return {
      redirect: { destination: "/signup", permanent: true },
    };

  if (Array.isArray(mode)) {
    if (mode.length === 0 || !mode[0])
      return {
        redirect: { destination: "/signup", permanent: true },
      };

    return {
      props: {
        mode: mode[0],
      },
    };
  }

  return {
    props: {
      mode: mode,
    },
  };
};
