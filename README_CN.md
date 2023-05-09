# Cloudflare Workers Cache

![GitHub](https://img.shields.io/github/license/chenzd123456/Cloudflare-Workers-Cache?color=%2335C43F)
![GitHub last commit](https://img.shields.io/github/last-commit/chenzd123456/Cloudflare-Workers-Cache?color=%23555555)
![GitHub language count](https://img.shields.io/github/languages/count/chenzd123456/Cloudflare-Workers-Cache?color=%23478CBF)

[English](README.md) | 简体中文

通过使用 Cloudflare Workers Cache，您可以提升资源下载速度。这个项目提供以下主要功能：

1. 通过 Cache API 缓存、更新及检索响应。
2. 透明的支持 HTTP/HTTPS 不同协议。
3. 快速、可靠的缓存（被 Cloudflare 用于全球性网络）。
4. 支持修改下载文件的文件名。
5. 解决中国大陆地区无法访问或访问速度慢的问题。

## 什么是 Cloudflare Workers？

Cloudflare Workers 是 Cloudflare 提供的基于 JavaScript 运行时的无服务器平台。使用 Workers，您可以将代码放在全球各地的数据中心进行运行，以加速应用程序响应速度、减少延迟，并且降低服务器成本。

其中一种常用场景是在边缘缓存静态资源，以减少客户端和服务器之间的往返请求，从而提高网站的速度和性能。

## 使用方法

1. 在 Cloudflare 控制台中添加一个 Workers，并复制这个项目中 `workers.js` 文件的内容到 Workers 的编辑器中。

2. 根据您的需求更改代码中的配置项参数，具体说明可参考代码注释。

3. 部署 Workers 并关联到您的域名。您可以使用默认的 Workers 域名进行测试，也可以添加自定义域名。

4. 确认 Workers 脚本已配置正确并缓存生效。您可以使用 `curl` 命令检查返回头信息：

    ```shell
    curl -I 生成的加速链接
    ```

5. 在您的网站中加入下面的代码：

    首先加入加速链接生成函数：

    ```html
    <script>
        function getAcceleratedUrl(apiUrl, url, filename = '') {
          const base64 = btoa(url);
          const generateUrl  = apiUrl + filename + '?url=' + base64;
          return generateUrl
        }
    </script>
    ```

    然后生成资源加速链接：

    ```js
    getAcceleratedUrl(您部署的 Workers 域名, 资源 URL, 可选的文件名)
    ```

## 贡献

欢迎参与本项目的贡献。您可以创建一个 Issue 或提交一个 Pull Request 来完善这个项目。

## 许可证

这个项目使用 MIT 许可证。更多信息请查看 [LICENSE](https://github.com/chenzd123456/Cloudflare-Workers-Cache/blob/main/LICENSE) 文件。
