import { useLogin } from "@refinedev/core";
import Image from "next/image";

import { useTranslate } from "@refinedev/core";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Login() {
  const { mutate: login } = useLogin();

  const t = useTranslate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={() => login({})}>
        {t("pages.login.signin", "Sign in")}
      </button>
      <p>
        Powered by
        <Image
          src="/https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          className="rounded-full"
          alt="Google Logo"
          width={40}
          height={40}
        />
        Google
      </p>
    </div>
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  const translateProps = await serverSideTranslations(context.locale ?? "tr", [
    "common",
  ]);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
