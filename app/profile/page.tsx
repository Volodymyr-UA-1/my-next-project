import Link from "next/link";

export default function ProfilePage() {
  return (
    <section>
      <h1>Profile</h1>
      <h3>Name:User</h3>
      <p> Some people are doing....</p>
      <h3><Link href="/profile/edit">Profile</Link></h3>
    </section>



  );
}