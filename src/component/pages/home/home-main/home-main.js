import React from 'react';
import SectionAbout from './sections/section-about';
import SectionService from './sections/section-service';
import SectionBlog from './sections/section-blog';

export default () => {
    return(
        <div className="home-main">
            <SectionAbout/>
            <SectionService/>
            <SectionBlog/>
        </div>
    )
}