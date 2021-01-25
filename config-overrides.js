module.exports = (config, env) => {
  config.module.rules.push(
    {
      test: /\bmapbox-gl-csp-worker.js\b/i,
      use: { loader: "worker-loader" },
    },
  )
  return config
}
