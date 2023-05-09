const CACHE_EXPIRED_TIME = 14400; //Cache Expiration Time (in seconds)
const DEFAULT_LANG = 'en'; // English set as the default language.
const JQUERY_SRC = 'https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js';
const TOAST_SRC = 'https://cdn.jsdelivr.net/npm/bulma-toast@2.4.2/dist/bulma-toast.min.js';
const BULMA_CSS_SRC = 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
const ANIMATE_CSS_SRC = 'https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css';

/**
* Multilingual Support
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
        isInvilidUrl: 'Is invalid url',
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
        isInvilidUrl: 'URL 地址无效',
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
        failedToCopy: 'Impossible de copier le texte :',
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
    },
    ar: {
        title: 'مولد روابط التنزيل',
        enterURL: 'أدخل الرابط:',
        enterFileName: 'أدخل اسم الملف:',
        generateLink: 'إنشاء رابط مسرع',
        reset: 'إعادة تعيين',
        generateUrlLabel: 'إنشاء رابط',
        copyLink: 'نسخ الرابط',
        downloadLink: 'رابط التنزيل',
        copiedSuccess: 'تم نسخ النص إلى الحافظة',
        failedToCopy: 'فشل نسخ النص: ',
        isInvilidUrl: 'الرابط غير صالح',
        githubText: 'مشغل بواسطة Cloudflare-Workers-Cache'
    },
    ja: {
        title: 'ダウンロードリンクジェネレーター',
        enterURL: 'URL を入力してください：',
        enterFileName: 'ファイル名を入力してください：',
        generateLink: '加速リンクを生成',
        reset: 'リセット',
        generateUrlLabel: 'URL を生成',
        copyLink: 'リンクをコピー',
        downloadLink: 'ダウンロードリンク',
        copiedSuccess: 'テキストがクリップボードにコピーされました',
        failedToCopy: 'テキストのコピーに失敗しました：',
        isInvilidUrl: '無効なURLです',
        githubText: 'Cloudflare-Workers-Cacheによって支援されています'
    },
    ko: {
        title: '다운로드 링크 생성기',
        enterURL: 'URL을 입력하십시오 :',
        enterFileName: '파일 이름을 입력하세요 :',
        generateLink: '가속 링크 생성',
        reset: '초기화',
        generateUrlLabel: 'URL 생성 :',
        copyLink: '링크 복사',
        downloadLink: '다운로드 링크',
        copiedSuccess: '텍스트가 클립 보드에 복사되었습니다',
        failedToCopy: '텍스트 복사 실패 :',
        isInvilidUrl: '잘못된 URL 입니다',
        githubText: 'Cloudflare-Workers-Cache의 지원으로 작동됨'
    }
}

const HTML = (lang) => `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <title>${LANGUAGES[lang].title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${BULMA_CSS_SRC}">
    <link rel="stylesheet" href="${ANIMATE_CSS_SRC}"/>
    <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
    <script src="${JQUERY_SRC}"></script>
    <script src="${TOAST_SRC}"></script>
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
        <h1 class="title has-text-centered">
            <i class="fas fa-cloud-download-alt"></i>
            ${LANGUAGES[lang].title}
        </h1>
        <div class="columns is-centered">
            <div class="column">
                <form>
                    <div class="field">
                        <label class="label" for="url">${LANGUAGES[lang].enterURL}</label>
                        <div class="control">
                            <textarea class="textarea is-primary" type="text" id="url" name="url" rows="3" autofocus>https://example.com</textarea>
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
    var $form = $('form');
    var $resultDiv = $('#result');

    function getFileName(url) {
        var regex = new RegExp('\/([^\/?#]+)[^\/]*$');
        var match = url.match(regex);
        return match ? match[1] : 'download';
    }

    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
    
    function toBase64(str) {
        try {
            return btoa(str);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    function getAcceleratedUrl(apiUrl, url, filename = '') {
        var base64 = toBase64(url);
        if (!base64) {
            return null;
        }
        var generateUrl = apiUrl + filename + '?url=' + base64;
        return generateUrl;
    }

    function copyToClipboard() {
        var generateUrlInput = $('#generate-url');
        var textToCopy = generateUrlInput.val();

        var textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('style', 'opacity:0;');
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        bulmaToast.toast({
            message: '${LANGUAGES[lang].copiedSuccess}',
            type: 'is-success',
            position: 'top-center',
            duration: 3000,
            animate: {in: 'fadeIn', out: 'fadeOut'}
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
        removeResult();
        var url = $('#url').val().trim();
        
        if(!isValidUrl(url)) {
            bulmaToast.toast({
                message: '${LANGUAGES[lang].isInvilidUrl}',
                type: 'is-danger',
                position: 'top-center',
                duration: 3000,
                animate: {in: 'fadeIn', out: 'fadeOut'}
            });
            return;
        }

        var filename = $('#filename').val().trim();

        if (!filename) {
            filename = getFileName(url);
        }

        var apiUrl = window.location.href;
        var generateUrl = getAcceleratedUrl(apiUrl, url, filename);
        console.log(generateUrl);
        removeResult();
        addResult(generateUrl);
    });

    $form.on('reset', event => {
        removeResult();
    });
</script>
</body>
</html>
`;


addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
    // Check if the query parameters contain a URL encoded in base64.
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

    // Decode the URL encoded in base64 to its original URL.
    const url = atob(urlParam);

    // Send a request for the original resource.
    const cache = caches.default;
    let response = await cache.match(url);

    if (!response) {
        response = await fetch(url)
        await cache.put(url, response.clone())
    }

    const fileSize = Number(response.headers.get('content-length'));
    
    return new Response(response.body, {
        status: response.status,
        headers: {
            ...response.headers,
            'Cache-Control': `public, max-age=${CACHE_EXPIRED_TIME}`, // Set the cache duration for the resource.
            'Content-Length': fileSize,
        }
    })
} 
