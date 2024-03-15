import {usePostContext} from '../context/Context.jsx';

const Item = ({exepense}) => {

    const [_, dispatch] = usePostContext()

    const handleDelete = () => {
        dispatch({
            type: 'deletItem',
            payload: exepense.id
        })
    }

    return (
        <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <p>{exepense.title}</p>
            <p>{exepense.categorie}</p>
            <p>{exepense.description}</p>
            <p>{exepense.id}</p>
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default Item