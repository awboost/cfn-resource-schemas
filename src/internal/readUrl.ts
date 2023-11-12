import { IncomingHttpHeaders } from "http";
import { request } from "https";
import { Readable } from "stream";
import { createGunzip, createInflate } from "zlib";

export async function readUrl(url: string): Promise<Readable> {
  return new Promise<Readable>((resolve, reject) => {
    const req = request(
      url,
      {
        headers: {
          "accept-encoding": "deflate, gzip",
        },
      },
      (res) => {
        const encoding = getHeader(res.headers, "content-encoding");

        if (!encoding) {
          resolve(res);
        } else if (encoding === "gzip") {
          resolve(res.pipe(createGunzip()));
        } else if (encoding === "deflate") {
          resolve(res.pipe(createInflate()));
        } else {
          reject(new Error(`can't process encoding ${encoding}`));
        }
      },
    );

    req.on("error", reject);
    req.end();
  });
}

function getHeader(
  headers: IncomingHttpHeaders,
  key: string,
): string | undefined {
  key = key.toLowerCase();

  for (const header in headers) {
    if (header.toLowerCase() === key) {
      const value = headers[header];
      if (Array.isArray(value)) {
        return value.join(", ");
      } else {
        return value;
      }
    }
  }
}
