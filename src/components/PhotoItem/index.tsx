import * as C from './styles';

type Props = {
    url: string;
    name: string;
}

export const Photoitem = ({url, name}: Props) => {
    return(
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}