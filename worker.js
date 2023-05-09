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
        githubText: 'Powered by Cloudflare-Workers-Cache',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: '由 Cloudflare-Workers-Cache 提供支持',
        disclaimerText: `
            <p>免责声明</p>
            <p>在使用本工具之前，请仔细阅读并理解本声明。您的使用将视为接受本免责声明。</p>
            <p>I. 服务可靠性</p>
            <p>该工具是基于Cloudflare Workers平台开发，并依赖于平台提供的云计算资源。因此，该工具受Cloudflare平台服务可靠性的影响。如果Cloudflare平台服务中断、故障或出现其他技术问题，可能导致该工具无法使用。使用该工具的用户需要自行承担风险和责任。</p>
            <p>II. 缓存内容的合法性</p>
            <p>该工具的缓存功能仅用于缓存指定URL网页的内容，不能保证网页内容的真实性、合法性和准确性。如果网页内容违反相关法律法规或侵犯他人合法权益，使用该工具缓存内容的用户需要承担相应的法律责任和赔偿责任。</p>
            <p>III. 其他责任</p>
            <p>该工具的开发者为合法使用该工具提供可能的协助，但不对满足用户特定需求、无错或无中断作出任何承诺。使用该工具导致的任何风险和后果由用户承担。</p>
            <p>IV. 注意事项</p>
            <ol>
                <li>请合理使用工具并遵守Cloudflare平台的规定和相关法律法规。</li>
                <li>在使用该工具之前，请确保您具有足够的计算机技术知识和经验，以确保用户按照指示正确使用该工具。</li>
                <li>如果发现该工具存在错误或安全漏洞，请及时联系开发者，并积极配合相关部门进行安全监测和调查工作。</li>
                <li>开发者保留随时修改本免责声明和该工具使用条款的权利，最终解释权归开发者所有。</li>
            </ol>
            <p>如果本声明任何条款与相关法律法规不一致，则这些条款将按照法律法规的规定重新解释，而其他条款仍然有效。</p>
            `
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
        githubText: 'Propulsé par Cloudflare-Workers-Cache',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: 'Desarrollado por Cloudflare-Workers-Cache',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: 'Betrieben von Cloudflare-Workers-Cache',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: 'مشغل بواسطة Cloudflare-Workers-Cache',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: 'Cloudflare-Workers-Cacheによって支援されています',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
        githubText: 'Cloudflare-Workers-Cache의 지원으로 작동됨',
        disclaimerText: `
            <p>Disclaimer</p>
            <p>Before using the tool, please read and understand this statement carefully. Your use of the tool constitutes acceptance of this disclaimer.</p>
            <p>I. Reliability of Service</p>
            <p>The tool is developed based on the Cloudflare Workers platform and relies on the cloud computing resources provided by the platform. Therefore, the tool is subject to the reliability of the Cloudflare platform service. If the Cloudflare platform service is interrupted, malfunctioning or other technical issues, it may cause the tool to be unusable. Users who use the tool need to take their own risks and responsibilities.</p>
            <p>II. Legality of Cached Content</p>
            <p>The cache function of the tool is only used for caching the content of the specified URL webpage, and cannot guarantee the authenticity, legality, and accuracy of the webpage content. If the webpage content violates relevant laws and regulations or infringes on the legitimate rights and interests of others, users who use the tool to cache the content need to take corresponding legal responsibilities and compensation responsibilities.</p>
            <p>III. Other Responsibilities</p>
            <p>The developer of the tool provides possible assistance for the legitimate use of the tool, but does not make any promise to satisfy the specific needs of users, be free of errors or uninterrupted. Any risks and consequences arising from the use of the tool are borne by the user.</p>
            <p>IV. Precautions</p>
            <ol>
              <li>Please use the tool reasonably and comply with the regulations of the Cloudflare platform and relevant laws and regulations.</li>
              <li>Before using the tool, please ensure that you have sufficient computer technical knowledge and experience to ensure that users use the tool correctly as instructed.</li>
              <li>If errors or security vulnerabilities are found in the tool, please contact the developer in time and actively cooperate with the relevant departments for security monitoring and investigation work.</li>
              <li>The developer reserves the right to modify this disclaimer and the terms of use of the tool at any time, and the final interpretation right belongs to the developer.</li>
            </ol>
            <p>If any terms of this statement are inconsistent with relevant laws and regulations, these terms will be re-interpreted in accordance with the provisions of laws and regulations, while other terms will remain valid.</p>
            `
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
    <div class="content has-text-centered">
        <div class="github-link">
            <a href="https://github.com/chenzd123456/Cloudflare-Workers-Cache" target="_blank" rel="noopener" class="has-text-weight-bold">
                <i class="fab fa-github github-icon"></i> ${LANGUAGES[lang].githubText}
            </a>
        </div>
    </div>
    <footer class="footer">
        <div class="content disclaimer">
            <p>${LANGUAGES[lang].disclaimerText}</p>
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
