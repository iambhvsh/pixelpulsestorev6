/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import AppstorePage from '../components/AppstorePage';
import AppstorePageTitle from '../components/AppstorePageTitle';
import AppstoreCard from '../components/AppstoreCard';
import './Today.less';

import { apps, games } from '../js/data';

const Today = () => {
  const todayDate = new Date();
  const todayDateTitle = 'Today';
  const todayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long' }).format(todayDate);
  const yesterdayDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  const yesterdayDateTitle = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(yesterdayDate);
  const yesterdayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long' }).format(yesterdayDate);

  const appChatGPT = apps.find((app) => app.title === 'ChatGPT');
  const appYoutube = apps.find((app) => app.title === 'YouTube: Watch, Listen, Stream');
  const appInstagram = apps.find((app) => app.title === 'Instagram');
  const appPicsArt = apps.find((app) => app.title === 'PicsArt Lite: Photo Editor + Collage');

  return (
    <AppstorePage noCollapsedNavbar>
      <AppstorePageTitle title={todayDateTitle} heading={todayDateHeading} accountLink />
      <div className="appstore-card-grid">
        <AppstoreCard
          image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_MY_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1633475275000"
          title="thepixelstore"
          titleLarge
          titleColor="#000"
          titlePosition="top"
          subtitle="About"
          subtitleColor="#000"
          closeButtonColor="#000"
        >
          <p>Welcome to <b>thepixelstore</b>, a cutting-edge marketplace built on ReactJs and Framework7. Our goal is to deliver a flawless user experience, combining seamless functionality with visually captivating design, reminiscent of the renowned iOS App Store. Discover a curated selection of applications designed to enhance productivity, creativity, and entertainment, all within an interface that prioritizes both style and usability.</p>
          
        </AppstoreCard>

        <AppstoreCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf210LacD3OodVEPHY2JA3X2NyvhJd-7DMDp_GA5RhCKIaL7umbI4d1TJF&s=10"
          title={(<span>APP<br />OF THE<br />DAY</span>)}
          titleColor="#fff"
          appColor="#000"
          titlePosition="bottom"
          titleLarge
          app={appChatGPT}
        >
          <p>ChatGPT is an advanced AI language model developed by OpenAI, designed to engage in natural language conversations with users. Available through various platforms and integrations, the ChatGPT app allows users to interact with the model to ask questions, seek information, receive explanations, and even generate text based on prompts. It leverages machine learning to continuously improve its responses, offering personalized interactions and serving a wide range of practical and creative purposes for users seeking conversational AI capabilities.</p>
        </AppstoreCard>
        <AppstoreCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY38cPwF-QilyRTb2jBBmsUebM5V_MczmMzvzzuHKzvtGy2RVJhfchF0&s=10"
          title={(<span>APP<br />OF THE<br />DAY</span>)}
          titleColor="#FFA500"
          titlePosition="bottom"
          titleLarge
          app={appYoutube}
        >
          <p>YouTube is a widely popular video-sharing platform where users can watch, share, and upload videos across a vast array of genres and interests. The YouTube app provides easy access to this content on mobile devices, allowing users to discover trending videos, subscribe to channels, create playlists, and engage through likes, comments, and shares. It supports a range of features such as offline viewing, personalized recommendations based on viewing history, and live streaming capabilities, making it a versatile and integral part of digital entertainment for millions globally.</p>
        </AppstoreCard>
      </div>

      <AppstorePageTitle title={yesterdayDateTitle} heading={yesterdayDateHeading} accountLink={false} />
      <div className="appstore-card-grid">
        <AppstoreCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDjApsH7oCOXK2rPBdAWGAhAmR6vKPt_4jK2JH63QDAJYdJ0jgwzDA9Q&s=10"
          title="EDITING"
          subtitle="Best in"
          titleColor="#000"
          titlePosition="bottom"
          titleLarge
          appColor="#000"
          app={appPicsArt}
        >
          <p>PicsArt is one of today's top apps on the App Store, celebrated for its powerful photo editing and creative tools. It offers a wide range of features including advanced filters, customizable effects, collage making, and drawing tools, all designed to enhance and transform photos into captivating works of art. With a user-friendly interface and a thriving community, PicsArt encourages creativity and collaboration, making it a favorite among aspiring and professional photographers alike.</p>
        </AppstoreCard>
        <AppstoreCard
          image="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D"
          title={(<span>APP<br />OF THE<br />DAY</span>)}
          titleColor="#000"
          titlePosition="bottom"
          titleLarge
          closeButtonColor="#000"
          app={appInstagram}
          appColor="#000"
        >
          <p>Instagram remains one of today's top apps on the App Store, renowned for its focus on visual storytelling and social networking. Users can share photos and videos with their followers, apply filters and effects, and engage through likes, comments, and direct messaging. The platform fosters creativity through features like Stories, IGTV, and Reels, providing tools for both personal expression and brand promotion. With its intuitive interface and vast user base, Instagram continues to shape digital culture and inspire connections worldwide.</p>
        </AppstoreCard>
      </div>
    </AppstorePage>
  );
};

export default Today;
