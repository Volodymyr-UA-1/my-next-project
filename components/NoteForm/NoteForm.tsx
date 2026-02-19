'use client';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Category, createNote, NewNoteData } from '@/lib/api';

type Props = {
    categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
    const router = useRouter();
    const { mutate } = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            router.push('/notes/filter/all');
        },
    });

    const handleSubmit = (formData: FormData) => {
        const values = Object.fromEntries(formData) as NewNoteData;
        mutate(values);
    };
    const handleCancel = () => router.push('/notes/filter/all');

    return (
        <form action={handleSubmit}>
            <label>
                Title
                <input type="text" name="title" />
            </label>

            <label>
                Content
                <textarea name="content"></textarea>
            </label>

            <label>
                Category
                <select name="categoryId">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </label>

            <div>
                <button type="submit">Create</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default NoteForm;