import { string, shape, array } from 'prop-types';

const characterDefinition = shape({
    name: string.isRequired,
    skills: array.isRequired
})


export default characterDefinition;