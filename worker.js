/**
* 缓存过期时间（单位：秒）
*/
const CACHE_EXPIRED_TIME = 14400;

/**
* 多语言支持
*/
const LANGUAGES = {
  en: {
    title: 'Download Link Generator',
    enterURL: 'Enter URL:',
    enterFileName: 'Enter File Name:',
    generateLink: 'Generate Accelerated Link',
    reset: 'Reset',
    generateUrlLabel: 'Generate URL:',
    copyLink: 'Copy link',
    downloadLink: 'Download link',
    copiedSuccess: 'Text copied to clipboard',
    failedToCopy: 'Failed to copy text:',
    isInvilidUrl: 'Is invilid url',
    githubText: 'Powered by Cloudflare-Workers-Cache'
  },
  zh: {
    title: '下载链接生成器',
    enterURL: '输入URL：',
    enterFileName: '输入文件名：',
    generateLink: '生成加速链接',
    reset: '重置',
    generateUrlLabel: '生成链接地址：',
    copyLink: '复制链接',
    downloadLink: '下载链接',
    copiedSuccess: '已复制到剪贴板',
    failedToCopy: '复制失败：',
    githubText: '由 Cloudflare-Workers-Cache 提供支持'
  },
  fr: {
    title: 'Générateur de lien de téléchargement',
    enterURL: 'Entrez l\'URL :',
    enterFileName: 'Entrez le nom de fichier :',
    generateLink: 'Générer un lien accéléré',
    reset: 'Réinitialiser',
    generateUrlLabel: 'Générer l\'URL :',
    copyLink: 'Copier le lien',
    downloadLink: 'Télécharger le lien',
    copiedSuccess: 'Texte copié dans le presse-papiers',
    failedToCopy: 'Impossible de copier le texte ：',
    githubText: 'Propulsé par Cloudflare-Workers-Cache'
  },
  es: {
    title: 'Generador de enlaces de descarga',
    enterURL: 'Introduce la URL:',
    enterFileName: 'Introduce el nombre de archivo:',
    generateLink: 'Generar enlace acelerado',
    reset: 'Reiniciar',
    generateUrlLabel: 'Generar URL:',
    copyLink: 'Copiar enlace',
    downloadLink: 'Enlace de descarga',
    copiedSuccess: 'Texto copiado al portapapeles',
    failedToCopy: 'Error al copiar el texto: ',
    githubText: 'Desarrollado por Cloudflare-Workers-Cache'
  },
  de: {
    title: 'Download-Link-Generator',
    enterURL: 'URL eingeben:',
    enterFileName: 'Dateiname eingeben:',
    generateLink: 'Beschleunigten Link generieren',
    reset: 'Zurücksetzen',
    generateUrlLabel: 'Generierte URL:',
    copyLink: 'Link kopieren',
    downloadLink: 'Download-Link',
    copiedSuccess: 'Text in die Zwischenablage kopiert',
    failedToCopy: 'Fehler beim Kopieren des Textes: ',
    githubText: 'Betrieben von Cloudflare-Workers-Cache'
  }
}


/**
* 默认语言为英语
*/
const DEFAULT_LANG = 'en';

