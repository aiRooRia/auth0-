import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {user.picture && (
          <img src={user.picture} alt={user.name || "User Picture"} />
        )}
        <h2>{user.name || "User"}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
