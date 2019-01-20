const {
  CI,
  PUBLISH
} = process.env

module.exports = {
  ci: !!CI,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ...(CI ? [
      ['@semantic-release/npm', {
        npmPublish: PUBLISH,
        tarballDir: PUBLISH ? false : 'dist'
      }],
      ...(!PUBLISH ? [
        ['@semantic-release/github', {
          assets: 'dist/*.tgz'
        }]
      ] : [])
    ] : [])
  ]
}
