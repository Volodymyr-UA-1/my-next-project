import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import css from '@/components/NoteList/NoteList.module.css';

type Props = {
    params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
    // В Next.js 15 обов'язково розгортаємо params через await
    const { slug } = await params;

    // Якщо перший елемент 'all' або slug порожній, категорію не передаємо
    const category = slug?.[0] === 'all' ? undefined : slug?.[0];

    const response = await getNotes(category);

    console.log('Server log:', response);

    return (
        <div>
            <h1 className={css.title}>Notes List</h1>
            {response?.notes?.length > 0 ? (
                <NoteList notes={response.notes} />
            ) : (
                <p>No notes found in this category.</p>
            )}
        </div>
    );
};

export default NotesByCategory;