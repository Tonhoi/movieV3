import { Fragment, memo } from "react";
import Script from "next/script";
import { Box } from "@mui/material";

const Comment = () => {
  return (
    <Fragment>
      <Box id="disqus_thread" className="max-w-5xl mx-auto mt-16 px-5" />
      <Script>
        {`(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://https-movie-v3-peach-vercel-app.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
      })();`}
      </Script>
    </Fragment>
  );
};

export default memo(Comment);
