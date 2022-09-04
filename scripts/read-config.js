const { writeFileSync, readFileSync, mkdirSync } = require('fs')
const { join } = require('path')
const { homedir } = require('os')

// const AWS_DIR = join(homedir(), ".aws2")
// mkdirSync(AWS_DIR);
const defaultCredentialsDir = join(homedir(), '.aws2/credentials-test')
const defaultConfigDir = join(homedir(), '.aws2/config-test')

const createCredentials = async () => {

	const credentials = `[default]
aws_access_key_id = 123
aws_secret_access_key = 123
`

	const config = `[default]
region = 123
output = json
`

	writeFileSync(defaultConfigDir, config, { encoding: 'utf8' })
	writeFileSync(defaultCredentialsDir, credentials, { encoding: 'utf8' })
	const configStr = readFileSync(defaultConfigDir, { encoding: 'utf8' })
	const credentialsStr = readFileSync(defaultCredentialsDir, { encoding: 'utf8' })
	console.log({configStr, credentialsStr})
}

createCredentials()