import fs from 'fs'
import { getPosts } from './posts'

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function generateXML({ urls, hostname }) {
  var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  for (var i in urls) {
    xml += '<url>';
    xml += '<loc>' + hostname + urls[i].url + '</loc>';
    xml += urls[i].lastmod ? '<lastmod>' + urls[i].lastmod + '</lastmod>' : '';
    xml += '<changefreq>' + urls[i].changefreq + '</changefreq>';
    xml += '<priority>' + urls[i].priority + '</priority>';
    xml += '</url>';
    i++;
  }
  xml += '</urlset>';
  return xml;
}

function createSitemap({ hostname, cacheTime, urls }) {
  const xml = generateXML({ urls, hostname, })
  fs.writeFile(
    './sitemap.xml',
    xml,
    () => console.log('[\u2713] Sitemap Generated')
  );
}

const pages = [
  { route: '/', changefreq: 'weekly', priority: 1 },
  { route: '/about', changefreq: 'monthly', priority: 0.5 },
  { route: '/blog', changefreq: 'daily', priority: 0.8 },
  { route: '/changelog', changefreq: 'weekly', priority: 0.5 },
  { route: '/docs', changefreq: 'weekly', priority: 0.7 },
  { route: '/pricing', changefreq: 'monthly', priority: 0.5 }
];

async function fetchAll() {
  try {
    const posts = await getPosts({ limit: 1000 });

    const allData = {
      posts
    };

    const sitemap = createSitemap({
      hostname: 'https://xtechnology.co',
      cacheTime: 600000,
      urls: [
        ...pages.map(p => ({
          url: p.route,
          changefreq: p.changefreq,
          priority: p.priority
        })),
        ...posts.items.map(p => ({
          url: `/blog/${p.fields.slug}`,
          changefreq: 'monthly',
          lastmod: formatDate(p.sys.updatedAt),
          priority: 0.5
        }))
      ]
    });
  } catch (e) {
    console.error(e);
  }
}

fetchAll();