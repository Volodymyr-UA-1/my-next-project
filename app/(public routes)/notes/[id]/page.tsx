import { Metadata } from "next"
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getSingleNote } from '@/lib/api'
import NoteDetailsClient from './NoteDetails.client'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const note = await getSingleNote(id)
    return {
        title: `Note: ${note.title}`,
        description: note.content.slice(0, 30),
    }
}

const NoteDetails = async ({ params }: Props) => {
    const { id } = await params
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => getSingleNote(id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>
    )
}

export default NoteDetails