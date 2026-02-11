"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from 'next/navigation';
import { getSingleNote } from "@/lib/api";

const NoteDetailsClient = () => {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const { data: note, isLoading, error } = useQuery({
        queryKey: ["note", id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false,
    });
    const handleGoBack = () => {
        const sure = confirm("Are you sure?");
        if (sure) {
            router.back();
        }
    }
    if (isLoading) return <p>Loading...</p>;
    if (error || !note) return <p>Some error..</p>;

    const formattedDate = note.updatedAt
        ? `Updated at: ${note.updatedAt}`
        : `Created at: ${note.createdAt}`;

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>{formattedDate}</p>
            <button onClick={handleGoBack}>GoBack</button>
        </div>
    );
};

export default NoteDetailsClient;