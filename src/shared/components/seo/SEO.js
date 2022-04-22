import React from 'react';
import Helmet from 'react-helmet';

function SEO({title, description,url}){
    const seoTitle = "Super Liga - ";
    const seoUrl = "localhost:3000";

    return(
        <Helmet title={seoTitle + title} description={description}>
            {/*OpenGraph tags*/}
            <meta property="og:title" content={seoTitle + title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={seoUrl + url} /> 

            {/*Twitter Card tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={seoTitle + title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}

export default SEO;