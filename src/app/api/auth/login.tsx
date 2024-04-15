import Link from "next/link";

const Login = () => {
  return (
    <>
      <h1>This is login user</h1>
      <Link href="/api/auth/logout">logout</Link>
    </>
  );
};
