
const shelljs = require('shelljs');
const path = require('path');
const name = process.argv[2];
const capName = capitalizeFirstLetter(name);

const root = path.join(__dirname, '..');

shelljs.cd(`${root}/app/client/modules/base/components`);
shelljs.mkdir(name);
shelljs.cd(name);



/* Create the JS file */

const contentJS = `
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This is the basic description of the ${capName} component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class ${capName} extends Component {
    render() {
        return <div>${capName}</div>;
    }
}


${capName}.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

${capName}.defaultProps = {
    name: 'component-${name}'
}

export default ${capName};
`

shelljs.touch(`${name}.js`);
shelljs.exec(`echo "${contentJS}" > ${name}.js`);



/* Create the test file */

const testJS = `
import React from 'react';
import ${capName} from './${name}';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test if the component can be rendered', () => {
    const s = render(<${capName} />);
    expect(s).not.toBeUndefined();
})
`

shelljs.touch(`${name}.test.js`);
shelljs.exec(`echo "${testJS}" > ${name}.test.js`);



/* Create the MarkDown file */


const markdown = `
## ${capName}

This is the extra documentation of this component

`

shelljs.touch(`${name}.md`);
shelljs.exec(`echo "${markdown}" > ${name}.md`);



/* The stylesheet */

shelljs.touch(`${name}.less`);


/* HELPERS */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}