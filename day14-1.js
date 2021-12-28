// test
const inputs = 'NNCB';

const mappings = ['CH -> B', 'HH -> N', 'CB -> H', 'NH -> C', 'HB -> C', 'HC -> B', 'HN -> C', 'NN -> C', 'BH -> H', 'NC -> B', 'NB -> B', 'BN -> B', 'BB -> N', 'BC -> B', 'CC -> N', 'CN -> C'];

const _mappings = mappings.reduce((acc, cur) => {
    const [key, value] = cur.split(' -> ');
    return {
        ...acc,
        [key]:value,
    }
}, {});

const steps = 10;

let results = inputs.split('');

for (let i = 1; i <= steps; i ++) {
    for (let j = 0; j < results.length - 1; j ++ ) {

    }
}

