const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

console.log(`My campus is in ${coder_academy.sydney.state} and precisely in ${coder_academy.sydney.street}.`);

delete sydney_campus.state;

console.log(`My campus is in ${coder_academy.sydney.state} and precisely in ${coder_academy.sydney.street}.`);