const HTML = (lang) => `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <title>${LANGUAGES[lang].title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bulma-toast@2.4.2/dist/bulma-toast.min.js"></script>
    <style>
        #result {
            margin-top: 20px;
            font-size: 1rem;
        }
        .input {
            margin-top: .5rem;
        }
        .button {
            margin-top: .5rem;
        }
        .github-link {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            font-size: 1rem;
            color: #4a4a4a;
            text-decoration: none;
        }
        .github-icon {
            font-size: 1.2rem;
            margin-right: 5px;
        }
    </style>
</head>
<body>
<section class="section">
    <div class="container">
        <h1 class="title has-text-centered">${LANGUAGES[lang].title}</h1>
        <div class="columns is-centered">
            <div class="column">
                <form>
                    <div class="field">
                        <label class="label" for="url">${LANGUAGES[lang].enterURL}</label>
                        <div class="control">
                            <textarea class="textarea is-primary" type="text" id="url" name="url" rows="3">https://example.com
                            </textarea>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="filename">${LANGUAGES[lang].enterFileName}</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="filename" name="filename" value="">
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-primary" type="submit">${LANGUAGES[lang].generateLink}</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light" type="reset">${LANGUAGES[lang].reset}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column">
                <div id="result"></div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="content has-text-centered">
          <div class="github-link">
              <a href="https://github.com/chenzd123456/Cloudflare-Workers-Cache" target="_blank" rel="noopener" class="has-text-weight-bold">
                  <i class="fab fa-github github-icon"></i>
                  ${LANGUAGES[lang].githubText}
              </a>
          </div>
         </div>
      </footer>
</section>

<script>
    const $form = $('form');
    const $resultDiv = $('#result');

    /**
     * 从URL中提取文件名
     * @param url 下载链接
     * @return 文件名
     */
    function getFileName(url) {
        var match = url.match('\/([^\/?#]+)[^\/]*$');
        return match ? match[1] : 'download';
    };

    /**
     * 生成加速链接
     * @param apiUrl API根路径
     * @param url 下载链接
     * @param filename 文件名
     * @return 加速链接URL
     */
    function getAcceleratedUrl(apiUrl, url, filename = '') {
        const base64 = btoa(url);
        const generateUrl = apiUrl + filename + '?url=' + base64;
        return generateUrl
    }

    /**
     * 复制URL到剪贴板
     */
    function copyToClipboard() {
        const generateUrlInput = $('#generate-url');
        const textToCopy = generateUrlInput.val();

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                bulmaToast.toast({
                    message: '${LANGUAGES[lang].copiedSuccess}',
                    type: 'is-success',
                    position: 'top-center',
                    duration: 3000,
                    animate: {in: 'fadeIn', out: 'fadeOut'}
                });
            })
            .catch((err) => {
                bulmaToast.toast({
                    message: '${LANGUAGES[lang].failedToCopy} ' + err,
                    type: 'is-danger',
                    position: 'top-center',
                    duration: 3000,
                    animate: {in: 'fadeIn', out: 'fadeOut'}
                });
            });
    }

    function addResult(generateUrl) {
        var $box = $('<div class="box has-background-light"></div>');
        var $label = $('<label class="label" for="url"></label>').text('${LANGUAGES[lang].generateUrlLabel}');
        var $textarea = $('<textarea class="textarea is-primary is-static" id="generate-url" rows="3" readonly></textarea>').val(generateUrl);
        var $buttonGroup = $('<div class="field is-grouped mt-3 buttons"></div>');
        var $copyButton = $('<button class="button is-info"></button>').text('${LANGUAGES[lang].copyLink}').click(copyToClipboard);
        var $downloadButton = $('<a class="button is-info" href="' + generateUrl + '"></a>').text('${LANGUAGES[lang].downloadLink}');

        $box.append($label, $textarea, $buttonGroup);
        $buttonGroup.append($copyButton, $downloadButton);
        $resultDiv.html($box);
    }

    function removeResult() {
        $resultDiv.html('');
    }

    $form.on('submit', event => {
        event.preventDefault();
        const url = $('#url').val().trim();
        let filename = $('#filename').val().trim();
        if (!filename) {
            filename = getFileName(url);
        }
        const apiUrl = window.location.href;
        const generateUrl = getAcceleratedUrl(apiUrl, url, filename)
        console.log(generateUrl);
        addResult(generateUrl)
    });

    $form.on('reset', event => {
        removeResult()
    });
</script>
<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
</body>
</html>
`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  // 检查查询参数中是否包含base64编码的URL
  const urlParam = new URL(request.url).searchParams.get('url')
  const language = request.headers.get('accept-language');
  const langCode = language ? language.split(',')[0].substring(0, 2) : DEFAULT_LANG;
  
  if (!urlParam) {
    const response = new Response(HTML(langCode), {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    })
    return response;
  }
  
  // 将base64编码的URL解码成真正的URL
  const url = atob(urlParam);
  
  // 发送对原始资源的请求
  const cache = caches.default;
  let response = await cache.match(url);
  
  if (!response) {
    response = await fetch(url)
    await cache.put(url, response.clone())
  }

  const fileSize = Number(response.headers.get('content-length'));

  // 返回响应
  return new Response(response.body, {
    status: response.status,
    headers: {
      ...response.headers,
      'Cache-Control': `public, max-age=${CACHE_EXPIRED_TIME}`, // 设置资源缓存时间
      'Content-Length':fileSize,
    }
  })
} 
