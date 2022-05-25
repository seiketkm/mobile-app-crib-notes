/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import type {AccountProfile} from './accountProfile';
import type {AccountJoinedTeam} from './accountJoinedTeam';
import type {AccountDeviceTokens} from './accountDeviceTokens';

/**
 * アカウント
 */
export type Account = AccountProfile & AccountJoinedTeam & AccountDeviceTokens;
