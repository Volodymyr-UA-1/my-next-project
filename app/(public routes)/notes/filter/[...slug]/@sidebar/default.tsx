import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import css from '../../../../components/NoteList/NoteList.module.css';
import Link from 'next/link';
import { getCategories } from '@/lib/api';

type Props = {
    params: { slug: string[] }; // не Promise
};

const NotesSidebar = async () => {
    const categories = await getCategories();

    return (
        <ul>
            <li>
                <Link href={`/notes/filter/all`}>All notes</Link>
            </li>
            {categories.map((category) => (
                <li key={category.id}>
                    <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NotesSidebar;