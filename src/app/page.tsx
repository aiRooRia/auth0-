import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  // const { user, isLoading, error } = useUser();
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  // if (user) return <div>This is user</div>;
  return (
    <>
      <Link href="/api/auth/login">Login</Link>
    </>
  );
}
