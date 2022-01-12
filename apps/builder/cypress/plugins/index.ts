import {
  GitHubSocialLogin,
  FacebookSocialLogin,
  GoogleSocialLogin,
} from 'cypress-social-logins/src/Plugins'
import { createTypebot, seedDb } from './database'
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const handler = (on: any) => {
  on('task', {
    GoogleSocialLogin: GoogleSocialLogin,
    FacebookSocialLogin: FacebookSocialLogin,
    GitHubSocialLogin: GitHubSocialLogin,
    seed: seedDb,
    createTypebot,
  })
}

export default handler