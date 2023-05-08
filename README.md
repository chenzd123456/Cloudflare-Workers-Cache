# Cloudflare Workers Cache

![GitHub](https://img.shields.io/github/license/chenzd123456/Cloudflare-Workers-Cache?color=%2335C43F)
![GitHub last commit](https://img.shields.io/github/last-commit/chenzd123456/Cloudflare-Workers-Cache?color=%23555555)
![GitHub language count](https://img.shields.io/github/languages/count/chenzd123456/Cloudflare-Workers-Cache?color=%23478CBF)

借助 Cloudflare Workers，您可以轻松地提升资源下载速度。

## 简介

使用 Cloudflare-Workers-Cache 提升资源下载速度。以下是这个库提供的一些主要功能：

1. 通过 Cache API 缓存、更新及检索响应。

2. 透明的支持 HTTP/HTTPS 不同协议。

3. 快速且可靠的缓存（被 Cloudflare 用于全球性网络）。

## 什么是 Cloudflare Workers ？

Cloudflare Workers是Cloudflare提供的基于JavaScript运行时的无服务器平台。通过使用Workers，您可以将代码放在全球各地的数据中心进行运行，以加速应用程序响应速度，减少延迟，并减少服务器成本。

常用场景之一就是在边缘缓存静态资源，以减少客户端和服务器之间的往返请求，从而提高网站的速度和性能。

## 使用方法

1. 首先，在 Cloudflare 控制台添加一个 Workers，并复制这个项目中 `workers.js` 文件的内容到 Workers 的编辑器中。

2. 根据您的需求更改代码中配置项的参数，具体说明请参见代码注释。

3. 部署 Workers 并关联到您的域名，你可以使用默认的 Workers 域名进行测试，也可以添加自定义域名。

4. 确认 Workers 脚本已配置正确并缓存生效，您可以使用 `curl` 命令检查返回头信息。

    ```shell
    curl -I 生成的加速链接
    ```
    
## 贡献

欢迎参与本项目的贡献，您可以创建一个 Issue 或提交一个 Pull Request 来共同完善这个项目。

## 许可证

这个项目使用 MIT 许可证。查看 [LICENSE](https://github.com/chenzd123456/Cloudflare-Workers-Cache/blob/main/LICENSE) 文件了解更多信息。
