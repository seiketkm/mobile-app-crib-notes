/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */

/**
 * アカウント紐づくデバイストークン
 */
export interface AccountDeviceTokens {
  /** アカウントに紐づくデバイストークン（デバイストークンの更新期限を超過しているものは除く） */
  deviceTokens: string[];
}
