import './App.css';
import { DataFlow } from './components/DataFlow/DataFlow';
import { Discovery } from './components/Discovery/Discovery';

import { schema } from './config/schema';

let data = JSON.parse(localStorage.getItem('data'));

// default example data, read from the schema
if (!data) {
    data = [{}];
    Object.keys(schema).forEach((key) => (data[0][key] = schema[key].samples[0]));
}

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';
console.log(data);
function App() {
    if (isDiscovery) {
        return <Discovery />;
    }
    return <DataFlow schema={schema} initialData={data} />;
}

export default App;
