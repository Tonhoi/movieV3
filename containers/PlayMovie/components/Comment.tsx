import { Box } from "@mui/material";
import Script from "next/script";

const Comment2 = () => {
  return (
    <>
      {/* <MovieDetails movie={data} /> */}
      <Box id="disqus_thread" className="max-w-5xl mx-auto mt-16 px-5" />
      {/* <div id="disqus_thread" className="max-w-5xl mx-auto mt-16 px-5"></div> */}
      <Script>
        {`(function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://https-movie-v3-peach-vercel-app.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();`}
      </Script>
    </>
  );
};

export default Comment2;
