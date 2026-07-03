'use client'
import { useStoreTheme } from '@/store/useThemeStore'
export default function themeSwitchButton() {
    const { isDark, toggleTheme } = useStoreTheme();

    function switchTheme() {
        if(isDark) {
            document.body.classList.add('white');
        }
        else {
            document.body.classList.remove('white');
        }
        toggleTheme();
    }

    return (
        <>
            <svg onClick={switchTheme} className={`${isDark ? "block" : "hidden"} text-(--muted-foreground) hover:text-(--primary) transition cursor-pointer`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.937a1.07 1.07 0 0 1-.94-.542L9.61 17.9a.084.084 0 0 0-.1-.041l-2.782.741A1.087 1.087 0 0 1 5.4 17.272l.748-2.8a.09.09 0 0 0-.041-.1l-2.5-1.439a1.086 1.086 0 0 1 0-1.881L6.1 9.61a.09.09 0 0 0 .041-.1L5.4 6.728A1.087 1.087 0 0 1 6.728 5.4l2.8.748a.09.09 0 0 0 .1-.041l1.439-2.5A1.08 1.08 0 0 1 12 3.063a1.07 1.07 0 0 1 .94.542L14.39 6.1a.084.084 0 0 0 .1.041l2.782-.741A1.087 1.087 0 0 1 18.6 6.728l-.748 2.8a.09.09 0 0 0 .041.1l2.5 1.439a1.086 1.086 0 0 1 0 1.881L17.9 14.39a.09.09 0 0 0-.041.1l.748 2.784a1.087 1.087 0 0 1-1.335 1.326l-2.8-.748a.09.09 0 0 0-.1.041l-1.439 2.5a1.08 1.08 0 0 1-.94.544Zm-2.466-4.084a1.09 1.09 0 0 1 .942.541l1.448 2.5a.08.08 0 0 0 .075.043a.08.08 0 0 0 .074-.043l1.44-2.5a1.08 1.08 0 0 1 1.221-.507l2.8.747a.087.087 0 0 0 .106-.106l-.747-2.785a1.09 1.09 0 0 1 .5-1.222l2.5-1.448a.086.086 0 0 0 0-.15l-2.5-1.439a1.086 1.086 0 0 1-.507-1.221l.747-2.8a.08.08 0 0 0-.022-.083a.09.09 0 0 0-.085-.023l-2.784.747a1.09 1.09 0 0 1-1.222-.5l-1.448-2.5A.08.08 0 0 0 12 4.063a.08.08 0 0 0-.074.043l-1.44 2.5a1.09 1.09 0 0 1-1.222.507l-2.8-.747a.087.087 0 0 0-.106.106l.752 2.782a1.09 1.09 0 0 1-.5 1.222l-2.5 1.448a.08.08 0 0 0-.047.076a.08.08 0 0 0 .043.074l2.5 1.44a1.09 1.09 0 0 1 .507 1.221l-.747 2.8a.08.08 0 0 0 .022.083a.09.09 0 0 0 .085.023l2.784-.747a1 1 0 0 1 .277-.041"></path><path fill="currentColor" d="M12 15.875A3.875 3.875 0 1 1 15.875 12A3.88 3.88 0 0 1 12 15.875m0-6.75A2.875 2.875 0 1 0 14.875 12A2.88 2.88 0 0 0 12 9.125"></path></svg>
            <svg onClick={switchTheme} className={`${isDark ? "hidden" : "block"} text-(--muted-foreground) hover:text-(--primary) transition cursor-pointer`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m11.177 3.037l-.062.006a9.001 9.001 0 1 0 8.219 14.175c.3-.42-.245-.913-.724-.72a7 7 0 0 1-.822.271a7 7 0 0 1-5.61-12.635C12.66 3.82 12.575 3 12 3a9 9 0 0 0-.823.037M9.053 5.101a8.5 8.5 0 0 0 6.698 13.395A7.5 7.5 0 1 1 9.053 5.101" clipRule="evenodd"></path></svg>
        </>
    );
}