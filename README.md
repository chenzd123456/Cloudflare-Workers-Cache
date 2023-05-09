# Cloudflare Workers Cache

![GitHub license](https://img.shields.io/github/license/chenzd123456/Cloudflare-Workers-Cache?color=%2335C43F)
![GitHub last commit](https://img.shields.io/github/last-commit/chenzd123456/Cloudflare-Workers-Cache?color=%23555555)
![GitHub language count](https://img.shields.io/github/languages/count/chenzd123456/Cloudflare-Workers-Cache?color=%23478CBF)

English | [简体中文](README_CN.md)

By using Cloudflare Workers Cache, you can improve the speed of downloading resources. This project provides the following main features:

1. Caching, updating and retrieving responses through Cache API.
2. Transparent support for HTTP/HTTPS different protocols.
3. Fast and reliable cache (used by Cloudflare for global networks).
4. Support for modifying the file name of the downloaded file.
5. Solve the problem of slow access or no access in mainland China.

## What is Cloudflare Workers?

Cloudflare Workers is the serverless platform based on JavaScript runtime provided by Cloudflare. With Workers, you can run code in data centers around the world to speed up application response times, reduce latency, and lower server costs.

One common use case is to cache static resources at the edge to reduce round-trip requests between clients and servers, thereby improving website speed and performance.

## Usage

1. Add a worker in the Cloudflare console and copy the contents of the `workers.js` file in this project to the editor of the worker.

2. Modify the configuration parameter in the code according to your needs. Please refer to the code comments for detailed explanations.

3. Deploy the worker and associate it with your domain name. You can test it using the default worker domain name, or add a custom domain name.

4. Confirm that the Workers script is configured correctly and the cache is effective. You can use the `curl` command to check the headers:

   ```shell
   curl -I accelerated link
   ```

5. Add the following code to your website:

   First, add the function that generates the accelerated link:

   ```html
   <script>
        function getAcceleratedUrl(apiUrl, url, filename = '') {
          const base64 = btoa(url);
          const generateUrl  = apiUrl + filename + '?url=' + base64;
          return generateUrl
        }
    </script>
   ```

   Then generate the accelerated link of the resource:

   ```js
   getAcceleratedUrl(Workers domain name you deployed, resource URL, optional file name)
   ```

## Contribution

Welcome to contribute to this project. You can create an Issue or submit a Pull Request to improve this project.

## License

This project uses the MIT license. For more information, please see the [LICENSE](https://github.com/chenzd123456/Cloudflare-Workers-Cache/blob/main/LICENSE) file.
