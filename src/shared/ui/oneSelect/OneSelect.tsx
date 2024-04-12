import s from './OneSelect.module.scss';

interface IOneSelect {
    active: boolean;
    text: string;
    id: number;
    setActiveSelect: (num: number) => void;
}

export const OneSelect = ({ active, text, id, setActiveSelect }: IOneSelect) => {
    return (
        <div className={s.oneSelect} onClick={() => setActiveSelect(id)}>
            <div className={`${s.circle} ${active && s.active}`} />
            <span>{text}</span>
        </div>
    );
};
