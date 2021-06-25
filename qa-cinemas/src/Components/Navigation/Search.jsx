import { Button, Input } from 'reactstrap';

const Search = ({ query, queryFunction}) => {

    return (
        <>
            
            <Input type="text" name="q" id="q" placeholder="Search for a Film!" value={query} onChange={queryFunction} />
            
        </>
    );
};

export default Search;
