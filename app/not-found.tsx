'use client'
import { useRouter } from "next/router"
import { useEffect } from "react"


const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() =>
            router.push('/'), 3000);
        return () => clearTimeout(timer);
    }, [router]);
    return (
        <div>
            <h1>404- Page Not Found</h1>
            <p>Вибачте, вас буде перенаправлено на головну сторінку через кілька секунд...</p>
        </div>
    );
}
export default NotFound;