const serverApi = {
  VIDEO_API_URL: 'http://10.220.0.2',
  CONFIG_API_URL: 'http://10.220.0.12',
  ARTICLE_API_URL: 'http://10.220.0.22',
  // VIDEO_API_URL: "http://videos.core.sstv.local",
  // CONFIG_API_URL: "http://config.core.sstv.local",
  // ARTICLE_API_URL: "http://articles.core.sstv.local",
  appId: 'lfctv',
  xAppId: 14
};

const base = {
  develop: 'https://lfctv.stag.supersoccer.tv',
  staging: 'https://lfctv.stag.supersoccer.tv',
  production: 'https://mola.tv'
};

const ads = {
  develop: 'https://api.stag.supersoccer.tv',
  staging: 'https://api.stag.supersoccer.tv',
  production: 'https://api-beta.sent.tv'
};

const uploader = {
  develop: 'https://up.stag.mola.tv',
  staging: 'https://up.stag.mola.tv',
  production: 'https://up.mola.tv'
};

const analytic = {
  develop: 'https://api.stag.supersoccer.tv',
  staging: 'https://api.stag.supersoccer.tv',
  production: 'https://api.sent.tv'
};

const asset = {
  develop: 'https://cdn.stag.supersoccer.tv/mola/assets-global',
  staging: 'https://cdn.stag.supersoccer.tv/mola/assets-global',
  production: 'https://mola01.koicdn.com/assets-global'
};

export default ENV => ({
  port: 8080,
  endpoints: {
    domain: base[ENV],
    uploader: uploader[ENV],
    ads: ads[ENV],
    analytic: analytic[ENV],
    asset: asset[ENV],
    serverApi
  }
});
