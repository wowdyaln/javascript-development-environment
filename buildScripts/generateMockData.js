/* this script generate mock data for local development.
this way you dont have to point to an actual API
*/

import jsf from 'json-schema-faker'
import {schema} from './mockDataSchema.js'
import fs from 'fs'
import chalk from 'chalk'

const json = JSON.stringify(jsf(schema), null, 2)

fs.writeFile('./src/api/db.json', json, (err)=>{
  if (err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green("Mock data generated."))
  }
})