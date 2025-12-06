const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/49887090-9e052e1b-81a8-436b-ba18-60c425bc977e?access_key=${process.env.pmat_key}`,
    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    },
    iterationCount: 1,
}, function (err) {
    if (err) throw err;
    console.log('Collection run complete!');
});