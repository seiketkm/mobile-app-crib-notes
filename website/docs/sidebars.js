module.exports = {
  reference: [
    {
      type: 'doc',
      id: 'reference',
    },
    {
      type: 'category',
      label: 'セキュリティ',
      items: ['reference/security/awesome-sites'],
    },
    {
      type: 'category',
      label: '認証',
      items: [
        'reference/auth/overview',
        'reference/auth/authn-architecture',
        'reference/auth/login-screens',
        'reference/auth/manage-credentials',
        'reference/auth/stateless-authn',
        'reference/auth/webassets-integration',
        'reference/auth/authn-with-backend-using-OIDC-and-device-authn',
      ],
    },
    {
      type: 'category',
      label: 'プッシュ通知',
      items: [
        'reference/notification/overview',
        'reference/notification/infrastructure',
        'reference/notification/configuration',
        'reference/notification/backend',
        'reference/notification/client',
      ],
    },
    {
      type: 'category',
      label: 'ディープリンク',
      items: [
        'reference/deep-link/overview',
        'reference/deep-link/universal-links',
        'reference/deep-link/android-app-links',
      ],
    },
  ],
  distribution: [
    {
      type: 'doc',
      id: 'distribution',
    },
    {
      type: 'doc',
      id: 'distribution/ios-license',
    },
    {
      type: 'doc',
      id: 'distribution/usecase',
    },
    {
      type: 'category',
      label: 'アプリケーションの配布方法',
      items: [
        {
          type: 'category',
          label: 'iOSアプリ',
          items: [
            'distribution/ios-developer-account',
            'distribution/ios-develop-certificate',
            'distribution/ios-in-house',
            'distribution/ios-testflight',
          ],
        },
        {
          type: 'category',
          label: 'Androidアプリ',
          items: [
            'distribution/android-local',
            'distribution/android-apk-dist',
            'distribution/android-google-play-test',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーションのビルド',
      items: [
        'distribution/app-build/ios-build',
        'distribution/app-build/ios-build-setting',
        'distribution/app-build/android-build',
      ],
    },
  ],
  learn: [
    {
      type: 'doc',
      id: 'react-native/learn',
    },
    {
      type: 'doc',
      id: 'react-native/pre-requisites',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'react-native/learn/getting-started',
        'react-native/learn/getting-started/setting-up-development-environment',
        'react-native/learn/getting-started/create-project',
        'react-native/learn/getting-started/launch-created-app',
      ],
    },
    {
      type: 'category',
      label: 'アプリの実装前に',
      items: [
        'react-native/learn/basic-concepts',
        {
          type: 'category',
          label: 'React Nativeの基本',
          items: [
            'react-native/learn/basic-concepts/react-native-basics',
            {
              type: 'category',
              label: 'Components',
              items: [
                'react-native/learn/basic-concepts/react-native-basics/components',
                'react-native/learn/basic-concepts/react-native-basics/components/view',
                'react-native/learn/basic-concepts/react-native-basics/components/text',
                'react-native/learn/basic-concepts/react-native-basics/components/button',
                'react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity',
                'react-native/learn/basic-concepts/react-native-basics/components/image',
                'react-native/learn/basic-concepts/react-native-basics/components/scroll-view',
                {
                  type: 'category',
                  label: 'Lists',
                  items: [
                    'react-native/learn/basic-concepts/react-native-basics/components/lists',
                    'react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list',
                    'react-native/learn/basic-concepts/react-native-basics/components/lists/section-list',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Design',
              items: [
                'react-native/learn/basic-concepts/react-native-basics/design',
                'react-native/learn/basic-concepts/react-native-basics/design/style',
                'react-native/learn/basic-concepts/react-native-basics/design/height-and-width',
                'react-native/learn/basic-concepts/react-native-basics/design/flexbox',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'React Navigationの基本',
          items: [
            'react-native/learn/basic-concepts/react-navigation-basics',
            'react-native/learn/basic-concepts/react-navigation-basics/stack',
            'react-native/learn/basic-concepts/react-navigation-basics/modal',
            'react-native/learn/basic-concepts/react-navigation-basics/tab',
            'react-native/learn/basic-concepts/react-navigation-basics/param',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ToDoアプリの実装',
      items: [
        'react-native/learn/todo-app',
        'react-native/learn/todo-app/app-spec',
        'react-native/learn/todo-app/app-project-desc',
        {
          type: 'category',
          label: '画面の実装',
          items: [
            'react-native/learn/todo-app/screens/welcome',
            'react-native/learn/todo-app/screens/stack',
            'react-native/learn/todo-app/screens/auth',
            'react-native/learn/todo-app/screens/tab',
            'react-native/learn/todo-app/screens/modal',
            'react-native/learn/todo-app/screens/login',
            'react-native/learn/todo-app/screens/keyboard-avoiding-view',
            'react-native/learn/todo-app/screens/alert',
            'react-native/learn/todo-app/screens/todo-board',
            'react-native/learn/todo-app/screens/todo-form',
            'react-native/learn/todo-app/screens/use-focus-effect',
            'react-native/learn/todo-app/screens/basic-components',
            'react-native/learn/todo-app/screens/logo',
          ],
        },
        {
          type: 'category',
          label: 'REST APIとの接続',
          items: [
            'react-native/learn/todo-app/networking/setting-up-local-server',
            'react-native/learn/todo-app/networking/generate-api-client',
            'react-native/learn/todo-app/networking/api-request',
            'react-native/learn/todo-app/networking/activity-indicator',
            'react-native/learn/todo-app/networking/activity-indicator-each-todo',
          ],
        },
        'react-native/learn/todo-app/screens/exercise',
      ],
    },
    {
      type: 'category',
      label: 'Q&Aアプリの実装',
      items: [
        'react-native/learn/qa-app/qa-app',
        'react-native/learn/qa-app/app-spec',
        'react-native/learn/qa-app/app-project-desc',
        {
          type: 'category',
          label: 'Q&Aアプリの実装（基本編）',
          items: [
            {
              type: 'category',
              label: '一覧画面（ホーム画面）',
              items: [
                'react-native/learn/qa-app/exercise-basic-home-components',
                'react-native/learn/qa-app/exercise-basic-home-screen',
                'react-native/learn/qa-app/exercise-basic-home-api',
              ],
            },
            {
              type: 'category',
              label: 'イベント一覧画面',
              items: [
                'react-native/learn/qa-app/exercise-basic-list-event-screen',
                'react-native/learn/qa-app/exercise-basic-list-event-api',
              ],
            },
            {
              type: 'category',
              label: '質問詳細画面',
              items: [
                'react-native/learn/qa-app/exercise-basic-detail-question-components',
                'react-native/learn/qa-app/exercise-basic-detail-question-screen',
                'react-native/learn/qa-app/exercise-basic-detail-question-api',
              ],
            },
            {
              type: 'category',
              label: 'イベント詳細画面',
              items: [
                'react-native/learn/qa-app/exercise-basic-detail-event-screen',
                'react-native/learn/qa-app/exercise-basic-detail-event-api',
              ],
            },
            {
              type: 'category',
              label: '入力画面',
              items: [
                'react-native/learn/qa-app/exercise-basic-input-components',
                'react-native/learn/qa-app/exercise-basic-input-screen',
                'react-native/learn/qa-app/exercise-basic-input-api',
              ],
            },
          ],
        },
        'react-native/learn/qa-app/exercise-advanced',
      ],
    },
  ],
  pitfalls: [
    {
      type: 'doc',
      id: 'react-native/common-pitfalls',
    },
    {
      type: 'category',
      label: 'アプリを実行できない',
      items: [
        'react-native/common-pitfalls/overview',
        'react-native/common-pitfalls/unable-to-load-script',
        'react-native/common-pitfalls/debug-keystore-not-found',
        'react-native/common-pitfalls/react-native-cli-uninstall',
        'react-native/common-pitfalls/cant-build-in-xcode',
        'react-native/common-pitfalls/clear-cache',
      ],
    },
  ],
  santoku: [
    {
      type: 'doc',
      id: 'react-native/santoku',
    },
    {
      type: 'category',
      label: 'Requirements',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/requirements',
        },
        {
          type: 'category',
          label: '機能要件',
          items: ['react-native/santoku/requirements/functional/overview'],
        },
        {
          type: 'category',
          label: '非機能要件',
          items: [
            'react-native/santoku/requirements/non-functional/overview',
            'react-native/santoku/requirements/non-functional/usability',
            'react-native/santoku/requirements/non-functional/system-method',
            'react-native/santoku/requirements/non-functional/performance',
            'react-native/santoku/requirements/non-functional/compatibility',
            'react-native/santoku/requirements/non-functional/security',
            'react-native/santoku/requirements/non-functional/test-outline',
            'react-native/santoku/requirements/non-functional/operation',
            'react-native/santoku/requirements/non-functional/maintenance',
            'react-native/santoku/requirements/non-functional/other',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Architecture',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture/system-configuration/overview',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture/application-structure/overview',
        },
        {
          type: 'category',
          label: 'アプリのライフサイクル管理',
          items: [
            'react-native/santoku/application-architecture/life-cycle-management/overview',
            'react-native/santoku/application-architecture/life-cycle-management/initialization',
          ],
        },
        {
          type: 'category',
          label: 'アプリのアップデート',
          items: [
            'react-native/santoku/application-architecture/app-updates/overview',
            'react-native/santoku/application-architecture/app-updates/forced-app-updates',
          ],
        },
        {
          type: 'category',
          label: '認証',
          items: [
            'react-native/santoku/application-architecture/auth/overview',
            'react-native/santoku/application-architecture/auth/signup',
            'react-native/santoku/application-architecture/auth/login',
            'react-native/santoku/application-architecture/auth/logout',
            'react-native/santoku/application-architecture/auth/local-auth',
            'react-native/santoku/application-architecture/auth/credential-management',
          ],
        },
        {
          type: 'category',
          label: 'メッセージ管理',
          items: [
            'react-native/santoku/application-architecture/message-configuration/overview',
            'react-native/santoku/application-architecture/message-configuration/load-message',
            'react-native/santoku/application-architecture/message-configuration/managed-message',
          ],
        },
        {
          type: 'category',
          label: 'アプリのログ出力',
          items: [
            'react-native/santoku/application-architecture/logging-app/overview',
            'react-native/santoku/application-architecture/logging-app/logging',
          ],
        },
        {
          type: 'category',
          label: 'HTTP API通信',
          items: [
            'react-native/santoku/application-architecture/http-api/overview',
            'react-native/santoku/application-architecture/http-api/http-api-tanstack-query',
          ],
        },
        {
          type: 'category',
          label: 'ディープリンク',
          items: [
            'react-native/santoku/application-architecture/deep-link/overview',
            'react-native/santoku/application-architecture/deep-link/universal-links',
            'react-native/santoku/application-architecture/deep-link/android-app-links',
            'react-native/santoku/application-architecture/deep-link/process-deep-link',
          ],
        },
        {
          type: 'category',
          label: 'プッシュ通知',
          items: [
            'react-native/santoku/application-architecture/push-notification/overview',
            'react-native/santoku/application-architecture/push-notification/register-token',
            'react-native/santoku/application-architecture/push-notification/delete-token',
            'react-native/santoku/application-architecture/push-notification/register-notification-channels',
            'react-native/santoku/application-architecture/push-notification/send-push-notification',
            'react-native/santoku/application-architecture/push-notification/receive-push-notification',
          ],
        },
        {
          type: 'category',
          label: 'エラーハンドリング',
          items: [
            'react-native/santoku/application-architecture/error-handling/overview',
            'react-native/santoku/application-architecture/error-handling/how-to-handle-error',
            'react-native/santoku/application-architecture/http-api/http-api-error-handling',
          ],
        },
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture/cache-management/overview',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture/third-party-libraries/overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Test Planning',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/test-planning',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/test-planning/test-all-planning',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/test-planning/ut-planning',
        },
        {
          type: 'category',
          label: 'テスト観点',
          items: [
            'react-native/santoku/test-planning/test-type/overview',
            {
              type: 'category',
              label: '機能テスト',
              items: [
                'react-native/santoku/test-planning/test-type/functional-testing',
                'react-native/santoku/test-planning/test-type/functional-testing/layout-test',
                'react-native/santoku/test-planning/test-type/functional-testing/operation-event',
                'react-native/santoku/test-planning/test-type/functional-testing/display-content',
                'react-native/santoku/test-planning/test-type/functional-testing/validation-check',
                'react-native/santoku/test-planning/test-type/functional-testing/terminal-os',
                'react-native/santoku/test-planning/test-type/functional-testing/use-case',
              ],
            },
            'react-native/santoku/test-planning/test-type/configuration-test',
            'react-native/santoku/test-planning/test-type/performance-test',
          ],
        },
        {
          type: 'doc',
          id: 'react-native/santoku/test-planning/test-variation',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/test-planning/collaboration-with-qa-vendors',
        },
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/design',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/design/screen-list/overview',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/design/screen-transitions/overview',
        },
        {
          type: 'category',
          label: '画面仕様',
          items: [
            {
              type: 'doc',
              id: 'react-native/santoku/design/screen-specs/overview',
            },
            {
              type: 'doc',
              id: 'react-native/santoku/design/screen-specs/basic-policy',
            },
            {
              type: 'category',
              label: '画面仕様における定義事項',
              items: [
                'react-native/santoku/design/screen-specs/definitions/overview',
                {
                  type: 'category',
                  label: '画面種別',
                  items: [
                    'react-native/santoku/design/screen-specs/definitions/screen-type/overview',
                    'react-native/santoku/design/screen-specs/definitions/screen-type/screen',
                    'react-native/santoku/design/screen-specs/definitions/screen-type/form-sheet',
                    'react-native/santoku/design/screen-specs/definitions/screen-type/overlay',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: '画面',
              items: [
                'react-native/santoku/design/screen-specs/screens/overview',
                {
                  type: 'category',
                  label: '共通部',
                  items: ['react-native/santoku/design/screen-specs/screens/common/bottom-tab/overview'],
                },
                'react-native/santoku/design/screen-specs/screens/splash-screen/overview',
                'react-native/santoku/design/screen-specs/screens/terms-of-service-agreement/overview',
              ],
            },
            {
              type: 'category',
              label: '共通部品',
              items: [
                'react-native/santoku/design/screen-specs/common-parts/overview',
                'react-native/santoku/design/screen-specs/common-parts/button/overview',
                'react-native/santoku/design/screen-specs/common-parts/snackbar/overview',
                'react-native/santoku/design/screen-specs/common-parts/webview/overview',
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'react-native/santoku/design/message-list/overview',
        },
        {
          type: 'category',
          label: 'コンテキスト設計',
          items: ['react-native/santoku/design/context/overview', 'react-native/santoku/design/context/theme'],
        },
        {
          type: 'category',
          label: 'デモ機能',
          items: [
            'react-native/santoku/design/demo/overview',
            'react-native/santoku/design/demo/push-notification/overview',
            'react-native/santoku/design/demo/qrcode/overview',
            'react-native/santoku/design/demo/barcode/overview',
            'react-native/santoku/design/demo/map/overview',
            'react-native/santoku/design/demo/deep-link/overview',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/development',
        },
        {
          type: 'category',
          label: '開発環境',
          items: [
            'react-native/santoku/development/development-environment',
            {
              type: 'autogenerated',
              dirName: 'react-native/santoku/development/development-environment',
            },
          ],
        },
        {
          type: 'category',
          label: '設計',
          items: [
            'react-native/santoku/development/design',
            'react-native/santoku/development/design/message-configuration',
            'react-native/santoku/development/design/logs',
          ],
        },
        {
          type: 'category',
          label: '実装',
          items: [
            'react-native/santoku/development/implement',
            {
              type: 'category',
              label: 'スタイルガイド',
              items: [
                'react-native/santoku/development/implement/style-guide/overview',
                'react-native/santoku/development/implement/style-guide/eslint',
                'react-native/santoku/development/implement/style-guide/typescript',
                'react-native/santoku/development/implement/style-guide/editorconfig',
                'react-native/santoku/development/implement/style-guide/prettier',
                'react-native/santoku/development/implement/style-guide/lint-ops',
                'react-native/santoku/development/implement/style-guide/typescript-style-guide',
                'react-native/santoku/development/implement/style-guide/naming-conversion',
              ],
            },
            'react-native/santoku/development/implement/message-configuration',
            'react-native/santoku/development/implement/logs-implementation',
            'react-native/santoku/development/implement/cautions-on-using-firebase',
            'react-native/santoku/development/implement/http-api',
          ],
        },
        {
          type: 'category',
          label: 'ビルド',
          items: [
            'react-native/santoku/development/build-configuration',
            'react-native/santoku/development/build-configuration/environments-configuration',
            'react-native/santoku/development/build-configuration/about-plugins',
            'react-native/santoku/development/build-configuration/apply-plugins',
            'react-native/santoku/development/build-configuration/build-type',
            'react-native/santoku/development/build-configuration/app-constants',
            'react-native/santoku/development/build-configuration/development-account-for-ios',
            'react-native/santoku/development/build-configuration/firebase-setting-file',
            'react-native/santoku/development/build-configuration/native-project-management',
            'react-native/santoku/development/build-configuration/app-launch-per-build-settings',
          ],
        },
        {
          type: 'category',
          label: 'テスト',
          items: [
            'react-native/santoku/development/test',
            'react-native/santoku/development/test/create-emulator-simulator',
          ],
        },
        {
          type: 'category',
          label: '開発に利用するツール',
          items: [
            'react-native/santoku/development/tools',
            'react-native/santoku/development/tools/vscode',
            'react-native/santoku/development/tools/flipper',
          ],
        },
        {
          type: 'doc',
          id: 'react-native/santoku/development/dependency-management',
        },
      ],
    },
    {
      type: 'category',
      label: 'Maintenance',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/maintenance',
        },
        {
          type: 'category',
          label: 'エンハンス',
          items: [
            'react-native/santoku/maintenance/enhance',
            'react-native/santoku/maintenance/enhance/expo-49-upgrade',
            'react-native/santoku/maintenance/enhance/expo-48-upgrade',
            'react-native/santoku/maintenance/enhance/expo-47-upgrade',
            'react-native/santoku/maintenance/enhance/config-plugins',
            'react-native/santoku/maintenance/enhance/expo-46-upgrade',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Decision Records',
      items: [
        'react-native/santoku/decisions',
        'react-native/santoku/decisions/adr-001-error-handling',
        'react-native/santoku/decisions/adr-002-http-api-libraries',
        'react-native/santoku/decisions/adr-003-http-api-error-handling',
        'react-native/santoku/decisions/adr-004-deep-link',
        'react-native/santoku/decisions/adr-005-message',
        'react-native/santoku/decisions/adr-006-logging',
        'react-native/santoku/decisions/adr-007-auth',
        'react-native/santoku/decisions/adr-008-push-notification',
        'react-native/santoku/decisions/adr-009-push-notification-fcm',
        'react-native/santoku/decisions/adr-010-push-notification-contents',
        'react-native/santoku/decisions/adr-011-cache-management',
        'react-native/santoku/decisions/adr-012-http-api',
        'react-native/santoku/decisions/adr-013-react-query',
        'react-native/santoku/decisions/adr-014-ui-libraries',
        'react-native/santoku/decisions/adr-015-android-head-up-notification',
        'react-native/santoku/decisions/adr-016-forced-app-updates',
        'react-native/santoku/decisions/adr-017-map-view-library',
        'react-native/santoku/decisions/adr-018-deep-link',
        {
          type: 'category',
          label: 'ディープリンク受信時の画面遷移',
          items: [
            'react-native/santoku/decisions/adr-019-deep-link-navigation',
            'react-native/santoku/decisions/linking-feasibility',
            'react-native/santoku/decisions/non-linking-feasibility',
          ],
        },
      ],
    },
  ],
  docusaurus: [
    {
      type: 'doc',
      id: 'docusaurus/index',
    },
    {
      type: 'doc',
      id: 'docusaurus/doc1',
    },
    {
      type: 'doc',
      id: 'docusaurus/mdx',
    },
    {
      type: 'doc',
      id: 'docusaurus/plugins',
    },
    {
      // TODO: ヘッダリンクの作り方: ['docusaurus/create-link-in-header'],
      // TODO: 目次の作り方: ['docusaurus/create-sidebar-toc'],
    },
  ],
};
