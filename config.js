const ENV = "production";
const base = {
  develop: "https://new.stag.mola.tv",
  staging: "https://stag.mola.tv",
  production: "https://mola.tv"
};

const ads = {
  develop: "https://api.stag.supersoccer.tv",
  staging: "https://api.stag.supersoccer.tv",
  production: "https://api-beta.sent.tv"
};

const uploader = {
  develop: "https://up.stag.mola.tv",
  staging: "https://up.stag.mola.tv",
  production: "https://up.mola.tv"
};

const redeem = {
  develop: "http://promos.payment.sstv.local/external/voucher/redeem",
  staging: "http://promos.payment.sstv.local/external/voucher/redeem",
  production: "http://promos.payment.sstv.local/external/voucher/redeem"
};

const analytic = {
  develop: "https://api.stag.supersoccer.tv",
  staging: "https://api.stag.supersoccer.tv",
  production: "https://api.sent.tv"
};

const asset = {
  develop: "https://cdn.stag.supersoccer.tv/mola/assets-global",
  staging: "https://cdn.stag.supersoccer.tv/mola/assets-global",
  production: "https://mola01.koicdn.com/assets-global"
};

export default {
  port: 8080,
  endpoints: {
    clientUrl: base[ENV],
    serverUrl: base[ENV],
    api: `${base[ENV]}/api/v2`, //kalo mau push balikin lagi ke awal api: 'https://stag.mola.tv/api/v2',
    apiArticles: `${base[ENV]}/api/v2/articles`,
    auth: `${base[ENV]}/accounts/_`,
    domain: base[ENV],
    uploader,
    redeem: redeem[ENV],
    ads: ads[ENV],
    analytic: analytic[ENV],
    asset: asset[ENV],
    setting: {
      timeout: 10000,
      maxRedirects: 1
    }
  }
};
