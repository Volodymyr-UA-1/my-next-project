import { notFound } from "next/navigation";
import { getUser } from "@/lib/api";

export default async function ProfilePage({ params }: { params: { id: string } }) {
    const user = await getUser(params.id);

    if (!user) {
        notFound(); // Показує /profile/not-found.tsx
    }

    return <div>{user.name}</div>;
}