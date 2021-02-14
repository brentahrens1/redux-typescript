import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
// import { useDispatch } from 'react-redux'
// import { actionCreators } from '../state'

const RespositoriesList: React.FC = () => {
    const [ term, setTerm ] = useState('')
    const { searchRepositories } = useActions()
    const { data, error, loading } = useTypedSelector((state) => state.respositories)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        searchRepositories(term)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && 
                data.map(result => <p key={result}>{result}</p>)
            }
        </div>
    )
}

export default RespositoriesList