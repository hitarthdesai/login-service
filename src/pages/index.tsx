import { type GetServerSideProps } from "next";

export default function Home() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: { destination: "/signup", permanent: true },
  };
};
