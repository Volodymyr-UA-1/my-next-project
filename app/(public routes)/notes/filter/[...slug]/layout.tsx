import type { ReactNode } from "react";
import css from './page.module.css';

type Props = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
};

const NotesLayout = async ({ children, sidebar }: Props) => {


    return (
        <section className={css.section}>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>
    );
};

export default NotesLayout;